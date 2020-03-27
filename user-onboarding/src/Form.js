import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
   name: yup.string().required("Name is required dummy"),
   email: yup
    .string()
    .email("Need a valid email my guy")
    .required("where's the email?"),
   password: yup
    .string()
    .min(6,"Your password is too short")
    .required("whats the password!?!?"),
   terms: yup
    .boolean().oneOf([true], "Accept my terms scrub")   

})

export default function Form() {
    const [formState, setFormState] = useState({
       name: "",
       email: "",
       password: "",
       terms: "", 
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: "",
    })

    const [post, setPost] = useState([])

    const inputChange = e =>{
        e.persist();
        const newFormData ={
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        validateChange(e);
        setFormState(newFormData);
    }

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: "  "
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    const [buttonDisabled, setButtonDisabled] = useState(true);


    useEffect(()=>{
        formSchema.isValid(formState).then(valid=>{
            setButtonDisabled(!valid);
        });
    },[formState]);

    const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data); // get just the form data from the REST api
            console.log("success", post);
            // reset form if successful
            setFormState({
              name: "",
              email: "",
              password: "",
              terms: ""
              
            });
          })
          .catch(err => console.log(err.response));
      };


    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name
                <input
                 id="name"
                 type="text"
                 name="name"
                 value={formState.name}
                 onChange={inputChange}
                
                />
                {errors.name.length > 0 ? 
                (<p className="error">{errors.name}</p>) : null}
            </label>
            <br/>
            <label htmlFor="email">
                Email
                <input
                 id="email"
                 type="text"
                 name="email"
                 value={formState.email}
                 onChange={inputChange}
                
                />
                {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
            </label>
            <br/>
            <label htmlFor="password">
                Password
                <input
                 id="password"
                 type="text"
                 name="password"
                 value={formState.password}
                 onChange={inputChange}
                
                />
                {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
            </label>
            <br/>
            <label htmlFor="terms" className="terms">
                
                <input
                 id="terms"
                 type="checkbox"
                 name="terms"
                 checked={formState.terms}
                 onChange={inputChange}
                
                />
                Terms and Conditions
            </label> 
            <pre>{JSON.stringify(post, null, 2)}</pre>
 
            <br/>
            <button disabled={buttonDisabled}>Submit</button>
        </form>
    )
}

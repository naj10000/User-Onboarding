import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";



 function FormFunction({ values, errors, touched, status }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("status has changed!", status);
       
        status && setUsers(users => [...users, status]);
      }, [status]);

    return (
        <div>
            <Form>
                <label htmlFor="name">Name 
                <Field 
                 id="name"
                 type="text"
                 name="name"
                 placeholder="name"
                /> {touched.name && errors.name && (
                    <p className="errors">{errors.name}</p>
                  )}

               </label>
                <label htmlFor="name">Email
                <Field 
                 id="email"
                 type="text"
                 name="email"
                 placeholder="email"
                />
                 {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
                </label>
                <label htmlFor="password">Password
                <Field 
                 id="password"
                 type="text"
                 name="password"
                 placeholder="password"
                />
                    {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>)}
                </label>
                <label htmlFor="name">Terms of Service
                <Field 
                 id="termsOfService"
                 type="checkbox"
                 name="termsOfService"
                />
                    {touched.termsOfService && errors.termsOfService && (
            <p className="errors">{errors.termsOfService}</p>)}

                
                </label>
                <button type="submit">Submit</button>
            </Form>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre> */}
      {users.map(user => {
        return (
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
          </ul>
        );
      })}
            
        </div>
    )
}

const FormikFormFunction = withFormik({
    mapPropsToValues(props){
        return {
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            termsOfService: props.termsOfService || false
            
          };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("NAME IS REQUIRED"),
        
        email: Yup.string().required("EMAIL IS MANDATORY"),

        password: Yup.string().required("PASSWORD IS REQUIRED"),

        termsOfService: Yup.string().required("")
      }),

      handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        axios
          .post("https://reqres.in/api/users", values)
          .then(res => {
            console.log("success", res);
            // sends a status update through props in AnimalForm with value as res.data content
            setStatus(res.data);
    
            //clears form inputs, from FormikBag
            resetForm();
          })
          .catch(err => console.log(err.response));
      }
})(FormFunction)



export default FormikFormFunction;
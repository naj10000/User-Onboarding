import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";



 function FormFunction({ values, errors, touched, status }) {
    return (
        <div>
            <Form>
                <label htmlFor="name">Name 
                <Field 
                 id="name"
                 type="text"
                 name="name"
                 placeholder="name"
                />
               </label>
                <label htmlFor="name">Email
                <Field 
                 id="email"
                 type="text"
                 name="email"
                 placeholder="email"
                />
                </label>
                <label htmlFor="password">Password
                <Field 
                 id="password"
                 type="text"
                 name="password"
                 placeholder="password"
                />
                </label>
                <label htmlFor="name">Terms of Service
                <Field 
                 id="termsOfService"
                 type="checkbox"
                 name="termsOfService"
                />
                </label>
                <button type="submit">Submit</button>
            </Form>
            
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
    }
})(FormFunction)



export default FormikFormFunction;
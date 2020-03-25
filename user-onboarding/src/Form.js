import React from 'react'

export default function Form() {
    return (
        <div>
            <label>
                Name
                <input
                 id="name"
                 type="text"
                 name="name"
                
                />
            </label>
            <br/>
            <label>
                Email
                <input
                 id="email"
                 type="text"
                 name="email"
                
                />
            </label>
            <br/>
            <label>
                Password
                <input
                 id="password"
                 type="text"
                 name="password"
                
                />
            </label>
            <br/>
            <label>
                
                <input
                 id="terms"
                 type="checkbox"
                 name="terms"
                
                />
                Terms and Conditions
            </label>
        </div>
    )
}

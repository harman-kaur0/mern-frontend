import React, { useState } from "react"

const SignUp = () => {
    const [form, setForm] = useState({firstName: "", lastName: "", email: "", password: ""})


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = () => {

    }


    return (
        <>
            <form style={{marginTop: "50px"}} onSubmit={handleSubmit}>
                <input placeholder="First Name" name="firstName" onChange={handleChange}/>
                <input placeholder="Last Name" name="lastName" onChange={handleChange}/>
                <input placeholder="email" name="email" type="email" onChange={handleChange}/>
                <input name="password" type="password" placeholder="password" onChange={handleChange}/>
                <input name="confirmPassword" placeholder="confirm password" onChange={handleChange} type="password"/>
                <button type="submit">Sign Up</button>
            </form>

        </>
    )
}

export default SignUp;
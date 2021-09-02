import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import {signup} from '../actions/auth'
import { useDispatch } from 'react-redux'

const initialState = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""};

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [form, setForm] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(form, history))
        console.log(form);
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
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
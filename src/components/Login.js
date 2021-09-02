import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import {signin} from '../actions/auth'

const initialState = {email: '', password: ''}

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialState);

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: 'AUTH', data: {result, token}});
        } catch(error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was Unsuccessful. Try Again Later.")
    }

    const handleSubmit = (e) => {
        e.preventDafault();
        dispatch(signin(form, history))
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <>
            <form style={{marginTop: "50px"}} onSubmit={handleSubmit}>
                <input placeholder="email" type="text" name="email" onChange={handleChange}/>
                <input placeholder="password" type="password" name="password" onChange={handleChange}/>
                <button type="submit">Sign In</button>
            </form>

            <GoogleLogin 
                clientId="20659142695-pnfuisjj6bopijthh58pm55dm38dh8c6.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                    >
                        Google Sign in

                    </button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
            />
        </>
    )
}

export default Login;
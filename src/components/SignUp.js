import React from "react"
import { GoogleLogin } from 'react-google-login'

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = () => {

    }

    const googleSuccess = (res) => {
        console.log(res);
    }

    const googleFailure = () => {
        console.log("Google Sign In was Unsuccessful. Try Again Later.")
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

            <GoogleLogin 
                clientId="GOOGLE ID"
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

export default SignUp;
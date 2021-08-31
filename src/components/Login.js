import React from "react"
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch();

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
    return (
        <>
            <form style={{marginTop: "50px"}}>
                <input placeholder="username" type="text"/>
                <input placeholder="username" type="text"/>
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
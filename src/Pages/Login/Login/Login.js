import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="text-center mt-4">
            <h2 className="my-4">Please Log in to your account</h2>
            <div className="googleSignIn-btn">
                <button onClick={handleGoogleLogin} className="googleSignIn-btn1">
                    <img className="btn-image" src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" />
                    <span className="googleSignIn-btn3">Sign In with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
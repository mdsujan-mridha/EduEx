import React, { useRef } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import ScocialLogin from './ScocialLogin/ScocialLogin';

const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/home');
    }
//   <=================================handle error ============================>
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }






    return (
        <div>
            <div className="container login">
                <h2 className='text-center mt-5 text-dark'> Login </h2>
                <hr className="new-login" />
                <div className="login-contanier">
                    <form onSubmit={handleLoginSubmit}>
                        <input ref={emailRef} className='input-field' type="email" name="" id="1" placeholder='Enter Your Email' />
                        <input ref={passwordRef} className='input-field' type="password" name="password" id="2" placeholder='Enter Password' />
                        <input className='login-btn' type="submit" value="login" />

                    </form>
                    <h6> You are not register ? <Link to="/register"> <span> Create an Account </span> </Link>   </h6>
                </div>
                {errorElement}
                <ScocialLogin></ScocialLogin>
            </div>
        </div>
    );
};

export default Login;
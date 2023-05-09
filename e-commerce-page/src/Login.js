import React, { useState } from 'react';
import './Register.css';
// import Register from './Register'
import {auth} from './firebase';
// import Header from './Header';
import { Link, Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsEmailValid(!!event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsPasswordValid(!!event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => { alert('Login Successfull');
            setLoggedIn(true); 
            navigate('/home'); })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    alert('User not registered. Please sign up first.');
                } else {
                    console.log(error);
                }
            });
    };

    const handleLogout = async (event) => {
        event.preventDefault();
        auth.signOut()
            .then(() => {
                alert('Logout successfull');
                setLoggedIn(false);
                navigate('/');
            })
            .catch((error) => console.log(error));
    };


return (
    <>
    {/* <Header loggedIn={loggedIn} handleLogout={handleLogout} /> */}
    <div className='.bg-image'>
        <h1 style={{color:"red"}}>The Page is Protected use your credentials and login</h1>
        <img src="https://api.logo.com/api/v2/images?logo=logo_a02e19cd-1fa7-4037-b6c4-b9e415c5e155&format=webp&margins=0&quality=60&width=500&background=transparent&u=1682233456" alt="logo" className="logo-img1" />

    <div className='login'>
        <h1>User Login</h1>
        <Outlet />
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} required className={isEmailValid ? '' : 'invalid'} />
                {!isEmailValid && <p>Please fill in the email field</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} required className={isPasswordValid ? '' : 'invalid'} />
                {!isPasswordValid && <p>Please fill in the password field</p>}
            </div>
            <button type="submit">Login</button>
            <div>
                <p style={{ display: "inline" }}>Don't have an account? </p>
                <Link to="/register" style={{ display: "inline" }}>Sign up</Link>
            </div>

        </form>
        {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
    </div>
    </>
);
}

export default LoginPage;
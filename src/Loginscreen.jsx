import React, {useState} from "react";
import banilogo from "./banilogo.svg"


export const Loginscreen = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <div className="formContainer">
            <div className="logo"><img src={banilogo} alt="Logo" /></div>
            <form className="formBody">
                <h2>Log in to your account</h2>
                <p>Don’t have an account? <a href="#">Get Started</a> </p>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                <a href="#" className="forgotPas">Forgot Password</a>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
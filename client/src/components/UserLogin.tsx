import '../assets/css/login.css'
import React, {FormEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // const handleLogin = () => {
    //     // You can add login functionality here
    //     console.log(`Username: ${username}, Password: ${password}`);
    // };
    async function handleLogin(event:FormEvent) {
        event.preventDefault();
        try {
            await axios.post("/api/user/login", {
                username: username,
                password: password,
            }).then((res) =>
            {
                console.log(res.data);
                if (res.data.message === "username does not exits")
                {
                    alert("Username does not exist");
                }
                else if(res.data.message === "Login Success")
                {

                    navigate('/userDashboard');
                }
                else
                {
                    alert("Incorrect Email or Password");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }

        catch (err) {
            alert(err);
        }

    }

    const handleForgotPassword = () => {
        // Add functionality for forgot password here
        console.log('Forgot Password');
    };

    return (
        <div className="login-page" style={{ backgroundColor: '#fff',  padding: '20px' ,  textAlign: 'center' }}>
            <h2 style={{ padding: 25, color: '#ad0f0f' }}>User Login</h2>
            <div className="input-container" style={{ padding: 42, color: '#ad0f0f' }}>
                <label htmlFor="username" style={{ padding: '20px'}}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    style={{ borderColor: '#ad0f0f', borderRadius: '6px' }}
                />
            </div>
            <div className="input-container"  style={{ padding: 48, marginTop: '-52px', color: '#ad0f0f' }}>
                <label htmlFor="password" style={{ padding: '20px'}}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    style={{ borderColor: '#ad0f0f', borderRadius: '6px' }}
                />
            </div>
            {/*<Link to="/userDashboard">*/}
            <button className="button" onClick={handleLogin} style={{  borderRadius: '8px' }}>
                Login
            </button>
        {/*</Link>*/}
            <div className="forgot-password">
                <a href="#" onClick={handleForgotPassword}>
                    Forgot Password?
                </a>
            </div>
        </div>
    );
}

export default UserLogin;

import '../assets/css/login.css'
import React, { useState } from 'react';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // You can add login functionality here
        console.log(`Username: ${username}, Password: ${password}`);
    };

    const handleForgotPassword = () => {
        // Add functionality for forgot password here
        console.log('Forgot Password');
    };

    return (
        <div className="login-page" style={{ backgroundColor: '#fff',  padding: '20px' ,  textAlign: 'center' }}>
            <h2 style={{ padding: 25, color: '#ad0f0f' }}>Admin Login</h2>
            <div className="input-container" style={{ padding: 42, color: '#ad0f0f' }}>
                <label htmlFor="username" style={{ padding: '20px'}}>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{ borderColor: '#ad0f0f', borderRadius: '6px' }}
                />
            </div>
            <div className="input-container"  style={{ padding: 88, marginTop: '-52px', color: '#ad0f0f' }}>
                <label htmlFor="password" style={{ padding: '20px'}}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ borderColor: '#ad0f0f', borderRadius: '6px' }}
                />
            </div>
            <button className="button" onClick={handleLogin} style={{  borderRadius: '8px' }}>
                Login
            </button>
            <div className="forgot-password">
                <a href="#" onClick={handleForgotPassword}>
                    Forgot Password?
                </a>
            </div>
        </div>
    );
}

export default AdminLogin;

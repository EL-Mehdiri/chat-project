import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "85f0dff6-1a11-4f8a-ba1b-18bdf03314c1", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Incorrect credention, Please try again.')
        };
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" className="input" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div align='center'>
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error" style={{ color: '#eba88d' }}>{error}</h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
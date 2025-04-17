import React, { useState } from 'react';
import Wave from 'react-wavify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(apiUrl);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', email, password);

        if (!email || !password) {
            alert('Please fill all fields');
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            })

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            const data = await response.json();
            console.log(data);
            const token = data.token;
            const name = data.user.name;
            const emailId = data.user.email;
            const DOB = data.user.dob;
            localStorage.setItem("accessToken", JSON.stringify({ token }));
            localStorage.setItem("name", JSON.stringify({ name }));
            localStorage.setItem("email", JSON.stringify({ emailId }));
            localStorage.setItem("Date of birth", JSON.stringify({ DOB }));
            alert('Login Successful!');
            navigate('/table');

        } catch (error) {
            alert('Login Failed!', error.message);
        }
    };

    return (
        <div className='w-[500px] h-[600px] bg-[#1e2c4f] rounded-[10px] relative'>
            <h2 className='bg-[#00f4e2] font-bold text-xl w-max py-3 px-14 absolute -top-5 left-[32%] rounded-[5px] z-10'>SIGN IN</h2>

            <Wave fill="url(#gradient)" speed={0.2} className='mt-6'>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="20%" stopColor="#293859" />
                        <stop offset="50%" stopColor="#354463" />
                        <stop offset="30%" stopColor="#424d6b" />
                    </linearGradient>
                </defs>
            </Wave>

            <FontAwesomeIcon icon={faUser} style={{ color: "#7a839f" }} className='w-20 h-20 absolute top-24 left-[38%] border-4 border-[#7a839f] rounded-full p-5 z-10' />

            <form className='flex flex-col items-center justify-center w-full flex-shrink-0 mt-20 gap-5'>
                <div className='relative'>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#7a839f" }} className='w-5 h-5 absolute top-0 left-0 p-5 z-10' />
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[400px] h-14 rounded-[10px] flex-shrink-0 bg-[#4d5874] text-2xl pl-14 text-slate-200' placeholder='Email Id' required />
                </div>
                <div className='relative'>
                    <FontAwesomeIcon icon={faLock} style={{ color: "#7a839f" }} className='w-5 h-5 absolute top-0 left-0 p-5 z-10' />
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-[400px] h-14 rounded-[10px] flex-shrink-0 bg-[#4d5874] text-2xl pl-14 text-slate-200' placeholder='Password' required />
                </div>
                <div className='flex items-center justify-between w-[400px] mt-1'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me" className='text-[#00f4e2]/50'>Remember me</label>
                    </div>
                    <a href="#" className='text-[#00f4e2]/50'>Forgot password?</a>
                </div>
                <button onClick={(e) => handleSubmit(e)} className='bg-[#00f4e2] mt-2 font-bold text-xl w-[400px] py-3 rounded-[5px] z-10'>
                    LOGIN
                </button>
            </form>
            <div className='flex justify-center items-center gap-2 mt-5 text-[#00f4e2]/50'>
                <p>Don't have an account?</p>
                <Link to='/register' className='hover:border-b hover:border-[#00f4e2]/50'>Register</Link>
            </div>
        </div>
    );
};

export default Login;
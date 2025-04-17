import React, { useState } from 'react';
import Wave from 'react-wavify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        password: '',
    });
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(apiUrl);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        if (!formData.name || !formData.email || !formData.dob || !formData.password) {
            alert('Please fill all fields');
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    dob: formData.dob,
                    password: formData.password
                }),
            })

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            const data = await response.json();
            console.log(data);
            alert('Registration Successful!');
            navigate('/');

        } catch (error) {
            alert('Registration Failed!', error.message);
        }
    };

    return (
        <div className='bg-gradient-to-b from-[#007782] via-[#01818c] to-[#00c1bc] min-h-screen h-full flex justify-center items-center'>
            <div className='w-[500px] h-[650px] bg-[#1e2c4f] rounded-[10px] relative'>
                <h2 className='bg-[#00f4e2] font-bold text-xl w-max py-3 px-14 absolute -top-5 left-[32%] rounded-[5px] z-10'>SIGN UP</h2>

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
                        <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({
                            ...formData,
                            name: e.target.value
                        })} className='w-[350px] h-12 rounded-[10px] flex-shrink-0 bg-[#4d5874] text-2xl pl-2 text-slate-200' placeholder='Full Name' required />
                    </div>
                    <div className='relative'>
                        <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({
                            ...formData,
                            email: e.target.value
                        })} className='w-[350px] h-12 rounded-[10px] flex-shrink-0 bg-[#4d5874] text-2xl pl-2 text-slate-200' placeholder='Email Id' required />
                    </div>
                    <div className='relative'>
                        <input type="password" id="password" value={formData.password} onChange={(e) => setFormData({
                            ...formData,
                            password: e.target.value
                        })} className='w-[350px] h-12 rounded-[10px] flex-shrink-0 bg-[#4d5874] text-2xl pl-2 text-slate-200' placeholder='Password' required />
                    </div>
                    <div className='relative'>
                        <input type="text" id="dob" value={formData.dob} onChange={(e) => setFormData({
                            ...formData,
                            dob: e.target.value
                        })} className='w-[350px] h-12 rounded-[10px] flex-shrink-0 bg-[#4d5874] text-2xl pl-2 text-slate-200' placeholder='Date of birth' onFocus={(e) => (e.target.type = 'date')} required />
                    </div>
                    <button onClick={(e) => handleSubmit(e)} className='bg-[#00f4e2] mt-2 font-bold text-xl w-[340px] py-3 rounded-[5px] z-10'>
                        REGISTER
                    </button>
                </form>
                <div className='flex justify-center items-center gap-2 mt-5 text-[#00f4e2]/50'>
                    <p>Already have an account?</p>
                    <Link to='/' className='hover:border-b hover:border-[#00f4e2]/50'>Login</Link>
                </div>
            </div>

        </div>
    );
};

export default Registration;
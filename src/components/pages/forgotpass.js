import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import style from './forgotpass.module.css';
import { SiTwitter } from 'react-icons/si';

const ForgotPassword = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')  
  const navigate = useNavigate();

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  function handleConfirmPasswordChange(e){
    setConfirmPassword(e.target.value)
  }

  function handleSubmission(e){
    e.preventDefault();
    if(password === confirmPassword){
        localStorage.setItem("new password", password);
        navigate('/signin');
    }
    else{
        alert('password & confirmed password did not match!')
    }
  }

  return (
    <div className={style.container}>
      <SiTwitter className={style.Twticon} />
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmission}>
        <label>
            <input type='password' value={password} onChange={handlePasswordChange} placeholder='New password' className={style.input}/>
        </label>
        <br />
        <label>
            <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='Confirm new password' className={style.input}/>
        </label>
        <br />
        <button type='submit'>Set New Password</button>
      </form>
    </div>
  )
}

export default ForgotPassword
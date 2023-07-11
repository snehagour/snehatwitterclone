import React, { useState } from 'react';
import styles from './Signup.module.css';
import { SiTwitter } from 'react-icons/si';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmName, setconfirmName] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirmName', confirmName);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!emailPattern.test(email)) {
            alert('Invalid email address!');

        }

        if (!passwordPattern.test(password)) {
            alert('Invalid Password!');
        }

  
   

 
    setEmail('');
    setPassword('');
    setconfirmName('');
  };

  const redirectToSignup = () => {
    window.location.href = '/home';
  }

  return (
    <div className={styles.logoBox}>
    <div className="Signup_Img">
      <SiTwitter className={styles.Twticon}/>
    </div>
      <h2 className="top-heading">Create your account</h2>

      <form onSubmit={handleSignUp}>

        <input
          type="name"
          placeholder="Name"
          value={confirmName}
          onChange={(e) => setconfirmName(e.target.value)}
          required="true"
          className={styles.input} 
        />
        <br />


        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required="true"
          className={styles.input} 
        />
        <br />



        <input
          type="password"
          value={password}
          minlength="4"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required="true"
          className={styles.input} 
        />
        <br />

      

        

        <button type="submit" onClick={redirectToSignup}   className={styles.btn} >Next</button>
      </form>
    </div>
  );
};

export default SignUp;
import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axiosApiHelper from '../../api/axiosApiHelper';

import './sign-in.styles.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const SignIn = (props) => {

  const navigate = useNavigate();
  let [userName, setUserName] = useState('aadmin@gmail.com')
  let [password, setPassword] = useState('123456')

  const handleSignin = event => {
    event.preventDefault();
    axiosApiHelper.authenticate(userName, password).then((res) => {
      if(!res.data){
        props.onLoggingIn(false);
        alert("Invalid User Login");
        return false;
      }
      localStorage.setItem("token", res.data.access_token);
      props.onLoggingIn(true);
      return true;
    }, (err) => {
      props.onLoggingIn(false);
      return false;
    });
  }

  const onUserNameChangeHandler = event => {
    setUserName(event.target.value);
  }

  const onSignupHandler = event => {
    navigate("/signup");
  }

  const onPasswordChangeHandler = event => {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSignin}>
          <FormInput name="email"
            type="email"
            value={userName}
            label="Email"
            handleChange={onUserNameChangeHandler} required />
          <FormInput name="password"
            type="password"
            value={password}
            label="password"
            handleChange={onPasswordChangeHandler} required />
            <div className='sign-in-and-sign-up_link'>
          <CustomButton type="submit" className="custom_inline">SIGN IN</CustomButton>
          <CustomButton type="button" className="custom_inline" onClick={onSignupHandler}>SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    </>
  )
}
export default SignIn;

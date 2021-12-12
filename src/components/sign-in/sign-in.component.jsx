import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axiosApiHelper from '../../api/axiosApiHelper';

import './sign-in.styles.scss';
import { useNavigate } from 'react-router';

const SignIn = () => {

  const navigate = useNavigate();
  let [userName, setUserName] = useState('')
  let [password, setPassword] = useState('')

  const handleSignin = event => {
    event.preventDefault();
    axiosApiHelper.authenticate(userName, password).then((res) => {
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
    }, (err) => {
      console.log(err);
    });
  }

  const onUserNameChangeHandler = event => {
    setUserName(event.target.value);
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
          <CustomButton type="submit" >SIGN IN</CustomButton>
        </form>
      </div>
    </>
  )
}
export default SignIn;

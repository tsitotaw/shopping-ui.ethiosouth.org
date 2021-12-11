import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import './sign-up.styles.scss';

const SignUp = () => {


  let [signUp, setSignup] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isSeller: false
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const { firstName, lastName, email, password, confirmPassword, isSeller } = signUp;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    setSignup({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isSeller: false
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your details below</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='firstName'
          value={signUp.firstName}
          onChange={handleChange}
          label='First Name'
          required
        />
        <FormInput
          type='text'
          name='lastName'
          value={signUp.lastName}
          onChange={handleChange}
          label='Last Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={signUp.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signUp.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={signUp.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <FormInput
          type="checkbox"
          value={signUp.isSeller}
          //onChange={handleChange} 
          label="I am a seller"
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;

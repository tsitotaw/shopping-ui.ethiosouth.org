import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {

  let [signIn, setSignin] = useState({email: '', password: ''})

  const handleSignin = event => {
    event.preventDefault();
    setSignin({email: '', password: ''})
  }

  const handleChange = event => {
    const {value, name} = event.target;
    setSignin({[name]: value})

  }

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSignin}>
          <FormInput name="email"
            type="email" 
            value={signIn.email} 
            label="Email"
            handleChange={handleChange} required />
          <FormInput name="password" 
            type="email" 
            value={signIn.password}
            label="password"
            handleChange={handleChange} required />
          <CustomButton type="submit" >SIGN IN</CustomButton>
        </form>
      </div>
    </>
  )
}
export default SignIn;

import React from 'react';
import { Screen } from './components/loginPage/Screen'
import { LoginScreen } from './components/loginPage/LoginScreen';
import { LoginForm } from './components/loginPage/LoginForm';
export const BosqueApp = () => {
  return (
   <div className='container-fluid login-container login-background'>
     <LoginForm />
   </div>
  );
}
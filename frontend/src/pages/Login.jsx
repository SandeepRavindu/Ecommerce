import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {setToken,token,navigate,backendUrl} = useContext(ShopContext);

  const [name,setName]  = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up'){

        const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
        
        if (response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
 
        } else {
          toast.error(response.data.message);
        }
        
      } else {
        const response = await axios.post(backendUrl + '/api/user/login',{email,password})
        if (response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);

        } else {
          toast.error(response.data.message);
        }
      }
      
    } catch (error) {
        console.log(error);
        toast.error(error.message);
        
    }

  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  },[token])

  return (
    <div className='pt-6 border-t bg-gradient-to-b from-white/95 via-gray-50/98 to-white/95 min-h-screen sm:pt-10'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-3 items-center w-[90%] sm:max-w-96 m-auto mt-8 text-gray-800 sm:gap-4 sm:mt-14'>
      <div className='inline-flex items-center gap-2 mb-2 mt-6 sm:mt-10'>
        <p className='prata-regular text-2xl sm:text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-6 bg-gray-800 sm:w-8'/>
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full px-3 py-2 border border-gray-800 rounded-md text-sm sm:text-base' placeholder='Name' required/>}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='w-full px-3 py-2 border border-gray-800 rounded-md text-sm sm:text-base' placeholder='Email' required/>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='w-full px-3 py-2 border border-gray-800 rounded-md text-sm sm:text-base' placeholder='Password' required/>
      <div className='w-full flex justify-between text-xs mt-[-4px] sm:text-sm sm:mt-[-8px]'>
        <p className='cursor-pointer hover:text-gray-600'>Forgot your password?</p>
        {
          currentState === 'Login' ? 
          <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer hover:text-gray-600'>Create an account</p> : 
          <p onClick={()=>setCurrentState('Login')} className='cursor-pointer hover:text-gray-600'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-6 py-2 mt-3 rounded-md transition-all duration-300 hover:bg-gray-800 text-sm sm:px-8 sm:mt-4 sm:text-base'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
   
    </div>

  )
}

export default Login
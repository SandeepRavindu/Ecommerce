import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    
    // Basic validation
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all required fields')
      return
    }

    if (currentState === 'Sign Up' && !formData.name) {
      toast.error('Please enter your name')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    // Password validation
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long')
      return
    }

    try {
      // Here you would typically send login/register data to backend
      console.log(`${currentState} Data:`, formData)
      
      if (currentState === 'Login') {
        toast.success('Login successful!')
        // Add login logic here - set user state, redirect, etc.
      } else {
        toast.success('Account created successfully!')
        // Add registration logic here
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: ''
      })
      
    } catch (error) {
      console.error('Authentication error:', error)
      toast.error(`${currentState} failed. Please try again.`)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mt-10 mb-2'>
        <p className='text-3xl prata-regular'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      
      {currentState === 'Login' ? '' : 
        <input 
          onChange={handleInputChange}
          name='name'
          value={formData.name}
          type="text" 
          className='w-full px-3 py-2 border border-gray-800' 
          placeholder='Name' 
          required 
        />
      }
      
      <input 
        onChange={handleInputChange}
        name='email'
        value={formData.email}
        type="email" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Email' 
        required 
      />
      
      <input 
        onChange={handleInputChange}
        name='password'
        value={formData.password}
        type="password" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Password' 
        required 
      />
      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer hover:text-gray-600'>Forgot your password?</p>
        {
          currentState === 'Login' 
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-gray-600'>Create account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-gray-600'>Login Here</p>
        }
      </div>
      
      <button 
        type='submit'
        className='px-8 py-2 mt-4 font-light text-white transition-colors bg-black hover:bg-gray-800'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login

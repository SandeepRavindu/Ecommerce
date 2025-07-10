import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); // Success state

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);
    setSubmitted(true); // Show success message
    setEmail(''); // Optional: clear input
  };

  return (
    <div className='py-10 text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>
      <p className='mt-3 text-gray-400'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2'
      >
        <input
          className='w-full outline-none sm:flex-1'
          type='email'
          placeholder='Enter your email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type='submit'
          className='px-10 py-4 text-xs text-white bg-black'
        >
          SUBSCRIBE
        </button>
      </form>

      {/* ✅ Success message */}
      {submitted && (
        <p className="mt-2 font-medium text-green-600">
          ✅ Thank you! You've successfully subscribed.
        </p>
      )}
    </div>
  );
};

export default NewsletterBox;

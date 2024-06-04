import React from 'react'

const LeadForm = () => {
  return (
    <div className='flex flex-col h-fit items-center '>
      <form action="submit" className='flex flex-col h-fit gap-5 items-center p-10 w-fit '>
        <p className='text-center font-medium text-3xl '>New Client Questionairre</p>
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="text" placeholder='Enter your name' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="email" placeholder='Enter your email' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="text" placeholder='Enter your phone number' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="text" placeholder='Dog Breed' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="text" placeholder='Dog Name' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="text" placeholder='Dog Age' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="text" placeholder='Dog Weight' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type='text' placeholder='Dog personality' />
        <input className='flex rounded-md w-72 outline-1 h-8 pl-3 border' type="text" placeholder='Dog Attitude Toward Bathing' />
        <button type='submit' className='bg-pink px-6 py-4 rounded-xl text-white font-bold'>Submit</button>
      </form>
    </div>
  )
}

export default LeadForm
import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Thankyou = () => {
  return (
    <div className='h-screen bg-gray-300'>
      <Navbar />
      <h1 className='text-2xl m-10'>Thank you for submitting your application! Our team will review your information, and we'll be in touch soon with opportunities that match your qualifications and preferences. <Link to="/" className='text-red-500 underline text-sm block mt-2'>Back to homepage</Link></h1>
      <div className='w-full flex item-center justify-center'>
        <img src="https://imgs.search.brave.com/6P6Jrj4OXyg3Dl_ShMU25P5Rp72cIsWfQQ2culvqsds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTMy/NDM0NzcvcGhvdG8v/dGhhbmsteW91Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1G/WFNJWXBfT1VIM3pJ/RGtkaU5VMXFhOWxi/a29fMjRlZm5SQ0Vf/OE8tWkxBPQ" alt="thanks" className='thanks' />
      </div>
    </div>
  )
}

export default Thankyou

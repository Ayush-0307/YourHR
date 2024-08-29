import React from 'react'

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-300 h-screen'>
            <div className='text-center p-3'>
                <h1 className='text-5xl font-bold mt-3'>Oops! Error 404.</h1>
                <p className='mt-3 text-gray-600 text-xl'>Something Wrong here! We cant seem to find the page you're looking for.</p>
            </div>
            <img src="https://img.freepik.com/premium-vector/error-concept-young-man-stands-digital-website-page-fence-cone-no-connection_118813-20028.jpg?w=996" alt="error" className='md:w-1/3 w-2/3 h-1/2 mt-7 err' />
        </div>
    )
}

export default Error

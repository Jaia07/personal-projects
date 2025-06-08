import React from 'react'
import { MdLocationOn } from "react-icons/md";

const JobListings = () => {
  return (
    <section className='bg-blue-50 w-full p-4'>
        <div className='mx-auto max-w-[78rem]'>
            <h2 className='text-2xl text-indigo-500 text-center font-bold my-2'>Browse Jobs</h2>
            <div className='flex flex-col sm:flex-row items-stretch justify-center gap-4'>
                <section className='border-2 bg-white px-3 py-4 rounded-lg shadow-md flex flex-col'>
                    <h3 className='text-gray-400'>Full-Time</h3>
                    <h4 className='text-lg font-bold mt-1 mb-4'>Senior React Developer</h4>
                    <p className='flex-grow'>We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal ca...</p>
                    <p className='text-indigo-500 mb-4'>More</p>
                    <span className='text-indigo-500'>$70k - $80k/Year</span>
                    <span className='border-t block border-gray-100 rounded-md my-1'></span>
                    <section className='flex items-center justify-between mt-auto'>
                        <div className='flex items-center justify-center gap-1 text-red-600 my-4'>
                            <span><MdLocationOn /></span>
                            <span>Boston, MA</span>
                        </div>
                        <button type="submit" className='border-1 bg-indigo-500 rounded-lg px-4 py-2 text-white hover:bg-indigo-600'>
                            Read More
                        </button>
                    </section>
                </section>
                <section className='border-2 bg-white px-3 py-4 rounded-lg shadow-md flex flex-col'>
                    <h3 className='text-gray-400'>Full-Time</h3>
                    <h4 className='text-lg font-bold mt-2 mb-4'>Front-End Engineer (React & Redux)</h4>
                    <p className='flex-grow'>Join our team as a Front-End Developer to join our team in sunny Miami, FL. We are looking  for a motivated...</p>
                    <p className='text-indigo-500 mb-4'>More</p>
                    <span className='text-indigo-500'>$70k - $80k/Year</span>
                    <span className='border-t block border-gray-100 rounded-md my-1'></span>
                    <section className='flex items-center justify-between mt-auto'>
                        <div className='flex items-center justify-center gap-1 text-red-600 my-4'>
                            <span><MdLocationOn /></span>
                            <span>Miami, FL</span>
                        </div>
                        <button type="submit" className='border-1 bg-indigo-500 rounded-lg px-4 py-2 text-white hover:bg-indigo-600'>
                            Read More
                        </button>
                    </section>
                </section>
                <section className='border-2 bg-white px-3 py-4 rounded-lg shadow-md flex flex-col'>
                    <h3 className='text-gray-400'>Full-Time</h3>
                    <h4 className='text-lg font-bold mt-2 mb-4'>React.js Developer</h4>
                    <p className='flex-grow'>Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and...</p>
                    <p className='text-indigo-500 mb-4'>More</p>
                    <span className='text-indigo-500'>$70k - $80k/Year</span>
                    <span className='border-t block border-gray-100 rounded-md my-1'></span>
                    <section className='flex items-center justify-between mt-auto'>
                        <div className='flex items-center justify-center gap-1 text-red-600 my-4'>
                            <span><MdLocationOn /></span>
                            <span>Brooklyn, NY</span>
                        </div>
                        <button type="submit" className='border-1 bg-indigo-500 rounded-lg px-4 py-2 text-white hover:bg-indigo-600'>
                            Read More
                        </button>
                    </section>
                </section>
            </div>
        </div>
        
    </section>
  )
}

export default JobListings
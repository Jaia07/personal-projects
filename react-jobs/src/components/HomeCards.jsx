import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <div className='max-w-5xl flex flex-col sm:flex-row items-stretch justify-center w-full mx-3 md:mx-auto gap-4 sm:gap-2 mt-7 mb-5'>
      <Card>
        <h2 className='font-bold text-2xl'>
          For Developers
        </h2>
        <p className='mt-2 mb-4'>Browse our React jobs and start your career today</p>
        <Link 
        to="/jobs"
        className='bg-black rounded-lg px-4 py-2 text-white hover:bg-gray-700'
        >
          Browse jobs
        </Link>
      </Card>
      <Card bg='bg-indigo-100'>
        <h2 className='font-bold text-2xl'>
          For Employers
        </h2>
        <p className='mt-2 mb-4'>List your job to find the perfect developer for the role</p>
        <Link 
        to="/add-job"
        className='bg-indigo-500 rounded-lg px-4 py-2 text-white hover:bg-indigo-600'
        >
          Add job
        </Link>
      </Card>
    </div>
  )
}

export default HomeCards
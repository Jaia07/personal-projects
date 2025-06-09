import React from 'react'

const HomeCards = () => {
  return (
    <div className='max-w-5xl flex flex-col sm:flex-row items-center justify-center w-full mx-3 md:mx-auto gap-4 sm:gap-2 mt-7 mb-5'>
      <section className='bg-gray-100 p-4 rounded-lg shadow-md min-w-[40vw]'>
          <h2 className='font-bold text-2xl'>
            For Developers
          </h2>
          <p className='mt-2 mb-4'>Browse our React jobs and start your career today</p>
          <button type="submit" className='bg-black rounded-lg px-4 py-2 text-white hover:bg-gray-700'>
            Browse jobs
          </button>
      </section>
      <section className='bg-indigo-100 p-4 rounded-md shadow-md min-w-[40vw]'>
          <h2 className='font-bold text-2xl'>
            For Employers
          </h2>
          <p className='mt-2 mb-4'>List your job to find the perfect developer for the role</p>
          <button type="submit" className='bg-indigo-500 rounded-lg px-4 py-2 text-white hover:bg-indigo-600'>
            Add job
          </button>
      </section>
    </div>
  )
}

export default HomeCards
import React from 'react'

const HomeCards = () => {
  return (
    <div className='max-w-5xl flex flex-col md:flex-row items-center justify-center w-full mx-3 md:mx-auto gap-4 md:gap-2 mt-7 mb-5'>
      <section className='border-2 bg-gray-100 p-4 rounded-md shadow-md min-w-[40vw]'>
          <h5 className='font-bold text-lg'>
            For Developers
          </h5>
          <p className='py-2'>Browse our React jobs and start your career today</p>
          <button type="submit" className='border-1 bg-black rounded-md px-3 py-1 text-white'>
            Browse jobs
          </button>
      </section>
      <section className='border-2 bg-indigo-100 p-4 rounded-md shadow-md min-w-[40vw]'>
          <h5 className='font-bold text-lg'>
            For Employers
          </h5>
          <p className='py-2'>List your job to find the perfect developer for the role</p>
          <button type="submit" className='border-1 bg-indigo-700 rounded-md px-3 py-1 text-white'>
            Add job
          </button>
      </section>
    </div>
  )
}

export default HomeCards
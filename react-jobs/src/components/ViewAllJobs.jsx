import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <>
        <section className='mx-auto py-6 text-center'>
            <Link 
            to="/jobs"
            className='bg-black min-w-[28vw] text-white 
            py-4 px-6 rounded-xl hover:bg-gray-700'
            >
                View All Jobs
            </Link>
        </section>
    </>
  )
}

export default ViewAllJobs
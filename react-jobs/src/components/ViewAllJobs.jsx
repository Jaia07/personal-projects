import React from 'react'

const ViewAllJobs = () => {
  return (
    <>
        <section className='mx-auto py-6 text-center'>
            <a 
            href="/jobs"
            className='bg-black min-w-[28vw] text-white 
            py-4 px-6 rounded-xl hover:bg-gray-700'
            >
                View All Jobs
            </a>
        </section>
    </>
  )
}

export default ViewAllJobs
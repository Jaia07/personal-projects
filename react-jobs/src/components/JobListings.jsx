import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {
    const recentJobs = jobs.slice(0, 3)


  return (
    <section className='bg-blue-50 w-full p-4'>
        <div className='mx-auto max-w-[78rem]'>
            <h2 className='text-2xl text-indigo-500 text-center font-bold my-2'>Browse Jobs</h2>
            <div className='flex flex-col sm:flex-row items-stretch justify-center gap-4'>
                {recentJobs.map((job) => (
                    <JobListing key={job.id} job={job} />
                ))}
                
            </div>
        </div>
        
    </section>
  )
}

export default JobListings
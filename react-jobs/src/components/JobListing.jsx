import React from 'react'
import { useState } from 'react'
import { MdLocationOn } from "react-icons/md"

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

    let description = job.description

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...'
    }

    const handleDescription = () => {
        setShowFullDescription((prevState) => (
            !prevState
        ))
    }

    return (
        <section className='bg-white px-3 py-4 rounded-lg shadow-md flex flex-col'>
            <h3 className='text-gray-400'>{job.type}</h3>
            <h4 className='text-lg font-bold mt-1 mb-4'>{job.title}</h4>
            <p className='flex-grow mb-2'>{description}</p>
            <button 
            onClick={handleDescription}
            className="text-indigo-500 mb-5 text-left
            hover:text-indigo-600">{showFullDescription ? 'Less' : 'More'}</button>
            <span className='text-indigo-500'>{job.salary}/Year</span>
            <span className='border-t-2 block border-gray-100 rounded-md my-1'></span>
            <section className='flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto mb-4'>
                <div className='flex items sm:items-center justify-center gap-1 text-red-600 my-4'>
                    <span className='hidden sm:block'><MdLocationOn /></span>
                    <span>{job.location}</span>
                </div>
                <a 
                href={`/job/${job.id}`}
                className='bg-indigo-500 rounded-lg px-4 py-2 text-white hover:bg-indigo-600 w-full sm:w-auto'
                >
                    Read More
                </a>
            </section>
        </section>
  )
}

export default JobListing
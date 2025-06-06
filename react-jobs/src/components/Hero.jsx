import React from 'react'

const Hero = ({ 
  title = "Become a React Dev", 
  subtitle = "Find the React job that fits your skills and needs" 
}) => {
  return (
    <>
        <section className='bg-indigo-700 min-h-[35vh] mx-auto w-full flex flex-col items-center justify-center mb-4'>
          <div className='max-w-7xl h-full'>
            <h1 className='text-white font-bold text-4xl sm:text-5xl md:text-6xl'>
              {title}
            </h1>
            <p className='text-center text-white text-sm md:text-xl py-1'>
              {subtitle}
            </p>
          </div>
        </section>
    </>
  )
}

export default Hero
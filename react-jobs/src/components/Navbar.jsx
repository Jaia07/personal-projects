import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className='bg-indigo-700 border-b-2 border-indigo-500'>
          <div className="flex justify-between max-w-[1000px] w-full mx-auto py-2 px-4">
            <section className='text-white flex items-center gap-1'>
              <img 
                src={logo} 
                alt="React Logo"
                className='h-10 w-auto' 
              />
              <p>React Jobs</p>
            </section>
            <section className='flex items-center justify-between p-2'>
              <ul className='flex gap-4 text-white'>
                <li className='p-2 hover:bg-black rounded-md'><a href="#">Home</a></li>
                <li className='p-2 hover:bg-black rounded-md'><a href="#">Jobs</a></li>
                <li className='p-2 hover:bg-black rounded-md'><a href="#">Add Job</a></li>
              </ul>
            </section>
          </div>
        </nav>
    </>
  )
}

export default Navbar
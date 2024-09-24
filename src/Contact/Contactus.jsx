import React from 'react'
import { Tilt } from 'react-tilt';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};


function Contactus() {
  return (
   
    <div className=" mb-10 min-h-screen flex items-center justify-center pb-10 pt-0 pr-10 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl space-y-8 md:space-y-0">
       
          <div className='p-4 m-5 shadow-xl bg-gray-200 rounded-xl flex flex-col w-fit '>
            <label htmlFor="" className='p-3  '>
              Full Name: <input className='rounded-lg ml-10   p-1 border-2' type="text" placeholder='Your Name' />
            </label>
            <label htmlFor="" className='p-3  '>

              Phone Number: <input type="text" className='rounded-lg ml-3 p-1 border-2' placeholder='10 digits' />
            </label>
            <label htmlFor="" className='p-3  '>

              Membership plan: <input type='text' className='rounded-lg  p-1 border-2' placeholder='in months' />
            </label>
            <button className='mt-4 text-lg text-white font-bold  hover:scale-105 border-2 p-3 rounded-lg bg-violet-600 '>Contact Us</button>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt options={defaultOptions} style={{ height: 300, width: 300 }}>
              <img className="shadow-lg rounded-lg" src="https://i.pinimg.com/474x/36/6a/93/366a933c813be23c411e7e5b1596379e.jpg" alt="Muscle" />
            </Tilt>
          </div>
        </div>
      </div>
  )
}

export default Contactus



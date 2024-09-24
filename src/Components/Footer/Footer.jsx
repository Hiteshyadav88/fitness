import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='bg-gray-800 text-white py-10 w-full'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <div className='flex justify-center lg:justify-start mb-6 lg:mb-0'>
            <div className='text-3xl font-bold mb-4'>
              logo
            </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-end w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center lg:text-left'>
              <div>
                <p className='font-bold pb-2'>WORKOUT</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>WORKOUT VIDEO</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>CUSTOM</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>NUTRITION</p>
                <p className='font-bold pt-4 pb-2'>PROGRAMS</p>
                <Link to="/workout-programs" className='hover:text-gray-400 cursor-pointer pb-2'>WORKOUT PROGRAMS</Link>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>MEAL PLANS</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>PILOT PROGRAMS</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>ROUTINES</p>
              </div>
              <div>
                <p className='font-bold pb-2'>HEALTHY LIVING</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>FITNESS</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>HEALTH</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>NUTRITION</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>HEALTHY RECIPES</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>EXPERTS</p>
              </div>
              <div>
                <p className='font-bold pb-2'>ABOUT</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>CAREERS</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>TUTORIALS</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>OUR TEAM</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>B2B OPTIONS</p>
              </div>
              <div>
                <p className='font-bold pb-2'>MEMBERSHIP</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>FB PLUS</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>COMMUNITY</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>REFERABLE PROGRAM</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>BLOG</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>CONTACT US</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>FAQ</p>
                <p className='hover:text-gray-400 cursor-pointer pb-2'>STORE</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <a href="https://www.instagram.com/hitesh_ydv88/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='text-gray-500 hover:text-white' />
              </a>
              <a href="https://github.com/Hiteshyadav88" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size='2x' className='text-gray-500 hover:text-white' />
              </a>
              <a href="https://www.linkedin.com/in/hitesh88/" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size='2x' className='text-gray-500 hover:text-white' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

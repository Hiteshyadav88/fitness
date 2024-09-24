import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFire } from '@fortawesome/free-solid-svg-icons';

function Workout2({ onCardClick }) {
    return (
        <a href="#" className="block w-full max-w-xs mx-auto rounded overflow-hidden shadow-lg transition transform hover:scale-105 relative group" onClick={onCardClick}>
            <div className="relative">
                <img
                    src="https://i.pinimg.com/474x/93/d5/1c/93d51c712d67feec5ac1300cbf01d797.jpg"
                    alt="Workout"
                    className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72 xl:h-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-4 transition-opacity">
                    <div className="flex items-center mb-2">
                        <p className="mr-2">Difficulty:</p>
                        <div className="flex">
                            <span className="text-red-500"><FontAwesomeIcon icon={faFire} /></span>
                            <span className="text-red-500"><FontAwesomeIcon icon={faFire} /></span>
                            <span className="text-red-500"><FontAwesomeIcon icon={faFire} /></span>
                            <span className="text-red-500"><FontAwesomeIcon icon={faFire} /></span>
                            <span className="text-white"><FontAwesomeIcon icon={faFire} /></span>
                        </div>
                    </div>
                    <p className="mb-2">Training Type: Cardiovascular, Strength Training</p>
                    <p className="mb-2">Equipment: Dumbbell, Mat</p>
                    <p className="mb-2">Burn Estimate: <FontAwesomeIcon icon={faEye} /></p>
                </div>
            </div>
            <div className="p-4 bg-white">
                <p className="text-lg font-semibold">Full Body Strength and Conditioning</p>
                <p className="text-gray-700">Lower and Upper body strength...</p>
            </div>
        </a>
    );
}

export default Workout2;

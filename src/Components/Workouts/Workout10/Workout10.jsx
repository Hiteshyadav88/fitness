import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFire } from '@fortawesome/free-solid-svg-icons';

function Workout10({ onCardClick }) {
    return (
        <a
            href="#"
            className="block w-full max-w-xs mx-auto rounded overflow-hidden shadow-lg transition transform hover:scale-105 relative group"
            onClick={onCardClick}
        >
            <div className="relative">
                <img
                    className='w-full rounded-2xl object-cover'
                    src="https://i.pinimg.com/474x/f5/71/93/f57193649812f2c18bb42f86b451fadc.jpg"
                    alt=""
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-4 transition-opacity">
                    <div className="flex items-center mb-2">
                        <p className="mr-2">Difficulty:</p>
                        <div className="flex">
                            <span className="text-red-500">
                                <FontAwesomeIcon icon={faFire} />
                            </span>
                            <span className="text-red-500">
                                <FontAwesomeIcon icon={faFire} />
                            </span>
                            <span className="text-red-500">
                                <FontAwesomeIcon icon={faFire} />
                            </span>
                            <span className="text-white">
                                <FontAwesomeIcon icon={faFire} />
                            </span>
                            <span className="text-white">
                                <FontAwesomeIcon icon={faFire} />
                            </span>
                        </div>
                    </div>
                    <p className="mb-2">Training Type: Toning, Strength Training</p>
                    <p className="mb-2">Equipment: Dumbbell</p>
                    <p className="mb-2">
                        Burn Estimate: <FontAwesomeIcon icon={faEye} />
                    </p>
                </div>
            </div>
            <div className="p-4">
                <p className="text-lg font-semibold">Core and Lower Body Pilates </p>
                <p className="text-gray-700">Mat exercises for Strength <br /> and Stability</p>
                <p className='text-gray-300'>I always stretch before and after workouts.</p>
            </div>
        </a>
    );
}

export default Workout10;



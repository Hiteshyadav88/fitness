import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFire } from '@fortawesome/free-solid-svg-icons';

function Workout8({ onCardClick }) {
    return (
        <a
            href="#"
            className="block w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded overflow-hidden shadow-lg transition transform hover:scale-105 relative group"
            onClick={onCardClick}
        >
            <div className="relative">
                <img
                    src="https://i.pinimg.com/474x/8c/97/a3/8c97a32cd6f35ca4562eb195ed7d5990.jpg"
                    alt=""
                    className="w-full"
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
                            <span className="text-red-500">
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
                <p className="text-lg font-semibold">No Repeat Quick Ab Tabata</p>
                <p className="text-gray-700">
                    10-Minute Core Blast <br />Super Exercise
                </p>
                <p className='text-gray-300 '>I've been lifting since high school, so I know what I'm doing</p>
                <p className='text-gray-300'>I'm not sore at al</p>
            </div>
        </a>
    );
}

export default Workout8;

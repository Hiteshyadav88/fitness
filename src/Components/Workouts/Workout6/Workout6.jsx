import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFire } from '@fortawesome/free-solid-svg-icons';

function Workout6({ onCardClick }) {
    return (
        <a
            href="#"
            className="block w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded overflow-hidden shadow-lg transition transform hover:scale-105 relative group"
            onClick={onCardClick}
        >
            <div className="relative">
                <img
                    src="https://i.pinimg.com/474x/0d/0e/5d/0d0e5d1da69e005fd117605f452df178.jpg"
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
                    <p className="mb-2">Training Type: Weight Training</p>
                    <p className="mb-2">Equipment: Dumbbells, Mat</p>
                    <p className="mb-2">
                        Burn Estimate: <FontAwesomeIcon icon={faEye} />
                    </p>
                </div>
            </div>
            <div className="p-4">
                <p className="text-lg font-semibold">
                    30 Days Challenges: Day 19 - Total Body All Lifting Supersets
                </p>
                <p className="text-gray-700">
                    Full and Partial Reps <br /> with core...
                </p>
                <p className='text-gray-300'>I always stretch before and after workouts.</p>
            </div>
        </a>
    );
}

export default Workout6;

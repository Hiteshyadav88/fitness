import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFire } from '@fortawesome/free-solid-svg-icons';

function Workout9({ onCardClick }) {
    return (
        <a
            href="#"
           className="block w-full max-w-xs mx-auto rounded overflow-hidden shadow-lg transition transform hover:scale-105 relative group"
            onClick={onCardClick}
        >
            <div className="relative">
                <div className="h-65 sm:h-64 md:h-72 lg:h-60 xl:h-96 2xl:h-104">
                    <img
                        src="https://i.pinimg.com/474x/1b/60/17/1b601777c9b572812bd25a54126c7df0.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
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
                <p className="text-lg font-semibold">
                    Total Body Strength Workout for
                </p>
                <p className="text-gray-700">
                    People who get Bored Easily-Tolal Body Burnout
                </p>
            </div>
        </a>
    );
}

export default Workout9;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFire } from '@fortawesome/free-solid-svg-icons';

function Workout1({ onCardClick }) {


    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }


    return (
       
        <div onClick={onCardClick} className="cursor-pointer w-full max-w-xs mx-auto rounded overflow-hidden shadow-lg transition transform hover:scale-105 relative group">
            <div className="relative">
                <img 
                    src="https://i.pinimg.com/474x/73/8b/a4/738ba409f149c4599a60ac561c6ac60d.jpg" 
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
                    <p className="mb-2">Training Type: Cardiovascular</p>
                    <p className="mb-2">Equipment: Mat, No Equipment</p>
                    <p className="mb-2">Burn Estimate: <FontAwesomeIcon icon={faEye} /></p>
                </div>
            </div>
            <div className="p-4 bg-white mt-0">
                <p className="text-lg font-semibold mt-0">Bodyweight Cardio Endurance Pairs</p>
                <p className="text-gray-700 mt-0">Long interval with short Rest</p>
            </div>
        </div>
    );
}

export default Workout1;

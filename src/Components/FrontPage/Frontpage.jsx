import React from 'react';
import { Tilt } from 'react-tilt';
import { ReactTyped } from 'react-typed';

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

export default function Frontpage() {
    return (
        <div className=" mb-4 min-h-screen flex items-center justify-center pb-10 pt-0 pr-10 bg-gray-100">
            <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl space-y-8 md:space-y-0">
                <div className="md:w-1/2 flex flex-col items-start md:items-start">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-500 mb-4">
                        <ReactTyped
                            strings={[
                                "Feel great Body and mind",
                                "Wellness Article",
                                "Program",
                                "Supportive Community",
                                "Healthy Recipes",
                                "Guide the persons",
                                "Who don't know to start"
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </h1>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt options={defaultOptions} style={{ height: 300, width: 300 }}>
                        <img className="shadow-lg rounded-lg" src="https://i.pinimg.com/474x/36/6a/93/366a933c813be23c411e7e5b1596379e.jpg" alt="Muscle" />
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import Inworkout10 from './Inworkout10';
import Workout10 from './Workout10';

function MainWorkout10() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout10 />
            ) : (
                <Workout10 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout10;

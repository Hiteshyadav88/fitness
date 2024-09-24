import React, { useState } from 'react';
import Inworkout8 from './Inworkout8';
import Workout8 from './Workout8';

function MainWorkout8() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout8 />
            ) : (
                <Workout8 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout8;

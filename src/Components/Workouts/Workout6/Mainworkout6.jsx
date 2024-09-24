import React, { useState } from 'react';
import Inworkout6 from './Inworkout6';
import Workout6 from './Workout6';

function MainWorkout6() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout6 />
            ) : (
                <Workout6 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout6;

import React, { useState } from 'react';
import Inworkout4 from './InWorkout4';
import Workout4 from './Workout4';

function MainWorkout4() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout4 />
            ) : (
                <Workout4 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout4;

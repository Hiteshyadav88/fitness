import React, { useState } from 'react';
import Inworkout3 from './Inworkout3';
import Workout3 from './Workout3';

function MainWorkout3() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout3 />
            ) : (
                <Workout3 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout3;

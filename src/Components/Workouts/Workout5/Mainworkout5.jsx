import React, { useState } from 'react';
import Inworkout5 from './Inworkout5';
import Workout5 from './Workout5';

function MainWorkout5() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout5 />
            ) : (
                <Workout5 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout5;

import React, { useState } from 'react';
import Inworkout9 from './Inworkout9';
import Workout9 from './Workout9';

function MainWorkout9() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout9 />
            ) : (
                <Workout9 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout9;

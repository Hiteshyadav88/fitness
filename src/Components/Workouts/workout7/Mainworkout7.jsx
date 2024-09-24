import React, { useState } from 'react';
import Inworkout7 from './Inworkout7';
import Workout7 from './Workout7';

function MainWorkout7() {
    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    return (
        <div className="container mx-auto p-4">
            {show ? (
                <Inworkout7 />
            ) : (
                <Workout7 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout7;

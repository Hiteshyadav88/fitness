import React, { useState } from 'react';
import Inworkout1 from './Inworkout1';
import Workout1 from './Workout1';

function MainWorkout1() {
    const [showVideo, setShowVideo] = useState(false);

    const handleCardClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="container mx-auto p-4">
            {showVideo ? (
                <Inworkout1 />
            ) : (
                <Workout1 onCardClick={handleCardClick} />
            )}
        </div>
    );
}

export default MainWorkout1;

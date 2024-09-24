import React, { useState } from 'react';
import Inworkout2 from './Inworkout2';
import Workout2 from './Workout2';

function MainWorkout2() {
  const [show, setShow] = useState(false);

  const handleCardClick = () => {
    setShow(true);
  };

  return (
    <div className="container mx-auto p-4">
      {show ? (
        <Inworkout2 />
      ) : (
        <Workout2 onCardClick={handleCardClick} />
      )}
    </div>
  );
}

export default MainWorkout2;

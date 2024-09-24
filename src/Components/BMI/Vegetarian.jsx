import React, { useState } from 'react';
import Indiet1 from '../Diet/Indiet/Indiet1';
import Indiet2 from '../Diet/Indiet/Indiet2';
import Indiet3 from '../Diet/Indiet/Indiet3';
import Indiet4 from '../Diet/Indiet/Indiet4';



function Vegetarian() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    const renderContent = () => {
        switch (selectedCard) {
            case 0:
                return <Indiet1 />;
            case 1:
                return <Indiet2 />;
            case 2:
                return <Indiet3 />;
            case 3:
                return <Indiet4 />;
            default:
                return null;
        }
    };

    return (
        <div className='w-3/4 m-auto mb-4'>
            {selectedCard === null ? (
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Veg.map((d, index) => (
                        <div
                            key={index}
                            className=' border-2 h-auto w-full text-black rounded-xl cursor-pointer transform transition-transform hover:scale-105'
                            onClick={() => handleCardClick(index)}
                        >
                            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                <img src={d.image} alt={d.name} className='h-44 w-44 rounded-full' />
                            </div>
                            <div className='bg-white flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-xl font-semibold'>{d.name}</p>
                                <p>{d.titles}</p>
                                <p>{d.Price}</p>
                                <button className='bg-indigo-500 rounded-2xl p-3 text-white text-lg'>Click to Add</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='fixed inset-0 bg-white z-50 overflow-auto p-4'>
                    <button className='bg-red-500 text-white p-2 mb-3 rounded' onClick={() => setSelectedCard(null)}>Close</button>
                    {renderContent()}
                </div>
            )}
        </div>
    );
}

const Veg = [
    {
        image: "https://i.pinimg.com/474x/dd/04/84/dd0484d00b5c3874732c9b2d1ce76eac.jpg",
        titles: "Vegetarian meal",
        name: "Raw Vegetables",
        Price: "$3.49",
    },
    {
        image: "https://i.pinimg.com/474x/b0/bc/91/b0bc91f09464dab6d40bf89a91a7f774.jpg",
        titles: "Vegetarian meal",
        name: "Rice with Half fries",
        Price: "$3.49",
    },
    {
        image: "https://i.pinimg.com/474x/c8/fd/b0/c8fdb08f3da99e10812e0436d7549155.jpg",
        titles: "Vegetarian meal",
        name: "Fully Fried",
        Price: "$3.49",
    },
    {
        image: "https://i.pinimg.com/474x/fb/94/ca/fb94cab6d7c260b8c5952385d5dfee94.jpg",
        titles: "Vegetarian meal",
        name: "Dry fruits",
        Price: "$3.49",
    },
  
];

export default Vegetarian;

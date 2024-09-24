import React, { useState } from 'react';

import Inbetterment1 from './InBetterment/Inbetterment1';
import InBetterment2 from './InBetterment/InBetterment2';
import Inbetterment3 from './InBetterment/Inbetterment3';
import Inbetterment4 from './InBetterment/Inbetterment4';
import Inbetterment5 from './InBetterment/Inbetterment5';
import Inbetterment6 from './InBetterment/Inbetterment6';
import Inbetterment7 from './InBetterment/Inbetterment7';

function Betterment() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    const renderContent = () => {
        switch (selectedCard) {
            case 0:
                return <Inbetterment1 />;
            case 1:
                return <InBetterment2 />;
            case 2:
                return <Inbetterment3 />;
            case 3:
                return <Inbetterment4 />;
            case 4:
                return <Inbetterment5/>;
            case 5:
                return <Inbetterment6/>;
            case 6:
                return <Inbetterment7/>
            default:
                return null;
        }
    };

   
    return (
        
        <div className='w-3/4 m-auto mb-4'>
            {selectedCard === null ? (
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {BettermentParameter.map((d, index) => (
                        <div
                            key={index}
                            className='border-2 h-auto w-full text-black rounded-xl cursor-pointer transform transition-transform hover:scale-105'
                            onClick={() => handleCardClick(index)}
                        >
                            <div className='h-50 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                <img src={d.bg} alt={d.name}  />
                            </div>
                            <div className='bg-white flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-xl font-semibold'>{d.name}</p>
                                <p>{d.title}</p>
                                <p>{d.Price}</p>
                                <button className='bg-indigo-500 rounded-3xl p-3 border-2 text-white text-lg'>Click to Add</button>
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

const BettermentParameter = [
    {
        bg: "https://i.pinimg.com/474x/5b/06/9e/5b069e1e15f6d79f7fa10f8d5aa6ea31.jpg",
        name: "Mental Refresh",
        title: "Challenges for a Positive Mindset shift",
        Price: "$4.99"
    },
    {
        bg: "https://i.pinimg.com/474x/af/79/9a/af799a5f4d52bba7d8f1620cb7550f5a.jpg",
        name: "Sleep",
        title: "Building blocks for better sleep",
        Price: "$4.99"
    },
    {
        bg: "https://i.pinimg.com/564x/e4/80/cc/e480cc23b3acc70546abfedffdeb8062.jpg",
        name: "Body Image",
        title: "Challenges to Boost Body Image",
        Price: "$4.99"
    },
    {
        bg: "https://i.pinimg.com/474x/1e/26/2b/1e262b71a3bcb398637ba7c00c6bb86f.jpg",
        name: "Pregnancy",
        title: "Preconception",
        Price: "$4.99"
    },
    {
        bg:"https://i.pinimg.com/474x/c0/ed/a2/c0eda2d084da90941098bb9b18f6071b.jpg",
        name:"Exercise Importance",
        title:"The Role of Exercise in Addiction Treatment",
        Price:"$4.99"
    },
    {
        bg:"https://i.pinimg.com/474x/b2/90/9e/b2909e7d945ff39b659273b7ef7d2e84.jpg",
        name:"Personality Traits",
        title:"Personality Traits Shape Exercise Behaviors",
        Price: "$4.99"
    },
    {
        bg:"https://i.pinimg.com/474x/f8/42/eb/f842eb6ea0fb35264d019626a4a25865.jpg",
        name:"Body Dysmorphia",
        title:"Learn about Extreme Body Image Conserns",
        Price:"$4.99"
    }
];

export default Betterment;

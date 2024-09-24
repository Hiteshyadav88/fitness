import React, { useState } from 'react'
import InCard1 from './card1/InCard1'
import InCard2 from './card2/InCard2'
import InCard3 from './card3/InCard3'


function CardsDisplay() {
    const [selectedCard,setselectedCard]=useState(null)

    const handleClick=(index)=>{
            setselectedCard(index)
    }

const renderContent=()=>{
    switch(selectedCard) {
        case 0:
            return <InCard1/>;
            case 1:
                return <InCard2/>;
                case 2:
                    return <InCard3/>;
                    default:
                        return null;
    }
}

  return (
      <div className='w-3/4 m-auto mb-4'>
          {selectedCard === null ? (
              <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {cardDisplay.map((d, index) => (
                      <div
                          key={index}
                          className=' border-2 h-auto w-full text-black rounded-xl cursor-pointer transform transition-transform hover:scale-105'
                          onClick={() => handleClick(index)}
                      >
                          <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                              <img src={d.img} alt={d.title} className='h-44 w-44 ' />
                          </div>
                          <div className='bg-white flex flex-col justify-center items-center gap-4 p-4'>
                              <p className='text-lg font-semibold'>{d.title}</p>
                              <p>{d.line}</p>
                              
                              {/* <button className='bg-indigo-500 rounded-2xl p-3 text-white text-lg'>Click to Add</button> */}
                          </div>
                      </div>
                  ))}
              </div>
          ) : (
              <div className='fixed inset-0 bg-white z-50 overflow-auto p-4'>
                      <button className='bg-red-500 text-white p-2 mb-3 rounded' onClick={() => setselectedCard(null)}>Close</button>
                  {renderContent()}
              </div>
          )}
      </div>
  )
}

const cardDisplay=[
    {
        img:"https://i.pinimg.com/474x/52/fd/5d/52fd5df84c94f144136d69cf2ac31e7f.jpg",
        title:'9 Workouts to Improve Your Push-Up',
        line:"How to Increase Strength To Do More Push-Ups Best Workout Best Physic"

    }, {
        img: "https://i.pinimg.com/474x/45/a1/bd/45a1bd2cc534d01f24d3bcb36b6eff1c.jpg",
        title: 'What is Rib Flare And How To Tell If You Have It',
        line: " Common causes of Rib Flare and Tips for maintaining rib Health For Healthy Life"

    }, {
        img: "https://i.pinimg.com/474x/22/c7/dd/22c7dde8e5789799dbe439dfe45fcedd.jpg",
        title: 'Looking to start a family? What You',
        line: " Need To Know About Exercise And Ferility"

    }, 
]
export default CardsDisplay

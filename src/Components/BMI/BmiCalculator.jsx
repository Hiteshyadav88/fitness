import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const BmiCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [diet, setDiet] = useState('');
    const [caloriesIntake, setCaloriesIntake] = useState('');
    const [image, setImage] = useState('');

    const calculateBmi = () => {
        if (height && weight) {
            const heightInMeters = parseFloat(height);
            const weightInKg = parseFloat(weight);
            const bmiValue = weightInKg / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
            setCaloriesIntake(getCaloriesIntake(bmiValue));
            setDiet(bmiValue >= 25 ? 'low-calorie' : 'balanced-diet');
            setImage(getImageByBmi(bmiValue));
        }
    };

    const getCaloriesIntake = (bmi) => {
        if (bmi < 18.5) {
            return '2200-2500 calories/day';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return '2000-2200 calories/day';
        } else if (bmi >= 25 && bmi < 29.9) {
            return '1800-2000 calories/day';
        } else {
            return '1500-1800 calories/day';
        }
    };

    const getImageByBmi = (bmi) => {
        if (bmi < 18.5) {
            return 'https://i.pinimg.com/564x/12/f3/62/12f362434a7aaffdac6c34bb3450875c.jpg';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'https://i.pinimg.com/474x/bd/8c/a0/bd8ca0e77fa5117af5872f3eab3db56e.jpg';
        } else if(bmi >= 25 && bmi < 29.9) {
            return 'https://i.pinimg.com/474x/9f/06/a1/9f06a1b8a012a679596bc6b41290db02.jpg';
        } else{
            return 'https://i.pinimg.com/474x/2e/d4/99/2ed49981413bdad1f5bd4bc371c101cc.jpg';
        }
    };

    return (
        <div className="container mx-auto py-8 px-4 mb-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-6">
                    {image && <img src={image} alt="BMI" className="w-96 h-auto rounded-lg shadow-md" />}
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold text-center mb-6">BMI Calculator</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                        <div>
                            <label className="block mb-2 text-lg font-semibold">Height (m):</label>
                            <input
                                type="number"
                                className="border rounded px-3 py-2 w-full md:w-24 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-lg font-semibold">Weight (kg):</label>
                            <input
                                type="number"
                                className="border rounded px-3 py-2 w-full md:w-24 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mb-6 w-full md:w-auto"
                        onClick={calculateBmi}
                    >
                        Calculate BMI
                    </button>
                    {bmi && (
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Your BMI: {bmi}</h3>
                            <p className="text-lg mb-4">
                                BMI Categories:
                                <br />
                                Underweight: less than 18.5
                                <br />
                                Normal weight: 18.5–24.9
                                <br />
                                Overweight: 25–29.9
                                <br />
                                Obesity: 30 or more
                            </p>
                            <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                                <Link to="vegetarian" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
                                    Vegetarian
                                </Link>
                                <Link to="non_vegetarian" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded">
                                    Non-Vegetarian
                                </Link>
                            </div>
                            {diet && (
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">Recommended Diet: {diet}</h3>
                                    <p className="text-lg mb-6">
                                        {diet === 'low-calorie' ? 'Low-calorie diet recommendation' : 'Balanced diet recommendation'}
                                    </p>
                                    <h3 className="text-2xl font-semibold mb-2">Calories Intake: {caloriesIntake}</h3>
                                    <p className="text-lg">
                                        Recommended daily calories intake based on your BMI.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default BmiCalculator;

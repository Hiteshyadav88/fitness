import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Slideworkout from './Components/Workouts/Slideworkout.jsx';
import HealthyLiving from './Components/healthy-living/HealthyLiving.jsx';
import Frontpage from './Components/FrontPage/Frontpage.jsx';
import BmiCalculator from './Components/BMI/BmiCalculator.jsx';
import Betterment from './Components/Betterments/Betterment.jsx';
import Diet1 from './Components/Diet/Diet1/Diet1.jsx';
import CardsDisplay from './Components/Cards/CardsDisplay.jsx';
import Vegetarian from './Components/BMI/Vegetarian.jsx';
import Non_vegetarian from './Components/BMI/Non-vegetarian.jsx';
import Contactus from './Contact/Contactus.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Frontpage />} />
      <Route path="Workout" element={<Slideworkout />} />
      <Route path="Diet1" element={<Diet1 />} />
      <Route path="healthy-living" element={<HealthyLiving />} />
      <Route path="Cards" element={<CardsDisplay />} />
      <Route path="Betterment" element={<Betterment />} />
      <Route path="BmiCalculator" element={<BmiCalculator />}>
        <Route path="vegetarian" element={<Vegetarian />} />
        <Route path="non_vegetarian" element={<Non_vegetarian />} />
      </Route>
      <Route path='contact' element={<Contactus/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

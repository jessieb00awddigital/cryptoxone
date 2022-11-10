import React from "react";
import './index.css';
import Steps from  './components/steps/Steps';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index path="/"  element={<Home />} />
    <Route path="/steps"  element={<Steps />} />
    <Route path="/dashboard" element={<Dashboard />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/profile" element={<Profile />} /> 
    <Route path="/settings" element={<Settings />} /> 
  </Route>
));

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App

import { useState, useEffect } from 'react'
import { Routes, Route, Navigate , BrowserRouter} from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import AdminMain from './pages/businessOwner/AdminMain';
import Calender from './pages/businessOwner/Calender';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminChat from './pages/businessOwner/AdminChat';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Activity from './pages/businessOwner/Activity';
import Collaboration from './pages/collaboration';
import Analytics from './pages/businessOwner/Analytics';
import ProfileB from './pages/businessOwner/profileB';
import ProjectDetails from './pages/businessOwner/ProjectDetails';

  

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations (in milliseconds)
      once: true, // Only trigger the animation once
    });
  }, []);
  const routes = [
    {
      path : "/",
      element : <Home />
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/signup",
      element : <SignUp />
    },
    {
      path : "/admin",
      element : <AdminMain />
    },    {
      path : "/analytics",
      element : <Analytics />
    },
    {
      path : "/projectdetails",
      element : <ProjectDetails/>
    },
    {
      path : "/profile",
      element : <ProfileB />
    },
    {
      path : "/calender",
      element : <Calender />
    },
    {
      path : "/collaboration",
      element : <Collaboration />
    },
    {
      path : "/adminChat",
      element : <AdminChat />
    },
    {
      path : "/activity",
      element : <Activity />
    }
  ]
  return (
    <BrowserRouter >
      <ToastContainer />
          <Routes >
            {
              routes.map((route,i)=>{
                return (
                  <Route path={route.path} element={route.element} />
                )
              })
            }
          </Routes>
    </BrowserRouter>
  );
}

export default App

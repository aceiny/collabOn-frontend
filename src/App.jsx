
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
import Collaboration from './pages/Collaboration'
import Analytics from './pages/businessOwner/Analytics';
import ProfileB from './pages/businessOwner/profileB';
import ProjectDetails from './pages/businessOwner/ProjectDetails';
import { useDispatch, useSelector } from 'react-redux';
import { GetBusiness , getWorker } from './redux/slices/businessSlice';
import { fetchProjects } from './redux/slices/projectSlice'
import CreateProject from './components/CreateProject';
import CreateWorker from './components/CreateWorker';

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
  const dispatch = useDispatch()
  const business = useSelector(state => state.business.business)
  const workers = useSelector(state => state.business.workers)
  const projects = useSelector(state => state.projects.projects)
  useEffect(()=>{
    if(!business){
      dispatch(GetBusiness())
    }
  },[])
  useEffect(()=>{
    if(business && !workers){
      dispatch(getWorker(business._id))
    }
  },[business])
  useEffect(()=>{
    if(business && !projects){
      console.log('normalmo takhdem')
      dispatch(fetchProjects(business._id))
    }
  },[business])
  const [showCP , setShowCP] = useState(true) ; const showCPHandler = (B) => {setShowCP(B)}
  const [showCW , setShowCW] = useState(false) ; const showCWHandler = (B) => {setShowCW(B)}
  return (
    <BrowserRouter >
      <ToastContainer />
      <CreateProject show={showCP} handler={showCPHandler}/>
      <CreateWorker show={showCW} handler={showCWHandler} />
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

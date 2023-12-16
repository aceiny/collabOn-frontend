import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import overview from "../assets/icons/overview.svg";
import calender from "../assets/icons/Calendar.svg";
import analytics from "../assets/icons/Graph.svg";
import activity from "../assets/icons/Activity.svg";
import projectsIcon from "../assets/icons/Folder.svg";
import overviewWhite from "../assets/icons/overviewWhite.svg";
import calenderWhite from "../assets/icons/CalendarWhite.svg";
import analyticsWhite from "../assets/icons/GraphWhite.svg";
import activityWhite from "../assets/icons/ActivityWhite.svg";
import projectsIconWhite from "../assets/icons/FolderWhite.svg";
import './navbar.css'

const SideBar = () => {
  const  {pathname} = useLocation()
  const projectsArr = ["project1", "project2", "project3"];
  const routes = [
    {
      name : "overview",
      image : overview,
      focusImage : overviewWhite,
      path : "/admin"
    },
    {
      name : "Calender",
      image : calender,
      focusImage : calenderWhite,
      path : "/calender"
    },
    {
      name : "Analytics",
      image : analytics,
      focusImage : analyticsWhite,
      path : "/analytics"
    },
    {
      name : "Activity",
      image : activity,
      focusImage : activityWhite,
      path : "/activity"
    },
    {
      name : "Projects",
      image : projectsIcon,
      focusImage : projectsIconWhite,
      path : "/projects"
    },
  ]
  return (
    <div className=" fixed w-[15%] h-[100dvh] bg-gray-100 flex flex-col items-center justify-around font-poppins text-lg  text-gray-600 ">
      <img className=" w-[140px] " src={logo} alt="" />
      <div>
        <ul className=" flex flex-col gap-6 w-[100%] ">
          {
            routes.map((route,i)=>{
              return (
                <Link to={route.path} className={` flex items-center gap-2 ${pathname==route.path ?"active" :""}`}>
                  <img src={pathname == route.path ? route.focusImage : route.image} alt={route.name} />
                  {route.name}
                </Link>
              )
            })
          }
        </ul>
      </div>
      <div>
        <h1 className="  uppercase mb-4">Projects</h1>
        <ul className=" flex flex-col gap-4 ">
          {projectsArr.map((project) => (
            <li className=" flex items-center gap-2 capitalize">
              <div className=" h-[40px] w-[40px] bg-primaryGreen rounded-full"></div>
              {project}
            </li>
          ))}
        </ul>
      </div>
      <button className=" rounded-xl border-[1px] px-4 py-2 border-gray-400 ">
        <Link>Log Out</Link>
      </button>
    </div>
  );
};

export default SideBar;
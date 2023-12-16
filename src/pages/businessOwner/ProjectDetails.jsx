
import SideBar from "../../components/SideBar";
import FixedNavBar from "../../components/FixedNavBar";
import { BsArrowReturnRight } from "react-icons/bs";
import { HiFolderOpen } from "react-icons/hi2";
import arrow from "../../assets/icons/arrowP.svg"
import arrowLR from "../../assets/icons/arrowLR.svg";
import folder from "../../assets/icons/FolderP.svg";
import pcaree from "../../assets/icons/pinkcaree.svg";
import bcaree from "../../assets/icons/bluecaree.svg";
import projectpic from "../../assets/icons/projectPic.svg";
const ProjectDetails = () => {
  return (
    <div className="font-poppins">
      <SideBar />
      <FixedNavBar />

      <div className=" w-[100dvw] pt-[140px] pl-[15%] mr-5 0">
        <div className="mx-20 mb-7">
          <div className="flex items-center">
            <div className="bg-primaryGreen w-4 h-4 rounded"></div>
            <div>
              <p className="font-semibold ml-1">Cloth</p>
            </div>
          </div>
          <div className="flex items-center text-gray-500">
            <img src={arrow} alt="" />
            <img src={folder} alt="" />
            <p className="ml-1"> Projects</p>
            <img src={arrowLR} alt="" />
            <img src={pcaree} alt="" />
            <p className="ml-1"> Team projects</p>
            <img src={arrowLR} alt="" />
            <img src={bcaree} alt="" />
            <p className="ml-1">Fashion</p>
          </div>
          <div className="relative ">
            <img src={projectpic} className="mt-4 " alt="" />
            <div className="absolute bottom-1 p-4">
              <div className="flex">
                <div className="bg-[#00F0FF] rounded-full h-10 w-10 "></div>
                <div className="ml-2">
                  {" "}
                  <div className="text-white font-semibold">Project name</div>
                  <p className="text-white text-opacity-[70%]">
                    dev project and hh
                  </p>
                </div>
                <div className="text-[#00F0FF]"> CREATED AT 2023/02/15</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Overview</p>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, earum. Mollitia saepe at autem suscipit!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quaerat, odio iure nam facilis excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

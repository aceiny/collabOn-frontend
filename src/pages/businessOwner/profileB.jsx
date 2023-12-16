import FixedNavBar from "../../components/FixedNavBar";
import SideBar from "../../components/SideBar";
import { FaArrowLeft } from "react-icons/fa";
import adminPic from "../../assets/images/ProfileB.png";

const ProfileB = () => {
  return (
    <div className="font-poppins">
      <SideBar />
      <FixedNavBar />

      <div className=" pt-[140px] pl-[15%] mr-5 mx-20 ">
        <div className="font-bold flex items-center mb-10">
          <FaArrowLeft className="mr-1" />
          <div>Profile settings</div>
        </div>
        <div className="flex text-3xl ">
          <div className="font-semibold border-r-2 border-gray-500 mr-5 pr-4 ">
            Mohamed ali <br />
            <span className="text-xl font-normal">johndoe@example.com</span>
          </div>
          <div className="flex items-center">Business owner</div>
        </div>
        <div className="flex ">
          <div className="w-[50%]">
            <div className="flex mt-10 w-full border-r-2 border-gray-500 ">
              <div>
                {" "}
                <img src={adminPic} alt="" className=" rounded-md  w-[140px]" />
              </div>
              <div className="relative w-full ml-2">
                <div className="absolute left-0 bottom-7">
                  <span className="bg-[#50C878] bg-opacity-[30%] rounded-lg px-2">
                    +
                  </span>{" "}
                  Add a new picture
                </div>
                <div className="absolute left-0 bottom-0 ">
                  <span className="bg-[#50C878] bg-opacity-[30%] rounded-lg px-2">
                    -
                  </span>{" "}
                  Delete picture
                </div>
              </div>
            </div>
            <div className="flex flex-col w-fit mt-5 text-start gap-1 ">
              <button className="bg-[#50C878] bg-opacity-[30%] rounded-lg p-2">
                Edit profile
              </button>
              <button className="bg-[#50C878] bg-opacity-[30%] rounded-lg p-2">
                Change password
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 relative bg-red-500">
            <button className="bg-gray-300 p-2 rounded-lg bg-opacity-[70%] absolute bottom-0 w-[100px] ">
              help
            </button>
            <button className="bg-gray-300 p-2 rounded-lg bg-opacity-[70%] absolute bottom-12  w-[100px] ">
              privacy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileB;

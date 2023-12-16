import projectX from "../../../assets/images/ProjectX.png";
import profilePic from "../../../assets/images/admin.png";
import addIcon from "../../../assets/icons/add.svg";
const ProjectsProgress = () => {
  const projectsArr = ["project1", "project2", "project3"];
  return (
    <div
      data-aos="fade-right"
      className=" bg-gray-100 rounded-3xl p-6 flex flex-col gap-4"
    >
      {projectsArr.map((project, index) => (
        <div className=" flex justify-between items-end">
          <div className="flex gap-4 ">
            <img className=" w-[60px] h-[60px]" src={projectX} alt="" />
            <div className=" flex flex-col w-[500px]">
              <h1 className=" text-xl font-bold mb-4">ProjectX</h1>
              <span className=" w-[43%] h-[8px] bg-primaryGreen rounded-2xl"></span>
            </div>
          </div>

          <p className=" text-gray-700">43% Complete</p>
          <div className=" flex relative">
            <img className="  w-[40px] h-[40px]" src={projectX} alt="" />
            <img
              className=" w-[40px] h-[40px] ml-[-10px] rounded-full z-10"
              src={profilePic}
              alt=""
            />
            <button className=" ml-[-10px]">
              <img src={addIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsProgress;

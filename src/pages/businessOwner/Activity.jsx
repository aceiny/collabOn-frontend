import FixedNavBar from "../../components/FixedNavBar";
import SideBar from "../../components/SideBar";
import Task from "./components/Task";
import noteLine from "../../assets/images/noteLine.svg";

const Activity = () => {
  return (
    <div>
      <SideBar />
      <FixedNavBar />
      <div className=" w-[100dvw] pt-[140px] pl-[15%] pr-10">
        <div className="flex  gap-6 p-6 ">
          <div className=" flex flex-col w-[35%]  gap-6 ">
            <Tasks />
            <Notes />
          </div>
          <div>
            todo list
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;

const Tasks = () => {
  return (
    <div className=" flex flex-col gap-6 w-full ">
      <Task
        name={"Today's Tasks"}
        color={"orange-300"}
        number={"3"}
        add={false}
      />
      <Task
        name={"Upcoming Tasks"}
        color={"blue-400"}
        number={"2"}
        add={false}
      />
      <Task
        name={"Completed Tasks"}
        color={"primaryGreen"}
        number={"5"}
        add={false}
      />
    </div>
  );
};

const Notes = () => {
  return (
    <div data-aos="fade-up" className=" flex flex-col bg-gray-100 rounded-xl border-2 border-gray-300 p-4 h-[350px] ">
      <div className=" flex justify-between border-b-2 border-gray-400 pb-4 text-xl font-bold">
        <span>Project done</span>
        <span>10</span>
      </div>
      <div className=" flex items-center justify-between gap-4 p-4">
        <img className="h-[80%] w-[80%]" src={noteLine} alt="" />
        <p className=" text-xl font-bold text-gray-500 ">
          <span className=" text-primaryGreen text-2xl">10 + </span> more <br />
           from last week
        </p>
      </div>
    </div>
  );
};

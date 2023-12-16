import { Route, Routes } from "react-router-dom";
import FixedNavBar from "../../components/FixedNavBar";
import SideBar from "../../components/SideBar";
import AdminOverview from "./AdminOverview";
import Calender from "./Calender";
import AdminChat from "./AdminChat";

const AdminMain = () => {
  return (
    <div className=" w-[100dvw]">
      <SideBar />
      <FixedNavBar />
      <div className=" w-[100dvw] pt-[140px] pl-[15%] pr-10">
        <AdminOverview />
      </div>
    </div>
  );
};

export default AdminMain;

import React from "react";
import { LuUsers } from "react-icons/lu";
import { Route, Routes } from "react-router-dom";
import FixedNavBar from "../../components/FixedNavBar";
import SideBar from "../../components/SideBar";
import AdminOverview from "./AdminOverview";
import Calender from "./Calender";
import { LineChart } from "@mui/x-charts/LineChart";

const Analytics = () => {
  return (
    <>
      <SideBar />
      <FixedNavBar />

      <div className=" w-[100dvw] pt-[140px] pl-[15%]  ">
        <div className="mr-5 flex mx-20 mb-7">
          <div className="border-2 font-[#A2A2A1] rounded-lg p-5 text-xl  mr-4 mb-7 w-full">
            <div className="flex justify-between">
              <div className="font-bold text-3xl">452</div>
              <div>
                <LuUsers
                  className="text-[#97CE71]  bg-gray-100 rounded-full p-1"
                  size={30}
                />
              </div>
            </div>
            <div>Total Employees</div>
            <div className="text-gray-500">
              <span className="text-[#97CE71] bg-gray-100 p-1 rounded-full w-3 h-3 mt-2 ">
                +
              </span>{" "}
              2 new employees added!
            </div>
          </div>
          <div className="border-2 font-[#A2A2A1] rounded-lg p-5 text-xl mr-4 mb-7 w-full">
            <div className="flex justify-between">
              <div className="font-bold text-3xl">452</div>
              <div>
                <LuUsers
                  className="text-[#97CE71]  bg-gray-100 rounded-full p-1"
                  size={30}
                />
              </div>
            </div>
            <div>Total Employees</div>
            <div className="text-gray-500">
              <span className="text-[#97CE71] rounded-lg">+</span> 2 new
              employees added!
            </div>
          </div>
          <div className="border-2 font-[#A2A2A1] rounded-lg p-5 text-xl mr-4 mb-7 w-full">
            <div className="flex justify-between">
              <div className="font-bold text-3xl">452</div>
              <div>
                <LuUsers
                  className="text-[#97CE71]  bg-gray-100 rounded-full p-1"
                  size={30}
                />
              </div>
            </div>
            <div>Total Employees</div>
            <div className="text-gray-500">
              <span className="text-[#97CE71] rounded-lg">+</span> 2 new
              employees added!
            </div>
          </div>
          <div className="border-2 font-[#A2A2A1] rounded-lg p-5 text-xl mb-7 w-full">
            <div className="flex justify-between">
              <div className="font-bold text-3xl">452</div>
              <div>
                <LuUsers
                  className="text-[#97CE71]  bg-gray-100 rounded-full p-1"
                  size={30}
                />
              </div>
            </div>
            <div>Total Employees</div>
            <div className="text-gray-500">
              <span className="text-[#97CE71] rounded-lg">+</span> 2 new
              employees added!
            </div>
          </div>
        </div>
        <div className="ml-20  mb-7 border-2  font-[#A2A2A1] w-fit rounded-lg p-5 text-xl ">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                color: "#43900C",
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Analytics;

import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import Button from "@mui/material/Button";
import SideBar from "../../components/SideBar";
import FixedNavBar from "../../components/FixedNavBar";

import { Scheduler } from "@aldabil/react-scheduler";

const Calender = () => {
  return (
    <div>
      <SideBar />
      <FixedNavBar />

      <div className=" w-[100dvw] pt-[140px] pl-[15%] mr-5 0">
        <div data-aos="zoom-in" className="mx-20 mb-7">
          <Scheduler
            view="month"
            events={[
              {
                event_id: 1,
                title: "Event 1",
                start: new Date("2021/5/2 09:30"),
                end: new Date("2021/5/2 10:30"),
              },
              {
                event_id: 2,
                title: "Event 2",
                start: new Date("2021/5/4 10:00"),
                end: new Date("2021/5/4 11:00"),
              },
            ]}
          />
        </div>
        {/* <div className="ml-20 mb-7">
          <div className="mb-5">
            <button className="bg-primaryGreen text-white p-2 rounded-lg w-[150px] text-start">
              {" "}
              + new event
            </button>
            <button className="ml-2 bg-primaryGreen text-white p-2 rounded-lg w-[150px] text-start">
              {" "}
              - Delete event
            </button>{" "}
            <button className="bg-primaryGreen ml-2 text-white p-2 rounded-lg w-[200px] text-start">
              {" "}
              + Postpone an event
            </button>
          </div>
          <div className="flex d h-screen  ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DemoItem>
                  <DateCalendar defaultValue={dayjs("2023-04-17")} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DemoItem>
                  <DateCalendar defaultValue={dayjs("2023-04-17")} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Calender;

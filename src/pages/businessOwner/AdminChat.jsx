import { useState } from "react";
import image from "../../assets/images/microsoft.svg";
import FixedNavBar from "../../components/FixedNavBar";
import SideBar from "../../components/SideBar";
const AdminChat = () => {
  const [sentMessage, setSentMessage] = useState("")
  const handelChange = (e) => {
    setSentMessage(e.target.value)
  }
  const messageArr = [
    { name: "Microsoft", followers: "3M" },
    { name: "Google", followers: "2M" },
    { name: "Apple", followers: "1M" },
  ];
  const msg = "hey lil nigga"
  return (
    <div>
      <SideBar />
      <FixedNavBar />
      <div className=" w-[100dvw] pt-[140px] pl-[15%] pr-10">
        <div className=" p-6 flex gap-10 justify-between">
          <div className="  border-2 rounded-xl border-gray-300 flex flex-col p-6 w-[45%] h-[70dvh] items-start gap-[30px] ">
            <ul className="flex items-center justify-between w-full text-xl ">
              <li className=" py-2 px-4 rounded-3xl bg-primaryGreen/20 text-primaryGreen ">
                All
              </li>
              <li className=" py-2 px-4 rounded-3xl bg-gray-100">Requests</li>
              <li className=" py-2 px-4 rounded-3xl bg-gray-100">
                Collaborations
              </li>
              <li className=" py-2 px-4 rounded-3xl bg-gray-100">Calls</li>
              <li className=" py-2 px-4 rounded-3xl bg-gray-100">Meets</li>
            </ul>
            <div className=" flex flex-col gap-4 w-full ">
              {messageArr.map((message) => (
                <div className=" flex items-center gap-4 rounded-2xl bg-gray-100 p-4">
                  <img className=" rounded-full" src={image} alt="" />
                  <div>
                    <h1>{message.name}</h1>
                    <p>{message.followers}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" border-2 rounded-xl border-gray-300 p-6 w-[53%] h-[70vdvh] flex flex-col gap-4 ">
            <div className=" flex  items-center gap-4 rounded-2xl bg-gray-100 p-4">
              <img className=" rounded-full" src={image} alt="" />
              <div>
                <h1>{messageArr[0].name}</h1>
                <p>{messageArr[0].followers}</p>
              </div>
              
            </div>
            <div className=" flex-1 bg-gray-100 rounded-xl flex p-2 gap-4 flex-col-reverse">
                <input type="text" className=" outline-none bg-gray-0 rounded-xl p-2 text-lg  " placeholder="Send Messge" onChange={handelChange}  name="" id="" />
                <Message msg={""} sender={true} />
                <Message msg={""} sender={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChat;


const Message = ({msg, sender  }) => {
    return ( 
        <div className={` bg-primaryGreen w-fit py-2 px-3 text-lg rounded-lg text-gray-50 ${sender == true ? "self-end" : "self-start"} `} >{msg}</div>
     );
}
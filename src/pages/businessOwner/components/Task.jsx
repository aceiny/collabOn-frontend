import addGreeen from "../../../assets/icons/addGreen.svg"
const Task = ({ color, name, number, add }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="300"
      className={` flex-1 p-4 flex items-center justify-between bg-gray-100 rounded-3xl border-t-[6px]  border-${color}`}
    >
      <div className=" flex gap-4 items-center">
        <h1 className=" text-xl font-bold">{name}</h1>
        <span className=" text-xl py-2 px-4 font-medium rounded-full bg-gray-50">
          {number}
        </span>
      </div>
      {add ? (<img src={addGreeen} alt="" />) : " "}
    </div>
  );
};

export default Task;

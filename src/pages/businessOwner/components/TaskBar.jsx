import addGreeen from "../../../assets/icons/addGreen.svg"
import Task from "./Task";
const TaskBar = () => {
    return ( 
        <div  className=" flex w-full gap-6 my-6">
            <Task name="Today's Tasks" color="orange-300" add={true} number={"3"} />
            <Task name={"Upcoming Tasks"} color="blue-400" add={true} number={"2"} />
            <Task name="Completed Tasks" color="primaryGreen" add={false} number={"5"} /> 
        </div>
     );
}
 
export default TaskBar;
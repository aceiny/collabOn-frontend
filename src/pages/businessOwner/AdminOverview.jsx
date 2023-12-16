import ProjectCard from "./components/ProjectCard";
import ProjectsProgress from "./components/ProjectProgress";
import TaskBar from "./components/TaskBar";
import { useEffect } from "react";
 
const AdminOverview = () => {
  
  const projectsArray = [
    {
      projectNmae: "project 1",
      projectId: "1",
      projectOverview: "this is the overview of the project",
      deadline: "12/12/2021",
      projectState: "ongoing",
    },
    {
      projectNmae: "project 2",
      projectId: "2",
      projectOverview: "this is the overview of the project",
      deadline: "12/12/2021",
      projectState: "ongoing",
    },
    {
      projectNmae: "project 3",
      projectId: "3",
      projectOverview: "this is the overview of the project",
      deadline: "12/12/2021",
      projectState: "ongoing",
    },
    {
      projectNmae: "project 4",
      projectId: "4",
      projectOverview: "this is the overview of the project",
      deadline: "12/12/2021",
      projectState: "ongoing",
    },
    {
      projectNmae: "project 5",
      projectId: "5",
      projectOverview: "this is the overview of the project",
      deadline: "12/12/2021",
      projectState: "ongoing",
    },
    {
      projectNmae: "project 6",
      projectId: "6",
      projectOverview: "this is the overview of the project",
      deadline: "12/12/2021",
      projectState: "ongoing",
    },
  ];
  return <div className=" p-6" >
    <ProjectsProgress />
    <TaskBar />

    <div className=" w-[100%] flex gap-6 flex-wrap ">

    {projectsArray.map((project)=>(
      <ProjectCard projectName={project.projectNmae} projectState={project.projectState} projectOverview={project.projectOverview} deadline={project.deadline} key={project.projectId}/>
    ))}
    </div>
   
  </div>;
};

export default AdminOverview;

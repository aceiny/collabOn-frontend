import timer from '../../../assets/icons/timer.svg'
const ProjectCard = ({projectName , projectState, projectOverview, deadline, key} ) => {
    return ( 
        <div data-aos="fade-up" data-aos-delay="900" className=' flex flex-col py-4 px-6 bg-gray-50 rounded-3xl w-[32%] gap-6 border-2 border-gray-300' key={key}>
            <div className=' flex justify-between'>
                <h1 className=' text-xl font-bold capitalize '>{projectName }</h1>
                <span className='text-lg py-2 px-4 rounded-3xl bg-blue-200 text-blue-600 font-bold capitalize' >{projectState}</span>
            </div>
            <p className=' text-gray-600 '>{projectOverview}</p>
            <div className=' flex gap-2  text-lg'>
                <img src={timer} alt="" />
                <p><span className=' capitalize font-medium text-orange-400'>deadline : </span>{deadline}</p>
            </div>
        </div>
     );
}
 
export default ProjectCard;
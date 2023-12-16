import React , {useState , useEffect} from 'react'
import arrow from '../assets/icons/arrow.svg'
import { useDispatch } from 'react-redux';
import { createProject } from '../redux/slices/projectSlice';
const CreateProject = ({show , handler}) => {
  const dispatch = useDispatch()
    const [name, setName] = useState('') ; const NameHandler = (e) => { setName(e.target.value) }
    const [description, setDescription] = useState('') ; const DescriptionHandler = (e) => { setDescription(e.target.value) }
    const [projectLeader, setProjectLeader] = useState('') ; const ProjectLeaderHandler = (e) => { setProjectLeader(e.target.value) }
    const tags = ["tag1"] 
    const [budget, setBudget] = useState('') ; const BudgetHandler = (e) => { setBudget(e.target.value) }
    const createProjectHandler = () => {
      dispatch(createProject({name , description , projectLeader , tags , budget}))
    }
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (show && !e.target.closest('.cpCard')) {
          handler(false);
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [show, handler]);
  return (
    <div className={` bg-white cpCard shadow-lg fixed halfTransition  z-[100] pt-[25px] pb-[100px]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] rounded-xl flex flex-col px-[50px] ${show?"top-[50%]":"top-[-50%]"} `}>
        <div className='flex items-center mb-[20px] justify-between'>
            <h1 className=' text-[23px] font-[600] uppercase'>Create a New project</h1>
            <img src={arrow} alt="" />
        </div>
        <div className='flex flex-col gap-[30px] items-center'>
            <input type="text"  placeholder='name' className=' w-[50%] bg-[#FFF3F3] rounded-[13px] py-4 px-3 outline-none' onChange={NameHandler} />
            <input type="text"  placeholder='description' className=' w-[50%] bg-[#FFF3F3] rounded-[13px] py-4 px-3 outline-none' onChange={DescriptionHandler} />
            <input type="text"  placeholder='Project Leader' className=' w-[50%] bg-[#FFF3F3] rounded-[13px] py-4 px-3 outline-none' onChange={ProjectLeaderHandler}/>
            <input type="Number"  placeholder='budget' className=' w-[50%] bg-[#FFF3F3] rounded-[13px] py-4 px-3 outline-none' onChange={BudgetHandler} />
            <button className='w-[50%] bg-[#50C878] uppercase text-white text-[22px] font-[600] rounded-[13px] py-4 px-3 outline-none' onClick={createProjectHandler}>Create</button>
        </div>
    </div>
  )
}

export default CreateProject
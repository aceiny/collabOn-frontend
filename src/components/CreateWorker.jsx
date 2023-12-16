import React , {useState,useEffect} from 'react'
import arrow from '../assets/icons/Arrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { createWorker } from '../redux/slices/businessSlice';
const CreateWorker = ({show , handler}) => {
  const dispatch = useDispatch()
    const [name, setName] = useState('') ; const NameHandler = (e) => { setName(e.target.value) }
    const [email, setEmail] = useState('') ; const EmailHandler = (e) => { setEmail(e.target.value) }
    const [password, setPassword] = useState('') ; const PasswordHandler = (e) => { setPassword(e.target.value) }
    const business = useSelector(state => state.business.business)
    const createWorkerHandler = () => {
      console.log({name , email , password , business : business._id })
      dispatch(createWorker({name , email , password , business : business._id }))
    }
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (show && !e.target.closest('.cwCard')) {
          handler(false);
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [show, handler]);
  return (
    <div className={` bg-white cwCard halfTransition shadow-lg fixed  z-[100] pt-[25px] pb-[100px]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] rounded-xl flex flex-col px-[50px] ${show?"top-[50%]":"top-[-50%]"} `}>
        <div className='flex items-center mb-[20px] justify-between'>
            <h1 className=' text-[23px] font-[600] uppercase'>Create a New worker</h1>
            <img src={arrow} alt="" />
        </div>
        <div className='flex flex-col gap-[30px] items-center'>
            <input type="text"  placeholder='name' className=' w-[50%] bg-[#FFF3F3] rounded-[13px] py-4 px-3 outline-none' onChange={NameHandler}/>
            <input type="text"  placeholder='email' className=' w-[50%] bg-[#FFF3F3] rounded-[13px] py-4 px-3 outline-none' onChange={EmailHandler}/>
            <input type="text"  placeholder='password' className=' w-[50%] bg-[#FFF3F3] rounded-[13px] py-4 px-3 outline-none' onChange={PasswordHandler} />
            <button className='w-[50%] bg-[#50C878] uppercase text-white text-[22px] font-[600] rounded-[13px] py-4 px-3 outline-none' onClick={createWorkerHandler}>Create</button>
        </div>
    </div>
  )
}

export default CreateWorker
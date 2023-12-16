import search from '../assets/icons/search.svg'
import notification from '../assets/icons/Notification.svg'
import chat from '../assets/icons/Chat.svg'
import adminPic from '../assets/images/admin.png'
import { Link } from 'react-router-dom'
const FixedNavBar = () => {
    return ( 
        <div className=" fixed w-[100dvw] py-6 flex items-center justify-end pr-[100px]  gap-[30px] ">
            <div className=' flex gap-2 w-[40%]  bg-gray-200 py-2 px-4 rounded-xl'>
                <img src={search} alt="" />
                <input type="text" name="" id="" className=' bg-gray-200 text-lg outline-none' placeholder='Search'  />
            </div>
            <div className=' flex gap-4 '>
                <button>
                    <Link to="/adminChat">
                    <img src={chat} alt="" />

                    </Link>
                </button>
                <button>
                    <img src={notification} alt="" />
                </button>
                <div className=' flex gap-4  '>
                    <Link to="/profile"><img src={adminPic} alt="" /></Link>
                    <div>
                        <h1 className=' text-xl font-bold '>i wanna sleep</h1>
                        <p>bytebyte@estin.dz</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FixedNavBar;
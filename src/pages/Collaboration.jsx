import React from 'react'
import SideBar from '../components/SideBar'
import FixedNavBar from '../components/FixedNavBar'
import CollaborationCard from './businessOwner/components/CollaborationCard'
const Collaboration = () => {
  return (
    <div className = ''>
        <SideBar/>
        <FixedNavBar/>
        <div data-aos="zoom-in" className='w-[100dvw] pt-[140px] pl-[20%] pr-[10%] flex items-start justify-center mr-5 '>
            <div className='flex flex-col gap-3'>
                    <h1 className='text-[#56555C] text-[16px] '>New Project</h1>
                    <div className='flex flex-wrap items-center gap-[38px]'>
                        <CollaborationCard/>
                        <CollaborationCard/>
                        <CollaborationCard/>
                        <CollaborationCard/>
                        <CollaborationCard/>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Collaboration
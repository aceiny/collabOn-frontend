import React from 'react'
import top from '../../../assets/images/foldertop.svg'

const FolderCard = () => {
  return (
    <div className='border flex flex-col justify-between relative top-[35px] p-[26px]  border-[#ACACAB] w-[166px] h-[125px] rounded-r-[13px] '>
        <img src={top} className='absolute translate-y-[-99%] left-[-2px] top-[0] z-50' alt="" />
        <h1 className='text-[21px] text-[#82808F]'>Folder</h1>
        <div>
          <p className='text-[15px] text-[#A3A3A3]'>April 12</p>
        </div>
    </div>
  )
}

export default FolderCard
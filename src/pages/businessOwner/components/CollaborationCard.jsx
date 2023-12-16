import React from 'react'

const CollaborationCard = () => {
  return (
    <div className=' cursor-pointer border border-[#ACACAB] rounded-[11px] shadow-sm flex w-[270px] gap-[13px] min-h-[250px] flex-col px-[11px] pt-[11px] pb-[24px]'>
        <div className='w-full h-[122px] bg-red-200 rounded-[6.55px]'>
            
        </div>
        <div className='flex flex-col gap-[13px] '>
            <div className='flex gap-2 items-center'>
                <div className='w-[41px] h-[41px] bg-red-600 rounded-full'></div>
                <div>
                    <h1>Cloth</h1>
                    <p>Small and consices headlin</p>
                </div>
            </div>
            <div>
                <div className='collaborationTags flex items-center flex-wrap gap-1 '>
                    <div className='px-[11px] bg-red-200 py-[5px] rounded-[36px]'>
                        Profitable
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollaborationCard
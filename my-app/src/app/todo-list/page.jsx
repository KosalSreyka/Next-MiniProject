import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className='flex'>
        <div className='w-[270px]'>
           <SidebarComponent/>
        </div>
          <div className='w-[80%] ml-5'>
             <NavbarComponent />  
          </div>
            
       </div>
    </div>
  )
}

export default page
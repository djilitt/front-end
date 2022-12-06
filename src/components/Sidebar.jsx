import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import { FcStatistics } from 'react-icons/fc';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';

const Sidebar = () => {
    const activeMenu = true;
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto
     md:hover:overflow-auto pb-3'>
     {activeMenu && (<>
     <div className='flex justify-between items-center'>
     <Link to="/" onClick={()=>{}}
      className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
        <FcStatistics /> <span>statics</span>
     </Link>
     <TooltipComponent content="menu" position='BottomCenter'>
        <button type='button' onClick={()=>{}} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
            <MdOutlineCancel />
        </button>
       
     </TooltipComponent>
     </div>
     <div className='mt-10'>
    {
     links.map((item)=>(
     <div className='text-gray-400 m-3 mt-4 uppercase'>
       {item.title}                                                                                                                                                      
     </div>
     ) )}
     </div>
     </>) }
    </div>
  )
}

export default Sidebar
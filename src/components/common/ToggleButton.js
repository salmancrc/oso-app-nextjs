import { useSidebar } from '@/context/SidebarContext'
import React from 'react'

const ToggleButton = () => {
    const {toggleSidebar} = useSidebar();
    return (
        <button className='border border-purple rounded w-14 h-14 flex items-center justify-center bg-white' onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" className='fill-purple' />
            </svg>
        </button>
    )
}

export default ToggleButton
import { useSidebar } from '@/context/SidebarContext';
import React from 'react'
import SidebarHeader from './SidebarHeader';
import SidebarHistory from './SidebarHistory';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    return (
        <div className={`bg-gray-700 transition-all duration-300 absolute md:static h-full z-10 ${isSidebarOpen ? 'w-[calc(100%_-_58px)] sm:w-[350px]' : 'w-0'}`}>

            {isSidebarOpen &&
                <div className='absolute top-5 -right-8 md:hidden w-8 h-8 -mr-3.5 bg-white rounded flex items-center justify-center cursor-pointer' onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#8E33FF" />
                    </svg>
                </div>
            }
            <div
                className='flex-shrink-0 overflow-x-hidden h-full'>
                <div className='ps-8 pt-8 pb-10 h-full'>
                    <div className='flex h-full min-h-0 flex-col '>
                        <div className='relative h-full w-full flex-1 items-start'>
                            <nav className='flex h-full w-full flex-col'>
                                {/* Header */}
                                <SidebarHeader />
                                {/* History */}
                                <SidebarHistory />

                                {/* Footer */}
                                <SidebarFooter />
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
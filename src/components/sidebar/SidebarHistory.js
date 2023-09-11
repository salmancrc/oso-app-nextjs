import React from 'react'
import SidebarHistoryItem from './SidebarHistoryItem'

const SidebarHistory = () => {
    return (
        <div className='flex flex-col flex-1 overflow-y-auto transition-opacity duration-500 pb-14 mt-6 mb-8 custom-scrollbar'>
            <SidebarHistoryItem title="Recent"/>
            <SidebarHistoryItem title="Yesterday"/>
            <SidebarHistoryItem title="Previous 7 days"/>
        </div>
    )
}

export default SidebarHistory
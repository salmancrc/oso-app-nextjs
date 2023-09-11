import React from 'react'
import SidebarHistoryItem from './SidebarHistoryItem'
import SidebarHistoryItemContent from './SidebarHistoryItemContent'

const SidebarHistory = () => {
    return (
        <div className='flex flex-col flex-1 overflow-y-auto transition-opacity duration-500 pb-14 mt-6 mb-8 custom-scrollbar pr-8'>
            <SidebarHistoryItem title="Recent">
                <SidebarHistoryItemContent />
            </SidebarHistoryItem>
            <SidebarHistoryItem title="Yesterday">
                <SidebarHistoryItemContent />
                <SidebarHistoryItemContent />
                <SidebarHistoryItemContent />
            </SidebarHistoryItem>
            <SidebarHistoryItem title="Previous 7 days">
                <SidebarHistoryItemContent />
            </SidebarHistoryItem>
        </div>
    )
}

export default SidebarHistory
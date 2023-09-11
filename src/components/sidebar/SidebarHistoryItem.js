import React from 'react'
import SidebarHistoryItemContent from './SidebarHistoryItemContent'

const SidebarHistoryItem = ({ title }) => {
    return (
        <div className='relative h-auto opacity-100'>
            <div className='sticky top-0 z-[16] mb-3 bg-gray-700'>
                <h3 className='h-9 pb-2 pl-0 pt-3 px-3 text-xs text-gray-100 font-medium text-ellipsis overflow-hidden break-all bg-gray-900'>
                    {title}
                </h3>
            </div>
            <SidebarHistoryItemContent />
            <SidebarHistoryItemContent />
        </div>
    )
}

export default SidebarHistoryItem
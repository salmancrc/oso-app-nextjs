import Image from 'next/image'
import React from 'react'

const SidebarHeader = () => {
    return (
        <div className='flex items-center justify-between'>
            <Image src={'/assets/images/sidebar-logo.svg'} width={32} height={46} alt='logo' />
            <button className='flex items-center gap-2 text-purple font-secondary text-sm font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="#8E33FF" />
                </svg>
                <span>New Search</span>
            </button>
        </div>
    )
}

export default SidebarHeader
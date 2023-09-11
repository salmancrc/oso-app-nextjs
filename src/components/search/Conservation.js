import Image from 'next/image'
import React from 'react'

const Conservation = () => {
    return (
        <div>
            <div className='px-4 py-6'>
                <div className='py-[7px] rounded-[20px]'>
                    <p className='text-black font-secondary text-base tracking-wider opacity-90'>How to detect mobile devices using Cloudeflare redirect rules?</p>
                </div>
            </div>
            <div className='flex gap-2 items-start px-4 py-6'>
                <Image src={'/assets/images/logo.svg'} width={25} height={36} alt='logo' />
                <div className='flex-1 rounded-[20px] bg-purple-200 p-4'>
                    <p className='text-black font-secondary text-base tracking-wider opacity-90'>Searching the entire Internet for you. You&apos;ll get a notification when it&apos;s ready, usually within 30 seconds.</p>
                </div>
            </div>
        </div>
    )
}

export default Conservation
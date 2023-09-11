import Image from 'next/image'
import React from 'react'

const Warning = () => {
    return (
        <div>
            <div className='flex gap-2 items-start px-4 py-6'>
                <Image src={'/assets/images/logo.svg'} width={25} height={36} alt='logo' />
                <div className='flex-1 rounded-[20px] bg-warning-light p-4'>
                    <p className='text-black font-secondary text-base tracking-wider opacity-90'>Something went wrong. Please try again by <button className='text-purple'>clicking here</button></p>
                </div>
            </div>
        </div>
    )
}

export default Warning
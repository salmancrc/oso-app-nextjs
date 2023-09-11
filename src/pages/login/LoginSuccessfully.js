'use client'
import Logo from '@/components/common/Logo'
import React from 'react'

const LoginSuccessfully = () => {
    return (
        <section className='h-screen flex justify-center flex-col '>
            <div className='mx-3 flex flex-col md:mx-auto md:max-w-[346px]'>
                <Logo />
                <p className='text-[32px] mt-6 mb-2 font-bold text-black leading-[48px]'>OSO is getting popular and currently at capacity.</p>
                <p className='text-gray-100 leading-6 text-base font-light mb-6'>You will receive an email when a spot opens up, or join OSO PRO to access it immediately.</p>
                <a href='#' className='theme-btn w-full'>Join OSO Pro now for instant access</a>
            </div>
        </section>
    )
}

export default LoginSuccessfully
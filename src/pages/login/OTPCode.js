'use client'
import Logo from '@/components/common/Logo'
import React from 'react'

const OTPCode = () => {
  return (
    <section className='h-screen flex justify-center items-center'>
    <div className='mx-3 flex flex-col md:mx-auto max-w-[393px]'>
      <div className='max-w-[353px]'>
        <Logo />
        <h2 className='text-[32px] my-8 font-secondary font-normal'>Login to OSO</h2>
        <p className='text-base text-black mb-8 font-secondary font-medium tracking-wider'>Enter the code below to securely login. This code will expires in 20 minutes.</p>
        <h2 className='text-5xl font-mediuml mb-8'>134960</h2>
        <p className='text-gray-100 text-base tracking-wider font-normal font-secondary mb-4'>The login was requested using Mac OS Safari at 00:44:59 PDT on August 23, 2023.</p>
      </div>
      <p className='text-gray-400 text-sm tracking-wide font-secondary'>If you did not request this then you can just ignore this email.</p>
    </div>
  </section>
  )
}

export default OTPCode
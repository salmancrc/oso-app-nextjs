'use client'
import Logo from '@/components/common/Logo'
import React, { useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'

const Login = () => {
    const [delText, setDelText] = useState(false)
    const [text, setText] = useState('')
    function handlchange(e) {
        let value = e.target.value;
        setText(value)
        if (value.length == '') {
            setDelText(false)
        } else {
            setDelText(true)
        }
    }
    return (
        <section className='h-screen flex justify-center flex-col'>
            <div className='mx-auto flex flex-col max-w-[346px] '>
                <Logo />
                <h2 className='text-2xl mt-6 mb-2 font-bold'>Enter your email to login</h2>

                <p className='text-gray-100 mb-6 text-base font-light'>We’ll send magic link to your inbox to login.</p>
                <form method=''>
                    <div className='relative transition-all'>
                        <input
                            type="email"
                            value={text}
                            onChange={handlchange}
                            id='email'
                            className='transition-all duration-200 p-4 input-text font-secondary font-normal border-gray-200 border h-14 w-full text-base mb-6 outline-none text-black placeholder-gray-300 rounded focus:border-purple peer' />

                        <label
                            htmlFor='email'
                            className={`transition-all duration-300 absolute cursor-text left-4 top-3.5 text-base peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:px-1 z-10 peer-focus:text-purple peer-focus:left-3 peer-focus:text-xs ${text ? "-translate-y-6 bg-white text-purple left-3 text-xs" : null}`}>Email address</label>

                        {delText &&
                            <ImCancelCircle
                                className='transition-all absolute right-4 top-5 cursor-pointer'
                                onClick={() => { setDelText(false), setText('') }}
                            />
                        }

                    </div>

                    <button className='theme-btn w-full' type='submit'>Continue</button>
                </form>
            </div>
        </section>
    )
}

export default Login
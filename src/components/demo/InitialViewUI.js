import Image from 'next/image';
import React, { useState } from 'react';
import ModalComponent from '@/components/modal/Modal'
import CancelModal from '../modal/CancelModal';

const InitialViewUI = () => {
    const [modalIsThumbUp, setIsThumbUp] = useState(false);
    const [modalIsThumbDown, setIsThumbDown] = useState(false);
    const [modalIsReport, setIsReport] = useState(false);

    function openThumbUpModal() {
        setIsThumbUp(true);
    }

    function closeThumbUpModal() {
        setIsThumbUp(false);
    }

    function openThumbDownModal() {
        setIsThumbDown(true);
    }

    function closeThumbDownModal() {
        setIsThumbDown(false);
    }

    function openReportModal() {
        setIsReport(true);
    }

    function closeReportModal() {
        setIsReport(false);
    }

    return (
        <>
            <div className='flex gap-2 items-start px-4 py-6'>
                <Image src={'/assets/images/logo.svg'} width={25} height={36} alt='logo' />

                <div className='relative pb-[55px]'>
                    <div className='flex-1 rounded-[20px] bg-purple-200 p-4 overflow-visible'>
                        <p className='text-black font-secondary text-base tracking-wider opacity-90'>
                            I’m OSO, your creative and helpful collaborator. I have limitations and won’t always get it right, but your feedback will help me improve.
                        </p>

                        <div className=''>
                            <div className="flex justify-start absolute left-0 bottom-0 gap-[15px] items-center w-auto">
                                <div className='border rounded border-gray-30 flex justify-center items-center w-[36px] h-[36px] cursor-pointer' onClick={openThumbUpModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9C22 7.9 21.1 7 20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.58 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20ZM8 8L12.34 3.66L11 9H20V11L17 18H8V8ZM0 8H4V20H0V8Z" fill="#8E33FF" />
                                    </svg>
                                </div>

                                <div className='border rounded border-gray-30 flex justify-center items-center w-[36px] h-[36px] cursor-pointer' onClick={openThumbDownModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 2H6C5.17 2 4.46 2.5 4.16 3.22L1.14 10.27C1.05 10.5 1 10.74 1 11V13C1 14.1 1.9 15 3 15H9.31L8.36 19.57L8.33 19.89C8.33 20.3 8.5 20.68 8.77 20.95L9.83 22L16.42 15.41C16.78 15.05 17 14.55 17 14V4C17 2.9 16.1 2 15 2ZM15 14L10.66 18.34L12 13H3V11L6 4H15V14ZM19 2H23V14H19V2Z" fill="#8E33FF" />
                                    </svg>
                                </div>

                                <div className='border rounded border-gray-30 flex justify-center items-center w-[36px] h-[36px] cursor-pointer' onClick={openReportModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5H14.9L19 9.1V14.9Z" fill="#8E33FF" />
                                        <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#8E33FF" />
                                        <path d="M11 7H13V14H11V7Z" fill="#8E33FF" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 items-start px-4 py-6'>
                <Image src={'/assets/images/logo.svg'} width={25} height={36} alt='logo' />

                <div className='relative pb-[55px]'>
                    <div className='flex-1 rounded-[20px] bg-purple-200 p-4 overflow-visible'>
                        <p className='text-black font-secondary text-base tracking-wider opacity-90'>
                            Report: <span className='text-black'>How to Detect Mobile Devices Using Cloudflare Redirect Rules</span>{' '}
                            <br />
                            <span role='img' aria-label='thinking-face'>
                                🤔
                            </span>{' '}
                            Understanding Mobile Device Detection with Cloudflare Cloudflare provides a feature called Mobile Redirect [1]. This feature allows website owners to automatically redirect mobile device visitors to a mobile-optimized website or subdomain home page [1] [2]. By detecting the user agent string of the visitors device, Cloudflare can determine whether the request is coming from a mobile device and apply the appropriate redirect rule.
                            <br />
                            <span role='img' aria-label='rocket'>
                                🚀
                            </span>{' '}
                            <br />
                            Implementing Mobile Device Detection with Cloudflare

                            To implement mobile device detection using Cloudflare redirect rules, you can follow these steps:

                            1. Log in to your Cloudflare account and select the desired domain.
                            2. Go to the Speed &gt; Optimization &gt; Other section of the Cloudflare dashboard [2].
                            3. Under Mobile Redirect, select the subdomain that you would like to redirect from the dropdown list [2].
                            4. Choose whether to Keep Path or Drop Path in the redirect [2]
                            → Keep Path will redirect all mobile requests to the same resource hosted on your
                            mobile-optimized website [2].
                            5. Save the changes and test the redirect to ensure it is working as expected.
                        </p>

                        <div className=''>
                            <div className="flex justify-start absolute left-0 bottom-0 gap-[15px] items-center w-auto">
                                <div className='border rounded border-gray-30 flex justify-center items-center w-[36px] h-[36px] cursor-pointer' onClick={openThumbUpModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                        <path d="M8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9C22 7.9 21.1 7 20 7H13.69L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.58 6.59C6.22 6.95 6 7.45 6 8V18C6 19.1 6.9 20 8 20ZM8 8L12.34 3.66L11 9H20V11L17 18H8V8ZM0 8H4V20H0V8Z" fill="#8E33FF" />
                                    </svg>
                                </div>

                                <div className='border rounded border-gray-30 flex justify-center items-center w-[36px] h-[36px] cursor-pointer' onClick={openThumbDownModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 2H6C5.17 2 4.46 2.5 4.16 3.22L1.14 10.27C1.05 10.5 1 10.74 1 11V13C1 14.1 1.9 15 3 15H9.31L8.36 19.57L8.33 19.89C8.33 20.3 8.5 20.68 8.77 20.95L9.83 22L16.42 15.41C16.78 15.05 17 14.55 17 14V4C17 2.9 16.1 2 15 2ZM15 14L10.66 18.34L12 13H3V11L6 4H15V14ZM19 2H23V14H19V2Z" fill="#8E33FF" />
                                    </svg>
                                </div>

                                <div className='border rounded border-gray-30 flex justify-center items-center w-[36px] h-[36px] cursor-pointer' onClick={openReportModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5H14.9L19 9.1V14.9Z" fill="#8E33FF" />
                                        <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#8E33FF" />
                                        <path d="M11 7H13V14H11V7Z" fill="#8E33FF" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumb up Modal */}
            <ModalComponent modalIsOpen={modalIsThumbUp} closeModal={closeThumbUpModal}>
                <div>
                    <h3 className='text-lg font-bold font-primary pb-2 w-auto md:w-[400px]'>Whats do you like about the search result?</h3>
                    <div className='relative mt-5 mb-[30px]'>
                        <label for="message" className="absolute left-4 top-[-10px] font-secondary bg-white text-xs text-gray-300 px-[5px] ">Tell us your feedback</label>
                        <textarea
                            className='rounded border h-[112px] border-gray-200 resize-none w-full py-4 pl-6 pr-11 text-sm tracking-wider text-black font-secondary overflow-y-auto focus:outline-none custom-scrollbar'
                        ></textarea>
                    </div>

                    <div className='flex justify-end gap-4'>
                        <CancelModal action={closeThumbUpModal} title="Cancel" />
                        <button className='bg-purple rounded-lg text-white border border-purple font-secondary text-sm font-medium text-center flex items-center justify-center btn-padding-xy'>Submit</button>
                    </div>
                </div>
            </ModalComponent>

            {/* Thumb down Modal */}
            <ModalComponent modalIsOpen={modalIsThumbDown} closeModal={closeThumbDownModal}>
                <div>
                    <h3 className='text-lg font-bold font-primary pb-2 w-auto md:w-[400px]'>What was the issue with the response? How could be improve?</h3>
                    <div className='relative mt-5 mb-[30px]'>
                        <label for="message" className="absolute left-4 top-[-10px] font-secondary bg-white text-xs text-gray-300 px-[5px] ">Tell us your feedback</label>
                        <textarea
                            className='rounded border h-[112px] border-gray-200 resize-none w-full py-4 pl-6 pr-11 text-sm tracking-wider text-black font-secondary overflow-y-auto focus:outline-none custom-scrollbar'
                        ></textarea>
                    </div>

                    <div className='flex justify-end gap-4'>
                        <CancelModal action={closeThumbDownModal} title="Cancel" />
                        <button className='bg-purple rounded-lg text-white border border-purple font-secondary text-sm font-medium text-center flex items-center justify-center btn-padding-xy'>Submit</button>
                    </div>
                </div>
            </ModalComponent>

            {/* Report Modal */}
            <ModalComponent modalIsOpen={modalIsReport} closeModal={closeReportModal}>
                <div>
                    <h3 className='text-lg font-bold font-primary pb-2 w-auto md:w-[400px]'>please be as detailed as possible to aid us in troubleshooting process.</h3>
                    <div className='relative mt-5 mb-[30px]'>
                        <label for="message" className="absolute left-4 top-[-10px] font-secondary bg-white text-xs text-gray-300 px-[5px] ">Tell us more</label>
                        <textarea
                            className='rounded border h-[112px] border-gray-200 resize-none w-full py-4 pl-6 pr-11 text-sm tracking-wider text-black font-secondary overflow-y-auto focus:outline-none custom-scrollbar'
                        ></textarea>
                    </div>

                    <div className='flex justify-end gap-4'>
                        <CancelModal action={closeReportModal} title="Cancel" />
                        <button className='bg-purple rounded-lg text-white border border-purple font-secondary text-sm font-medium text-center flex items-center justify-center btn-padding-xy'>Submit</button>
                    </div>
                </div>
            </ModalComponent>
        </>
    );
};

export default InitialViewUI

import Image from 'next/image'
import React, { useState } from 'react'
import ModalComponent from '@/components/modal/Modal'
import CancelModal from '../modal/CancelModal';

const SidebarFooter = () => {
    const [modalIsLogout, setIsLogout] = useState(false);
    const [modalIsReport, setIsReport] = useState(false);
    const [text, setText] = useState('')

    function handlchange(e) {
        let value = e.target.value;
        setText(value)
    }

    function openLogoutModal() {
        setIsLogout(true);
    }

    function closeLogoutModal() {
        setIsLogout(false);
    }

    function openReportModal() {
        setIsReport(true);
    }

    function closeReportModal() {
        setIsReport(false);
    }

    return (
        <>
            <div className='pr-8'>
                <div className='border-b border-gray-50 pb-4'>
                    <button className='text-xs text-gray-100 font-secondary pr-6'>Clear Search History</button>
                    <button className='text-xs text-purple font-secondary' onClick={openReportModal}>Report issue</button>
                </div>

                <div className='flex items-center gap-3 pt-4'>
                    <div className='w-12 h-12 rounded'>
                        <Image src={'/assets/images/avatar.jpeg'} width={48} height={48} alt='avatar' />
                    </div>

                    <div>
                        <div className='text-xs text-gray-600'>
                            saeidtaheri@gmail.com
                        </div>
                        <button className='text-xs text-purple font-secondary' onClick={openLogoutModal}>Logout</button>
                    </div>

                    <div className="flex-1 pt-4">
                        <div className='flex justify-center items-center gap-4'>
                            <a className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M22.0341 16.6995C22.0561 15.0012 22.9733 13.3943 24.4283 12.5047C23.5104 11.2011 21.9729 10.3746 20.3733 10.3249C18.6672 10.1468 17.0132 11.34 16.1438 11.34C15.2576 11.34 13.919 10.3425 12.4776 10.372C10.5987 10.4324 8.84718 11.4946 7.93309 13.128C5.96814 16.5108 7.43381 21.4825 9.31606 24.217C10.2578 25.556 11.3584 27.0517 12.7985 26.9986C14.2078 26.9405 14.7341 26.105 16.4352 26.105C18.1205 26.105 18.6143 26.9986 20.0837 26.9649C21.5958 26.9405 22.5486 25.62 23.4573 24.2683C24.1339 23.3142 24.6546 22.2598 25 21.144C23.2229 20.3966 22.0361 18.6182 22.0341 16.6995Z" fill="#8E33FF" />
                                    <path d="M19.2587 8.52654C20.0832 7.54231 20.4894 6.27724 20.391 5C19.1314 5.13156 17.9678 5.73022 17.1321 6.67669C16.315 7.60144 15.8897 8.84424 15.9701 10.0727C17.2303 10.0856 18.4691 9.50314 19.2587 8.52654Z" fill="#8E33FF" />
                                </svg>
                            </a>
                            <a className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.326 5.45846L3.41274 0.319586C3.07243 0.116947 2.67525 0 2.25022 0C1.41384 0 0.673645 0.480469 0.286104 1.16551L0.375915 1.25478L8.46565 9.29547L12.326 5.45846ZM0 2.29107V17.71L7.75639 10.0004L0 2.29107ZM0.286531 18.8351C0.67424 19.5198 1.41431 20 2.25022 20C2.66609 20 3.05655 19.8882 3.39139 19.692L3.41798 19.6765L12.3406 14.5569L8.46565 10.7054L0.375919 18.7463L0.286531 18.8351ZM13.2399 14.0408L16.8152 11.9894C17.5209 11.6106 18 10.871 18 10.0181C18 9.17128 17.5273 8.4353 16.8286 8.05529L16.8207 8.04985L13.2237 5.97606L9.17491 10.0004L13.2399 14.0408Z" fill="#8E33FF" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout Modal */}
            <ModalComponent modalIsOpen={modalIsLogout} closeModal={closeLogoutModal}>
                <div>
                    <h3 className='text-lg font-bold font-primary pb-8 w-auto md:w-[400px]'>Are you sure to logout?</h3>
                </div>
                <div className='flex justify-end gap-4'>
                    <CancelModal action={closeLogoutModal} title="Cancel" />
                    <button className='bg-purple rounded-lg text-white border border-purple font-secondary text-sm font-medium text-center flex items-center justify-center btn-padding-xy'>Logout</button>
                </div>
            </ModalComponent>

            {/* Report Modal */}
            <ModalComponent modalIsOpen={modalIsReport} closeModal={closeReportModal}>
                <div>
                    <h3 className='text-lg font-bold font-primary pb-2 w-auto md:w-[400px]'>please be as detailed as possible to aid us in troubleshooting process.</h3>
                    <div className='relative transition-all mt-5 mb-[30px]'>
                        <textarea id='message' value={text}
                            onChange={handlchange}
                            className='transition-all duration-200 p-4 h-[112px] input-text font-secondary font-normal resize-none border-gray-200 border w-full text-base outline-none text-black placeholder-gray-300 rounded peer' />

                        <label
                            htmlFor='message'
                            className={`transition-all duration-300 absolute cursor-text left-4 top-3.5 text-base peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:px-1 z-10 peer-focus:text-gray-300 peer-focus:left-3 peer-focus:text-xs ${text ? "-translate-y-6 bg-white text-gray-300 left-3 text-xs" : null}`}>Tell us more</label>
                    </div>

                    <div className='flex justify-end gap-4'>
                        <CancelModal action={closeReportModal} title="Cancel" />
                        <button className='bg-purple rounded-lg text-white border border-purple font-secondary text-sm font-medium text-center flex items-center justify-center btn-padding-xy'>Submit</button>
                    </div>
                </div>
            </ModalComponent>
        </>
    )
}

export default SidebarFooter
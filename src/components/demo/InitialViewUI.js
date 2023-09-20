import Image from 'next/image';
import React from 'react';

const InitialViewUI = () => {
    return (
        <>
            <div className=''>
                <div className='flex gap-2 items-start px-4 py-6'>
                    <Image src={'/assets/images/logo.svg'} width={25} height={36} alt='logo' />

                    <div>
                        <div className='flex-1 rounded-[20px] bg-purple-200 p-4 overflow-visible'>
                            <p className='text-black font-secondary text-base tracking-wider opacity-90'>
                                I’m OSO, your creative and helpful collaborator. I have limitations and won’t always get it right, but your feedback will help me improve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InitialViewUI

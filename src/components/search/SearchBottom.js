import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions'
import ToggleButton from '../common/ToggleButton';
import { usePathname } from 'next/navigation'
// import { useRouter } from 'next/navigation'

const SearchBottom = () => {
    const [textareaValue, setTextareaValue] = useState('');
    const pathname = usePathname();


    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    return (
        <div className='absolute bottom-0 left-0 w-full pb-10 px-4'>
            {/* Suggestions */}
            {pathname === "/search" &&
                <Suggestions />
            }

            {/* Search Input */}
            <div className='flex gap-4 '>
                {/* Toggle Button */}
                <ToggleButton />

                <div className='relative flex w-full flex-1'>
                    <textarea
                        placeholder='Search anything.'
                        value={textareaValue}
                        onChange={handleTextareaChange}
                        className='rounded border border-gray-200 resize-none w-full py-4 pl-6 pr-11 text-base tracking-wider text-black font-secondary h-14 overflow-y-hidden placeholder:text-gray-500 focus-visible:outline-none focus:border-purple active:border-purple group'
                    ></textarea>
                    <button className='absolute right-4 bottom-4' disabled={!textareaValue}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="24" width="24" height="24" rx="4" transform="rotate(90 24 0)" className={`fill-${textareaValue ? 'purple' : 'org'}`} />
                            <path d="M13 20L13 7.83L18.59 13.42L20 12L12 4L4 12L5.41 13.41L11 7.83L11 20L13 20Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBottom
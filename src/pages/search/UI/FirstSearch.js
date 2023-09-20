'use client'
import Conservation from '@/components/search/Conservation'
import SearchBottom from '@/components/search/SearchBottom'
import Warning from '@/components/search/Warning'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

export default function FirstSearch() {
    return (
        <div className='overflow-hidden w-full h-screen relative flex z-0'>
            <Sidebar />
            <div className='relative flex h-full max-w-full flex-1 overflow-hidden'>
                <main className='relative h-full w-full transition-width overflow-auto flex-1'>
                    <div className='mx-auto max-w-[934px] w-full h-full relative'>
                        <div className='py-10 pt-0 relative top-[45px] h-[79%] overflow-auto custom-scrollbar'>
                            <Conservation />
                            <Warning />
                        </div>
                        <SearchBottom />
                    </div>
                </main>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    return {
        props: {}
    }
}
'use client'
import Sidebar from '@/components/sidebar/Sidebar'
import InitialViewUI from '@/components/demo/InitialViewUI'
import SearchBottom from '@/components/search/SearchBottom'
import React from 'react'
import { useSidebar } from '@/context/SidebarContext'

export default function Search() {
    const { isSidebarOpen } = useSidebar();
    return (
        <>
            <div className='overflow-hidden w-full h-screen relative flex'>
                <Sidebar />
                <div className='relative flex h-full max-w-full flex-1 overflow-hidden'>
                    <main className='relative h-full w-full transition-width overflow-auto flex-1'>
                        <div className='mx-auto max-w-[934px] w-full h-full relative opacity-1 md:bg-opacity-80'>
                            <div className='py-10'>
                                <InitialViewUI />
                            </div>
                            <SearchBottom />
                        </div>
                    </main>
                </div>
            </div>
            {isSidebarOpen &&
                <div className='w-full h-full absolute left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 z-0 md:hidden'></div>
            }
        </>
    )
}

export const getServerSideProps = async () => {
    return {
        props: {}
    }
}
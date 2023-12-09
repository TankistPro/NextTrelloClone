'use client';

import React from 'react'

import Header from '@/components/Header/Header'
import AsideMenu from '@/components/AsideMenu/AsideMenu';
import AllBoards from '@/components/AllBoards/AllBoards';

import './dashboardPage.scss'

const page = () => {
  return (
    <div className='bg-[#1d2125] h-screen w-full'>
      <Header />
      <main>
        <div className='wrapper'>
            <AsideMenu />
            <div className="section-render">
                <AllBoards />
            </div>
        </div>
      </main>
    </div>
  )
}

export default page
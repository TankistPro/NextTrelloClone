'use client'
import React from 'react'
import Image from 'next/image';

import './AllBoards.scss';

const AllBoards = () => {
  return (
    <div className='all-boards'>
        <section>
            <h3>ВАШИ РАБОЧИЕ ПРОСТРАНСТВА</h3>
            <div className='board-list'>
                <div className="board-item"></div>
                <div className="board-item"></div>
                <div className="board-item"></div>
                <div className="board-item"></div>
            </div>
        </section>
        <section className='guest-boards'>
            <h3>ГОСТЕВЫЕ РАБОЧИЕ ПРОСТРАНСТВА</h3>
            <div className='board-list'>
                <div className='board-wrapper'>
                    <span className='title'>
                        <Image src="/microsoftteams.svg" style={{ clipPath: "#b6c2cf" }} width="24" height="24" alt="guest-board"/>
                        <p className=''>BEYOND Studio</p>
                    </span>
                    <div className="board-item"></div>
                </div>
                <div className='board-wrapper'>
                    <span className='title'>
                        <Image src="/microsoftteams.svg" style={{ clipPath: "#b6c2cf" }} width="24" height="24" alt="guest-board"/>
                        <p className=''>FTOYD Arena Co.</p>
                    </span>
                    <div className="board-item"></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AllBoards;

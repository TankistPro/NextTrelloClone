import React, { FC } from "react";

import InputUI from "@/components/ui/InputUI/InputUI";

import './header.scss'

const Header: FC = () => {
  return (
    <header className="h-[3rem] w-full border-b-[1px] border-[hsla(211,18%,68%,0.16)] pl-[0.8rem] pr-[0.8rem] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="h-[1rem] cursor-pointer">
          <img
            className="h-full text-[hsla(211,18%,68%,0.16)]"
            src="https://trello.com/assets/d947df93bc055849898e.gif"
            alt=""
          />
        </div>
        <div className="left">
          <div className="search">
            <svg width="16" height="16" viewBox="0 0 24 24" role="presentation">
              <path
                d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <InputUI
              type="text"
              className="bg-[#22272B] border-[hsla(211,18%,68%,0.16)] border-[1px] rounded outline-none text-[#8C9BAB] text-sm pt-[2px] pb-[2px] pl-[30px] pr-12px]"
            />
          </div>
          <div className="avatar">
            <img src="https://trello-members.s3.amazonaws.com/5e611c6481222d8946c6c2a3/721e5bfec52e285d983a99cac906c688/30.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client';

import React, { FC } from "react";
import { useRouter } from 'next/navigation'

import InputUI from "@/components/ui/InputUI/InputUI";
import ButtonUI from "@/components/ui/ButtonUI/ButtonUI";
import SocialButtonUI from "@/components/ui/SocialButtonUI/SocialButtonUI";

import "./loginPage.scss";

const LoginPage: FC = () => {

  const router = useRouter();

  return (
    <div className="login-page h-screen w-full flex justify-center items-center">
      <div className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.1)] w-[25rem] rounded">
        <div className="p-10 gap-3 flex flex-col">
          <div className="flex items-center flex-col">
            <span>
              <img src="assets/trello.svg" alt="" />
            </span>
            <p className="mt-[1.5rem] font-semibold text-[#172b4d]">
              Войдите, чтобы продолжить
            </p>
          </div>
          <div className="flex text-sm flex-col gap-3 mt-4">
            <InputUI
              type="text"
              placeholder="Введите адрес электронной почты"
            />
            <InputUI type="password" placeholder="Введите пароль" />
            <ButtonUI text="Продолжить" onClick={(e) => router.push('/dashboard', { scroll: false }) } />
          </div>
          <div>
            <p className="text-[#172b4d] text-center mb-3 text-sm ">
              Или продолжить с помощью:
            </p>
            <SocialButtonUI
              text="Google"
              linkimg="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.519/google-logo.5867462c.svg"
              redirectref="#"
            />
            
          </div>
          <div className="flex text-sm justify-between text-[#0052cc]">
            <p className="cursor-pointer hover:underline">
              Не удается войти в систему?
            </p>
            <p className="cursor-pointer hover:underline">Создать аккаунт</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
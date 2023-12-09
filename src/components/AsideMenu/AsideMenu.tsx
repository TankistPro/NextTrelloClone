import React from "react";

import './asideMenu.scss';

const AsideMenu = () => {
  return (
    <aside className="aside">
      <div className="aside-nav">
        <span className="aside-link active">
          <img src="" alt="" />
          <p>Доски</p>
        </span>
        <span className="aside-link">
          <p>Шаблоны</p>
        </span>
        <span className="aside-link">
          <p>Главная страница</p>
        </span>
        <div className="line"></div>
      </div>
    </aside>
  );
};

export default AsideMenu;

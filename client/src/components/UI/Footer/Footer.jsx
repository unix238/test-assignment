import React from "react";
import cl from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={cl["footer"]}>
      <div className='wrapper'>
        тестовое задание
        <div className={cl["link"]}>
          <a target='_blank' rel='noreferrer' href='https://github.com/unix238'>
            https://github.com/unix238
          </a>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import './Main.scss';
import NewsItem from '../../components/NewsItem/NewsItem';
import LastMaterialItem from '../../components/LastMaterialItem/LastMaterialItem';

const Main = () => {
  return (
    <main>
      <div className="lastNews">
        <div className="lastNewsHeader">
          <h2>Новости</h2>
          <span>
            Посмотреть все
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path
                  d="M9.0003 6.10321C7.40207 6.10321 6.10352 7.40177 6.10352 8.99999C6.10352 10.5982 7.40207 11.8968 9.0003 11.8968C10.5985 11.8968 11.8971 10.5982 11.8971 8.99999C11.8971 7.40177 10.5985 6.10321 9.0003 6.10321ZM8.78054 8.14095C8.42094 8.14095 8.12127 8.44061 8.12127 8.80021H7.16234C7.18232 7.90121 7.90152 7.18201 8.78054 7.18201V8.14095Z"
                  fill="#7F7F7F"
                />
                <path
                  d="M17.7902 8.40068C16.8113 7.18203 13.3152 3.20645 9 3.20645C4.68479 3.20645 1.18868 7.18203 0.209767 8.40068C-0.0699223 8.7403 -0.0699223 9.23975 0.209767 9.59935C1.18868 10.818 4.68479 14.7936 9 14.7936C13.3152 14.7936 16.8113 10.818 17.7902 9.59935C18.0699 9.25973 18.0699 8.76028 17.7902 8.40068ZM9 13.1954C6.68258 13.1954 4.80466 11.3174 4.80466 9.00002C4.80466 6.68259 6.68258 4.80468 9 4.80468C11.3174 4.80468 13.1953 6.68259 13.1953 9.00002C13.1953 11.3174 11.3174 13.1954 9 13.1954Z"
                  fill="#7F7F7F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <NewsItem name="Результаты BestGroup 2020" date="21.01.2021" />
        <NewsItem name="Карантин" date="21.02.2021" />
        <div className="lastMaterial">
          <h2>Последние матереалы</h2>
          <LastMaterialItem material="Лекция 2" date="12.01.2021" course="ООП" />
          <LastMaterialItem
            material="Практика 4"
            date="11.01.2021"
            course="Управление проектами в IT"
          />
        </div>
        <div className="contacts">
          <h2>Нужна помощь ?</h2>
          <a className="contactItem" href="/">
            <span>Telegram</span>
          </a>
          <a className="contactItem" href="/">
            <span>E-mail</span>
          </a>
          <a className="contactItem" href="/">
            <span>Горячая линия</span>
          </a>
          <a className="contactItem" href="/">
            <span>FAQ</span>
          </a>
        </div>
      </div>
    </main>
  );
};
export default Main;

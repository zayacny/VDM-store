import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="App-footer-nav">
        <li className="App-footer-list-item">
          <a href="/#">Главная</a>
        </li>
        <li className="App-footer-list-item">
          <a href="/#">ТОП-250</a>
        </li>
        <li className="App-footer-list-item">
          <a href="/#">Новинки</a>
        </li>
        <li className="App-footer-list-item">
          <a href="/#">Актеры</a>
        </li>
        <li className="App-footer-list-item">
          <a href="/#">Режиссеры</a>
        </li>
        <li className="App-footer-list-item">
          <a href="/#">Помощь</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

import { FbIcon, InstaIcon, TgIcon } from "../../assets/icons";
import "./style.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="logo">LOGO</div>
        <ul>
          <li>
            <a href="#">Филиалы</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <div></div>
      </div>
      <div className="bottom">
        <p>©Udevs 2020 - 2022 All rights reserved</p>
        <div className="socials">
          <InstaIcon />
          <FbIcon />
          <TgIcon />
        </div>
      </div>
    </footer>
  );
};

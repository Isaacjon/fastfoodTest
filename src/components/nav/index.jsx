import {
  ArrowDownIcon,
  CartIcon,
  LocationIcon,
  MobileMenuIcon,
  RusFlagIcon,
} from "../../assets/icons";
import { CButton } from "../button";
import "./nav.scss";

export const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="mobile-menu-icon">
          <MobileMenuIcon />
        </div>
        <div className="logo">LOGO</div>

        <ul className="nav-menu">
          {navLinks?.map((link) => {
            return (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-cart-icon">
          <CButton
            content={<CartIcon />}
            variant="lightSkyBlue"
            type="button"
            circle={true}
          />
        </div>
      </div>

      <div className="right">
        <div className="delivery">
          <div className="delivery-icon">
            <CButton
              content={<LocationIcon />}
              variant="lightSkyBlue"
              type="button"
              circle={true}
            />
          </div>
          <div className="delivery-text">
            <p className="delivery-title">Достафка или Заказ с собой</p>
            <p className="delivery-subtitle">Выберите способ получения</p>
          </div>
        </div>

        <div className="cart-icon">
          <CButton
            content={<CartIcon />}
            variant="lightSkyBlue"
            type="button"
            circle={true}
          />
        </div>
        <div className="lang-icon">
          <CButton
            variant="lightSkyBlue"
            type="button"
            content={
              <div className="flex" style={{ gap: "5px" }}>
                <RusFlagIcon />
                <ArrowDownIcon />
              </div>
            }
          />
        </div>
        <div className="login">
          <CButton content={"Войти"} variant="lightSkyBlue" type="button" />
        </div>
      </div>
    </nav>
  );
};

const navLinks = ["Меню", "Филиалы", "O нас", "Контакты"];

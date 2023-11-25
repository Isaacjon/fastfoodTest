import { useState } from "react";
import { CButton } from "../button";
import "./styles.scss";

export const CategoryNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="horizontal-scroll">
      <div className="category-nav">
        {categories.map((item, idx) => {
          return (
            <CButton
              onClick={() => setActiveIndex(idx)}
              className={activeIndex == idx ? "active" : ""}
              key={item}
              content={item}
              variant="skyBlue"
              type="button"
            />
          );
        })}
      </div>
    </div>
  );
};

const categories = [
  "Пицца",
  "Паста",
  "Закуски",
  "Синнамон-роллы",
  "Напитки",
  "Гарниры",
  "Соус",
  "Салаты",
  "Еще",
];

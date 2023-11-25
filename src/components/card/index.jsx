/* eslint-disable react/prop-types */
import { useState } from "react";
import { CButton } from "../button";
import { CounterBtn } from "../counterBtn";

import "./style.scss";
export const Card = ({ title, desc, price, img, disabled }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <article className="card">
      {disabled && <div className="overlay"></div>}

      <div className="card-img">
        <img width={287} height={220} src={img} alt={title} />
      </div>
      <h4 className="card-title">{title}</h4>
      <h5 className="card-subtitle">{desc}</h5>
      <div className="card-footer">
        <span className="price">
          <b>{price}</b> сум
        </span>

        {!counter && (
          <CButton
            variant="deepBlue"
            content={disabled ? "Недоступно" : "Добавить"}
            disabled={disabled}
            onClick={increment}
          />
        )}

        {!!counter && <CounterBtn counter={counter} setCounter={setCounter} />}
      </div>
    </article>
  );
};

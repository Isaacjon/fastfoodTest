/* eslint-disable react/prop-types */
import { CButton } from "../button";
import { MinusIcon, PlusIcon } from "../../assets/icons";
import "./style.scss";

export const CounterBtn = ({ counter, setCounter = () => {} }) => {
  //
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const renderCounterBtn = () => {
    return (
      <div className="counterContent">
        <div className="minus" onClick={decrement}>
          <MinusIcon />
        </div>
        <span>{counter}</span>
        <div className="plus" onClick={increment}>
          <PlusIcon />
        </div>
      </div>
    );
  };

  return <CButton variant="counterBtn" content={renderCounterBtn()} />;
};

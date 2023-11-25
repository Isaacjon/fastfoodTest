/* eslint-disable react/prop-types */
import "./style.scss";

export const CButton = ({
  circle,
  content,
  type = "button",
  variant = "lightSkyBlue",
  className,
  disabled,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`cbutton ${variant} ${circle ? "circle" : ""}${
        disabled ? "disabled" : ""
      } ${className}`}
    >
      <button disabled={disabled} type={type}>
        {content}
      </button>
    </div>
  );
};

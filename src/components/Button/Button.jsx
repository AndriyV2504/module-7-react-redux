import clsx from "clsx";
import css from "./Button.module.css";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherPrors
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherPrors}
    >
      {children}
    </button>
  );
};

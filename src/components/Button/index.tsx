import React, { FC } from "react";
import "./styles.css";

type Props = {
  onClick: () => void;
  title: string;
}

const Button = (props: Props) => {
  const {onClick, title} = props
  return (
    <button onClick={onClick} className="button">
      {title}
    </button>
  );
};

export default Button;
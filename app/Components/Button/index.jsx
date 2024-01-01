import React from "react";
const Button = ({ text, Icon, outline }) => {
  return (
    <button
      className={`flex ${
        outline
          ? "border-2 border-secondary hover:bg-secondary/30 text-secondary"
          : "bg-secondary border-2 border-secondary hover:bg-secondary/80 text-white"
      } w-full justify-center transition-colors duration-200  text-lg font-semibold rounded-lg px-4 py-2 items-center gap-4`}>
      <span>{text}</span> {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;

import React from "react";
import classNames from "classnames";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string | string[];
}

export function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={classNames('text-emerald-600 font-bold hover:font-black',className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}


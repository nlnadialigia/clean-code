import {ReactNode} from "react";

interface InputProps {
  label?: string;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  errorMessage?: string
}

export function Input({label, icon = null, leftIcon = null, errorMessage}: InputProps) {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      {leftIcon}
      <input type="text" />
      {icon}

      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  )
}
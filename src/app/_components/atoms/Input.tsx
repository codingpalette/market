'use client'

import {useState} from "react";


interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  disabled?: boolean;
  isReadOnly?: boolean;
  color?: 'default' | 'primary'  | 'success' | 'warning' | 'danger';
  fullWidth?: boolean;
  type?: 'text' | 'password' | 'number';
  style?: React.CSSProperties;
  className?: string;
}

const sizeClasses = {
  sm: 'text-xs py-1 px-2',
  md: 'text-sm py-2 px-4',
  lg: 'text-lg py-3 px-6',
};

const colorClasses = {
  default: 'border-neutral-700 focus:border-neutral-500',
  primary: 'bg-white text-black hover:bg-neutral-300',
  success: 'border-green-700 focus:border-green-500',
  warning: 'border-yellow-700 focus:border-yellow-500',
  danger: 'border-red-700 focus:border-red-500'
};

export default function Input({
  value,
  onChange, size = 'md',
  color = 'default',
  placeholder,
  isReadOnly,
  fullWidth,
  type = 'text',
  style,
  className,
  disabled
}: InputProps) {
  const [internalValue, setInternalValue] = useState("");

  const inputClass = `
    rounded-md border bg-black focus:outline-none
    ${colorClasses[color]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;


  const isControlled = value !== undefined && onChange !== undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isControlled && onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  const inputValue = isControlled ? value : internalValue;


  return (
    <>
      <input
        type={type}
        className={inputClass}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={isReadOnly}
        disabled={disabled}
        style={style}
      />
    </>
  )
}

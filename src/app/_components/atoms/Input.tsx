'use client'

import {useState} from "react";


export interface InputProps {
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
  maxLength?: number;
  id?: string;
}

const sizeClasses = {
  sm: 'text-xs py-1 px-2',
  md: 'text-sm py-2 px-4',
  lg: 'text-lg py-3 px-6',
};

const colorClasses = {
  default: 'border-neutral-600 focus:border-neutral-500',
  primary: 'bg-white text-black hover:bg-neutral-300',
  success: 'border-green-700 focus:border-green-500',
  warning: 'border-yellow-700 focus:border-yellow-500',
  danger: 'border-red-700 focus:border-red-500'
};

/**
 * @param {string} value - 인풋 값
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - 인풋 값 변경 이벤트 핸들러
 * @param {'sm' | 'md' | 'lg'} size - 인풋 크기
 * @param {string} placeholder - 인풋 placeholder
 * @param {boolean} disabled - 인풋 disabled
 * @param {boolean} isReadOnly - 인풋 readOnly
 * @param {'default' | 'primary' | 'success' | 'warning' | 'danger'} color - 인풋 색상
 * @param {boolean} fullWidth - 인풋 width 100%
 * @param {'text' | 'password' | 'number'} type - 인풋 타입
 * @param {React.CSSProperties} style - 인풋 인라인 스타일
 * @param {string} className - 인풋 클래스 이름
 * @param {number} maxLength - 인풋 최대 길이
 * @param {string} id - 인풋 id
 * */

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
  disabled,
  maxLength,
  id,
}: InputProps) {
  const [internalValue, setInternalValue] = useState("");

  const inputClass = `
    rounded-md border bg-black focus:outline-none
    ${colorClasses[color]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
    ${disabled ? 'cursor-not-allowed' : ''}
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
        maxLength={maxLength}
        id={id}
      />
    </>
  )
}

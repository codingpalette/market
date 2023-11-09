

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void; // 클릭 이벤트 핸들러
  // color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'; // 색상 옵션
  color?: 'default' | 'primary' | 'danger'; // 색상 옵션
  size?: 'small' | 'medium' | 'large'; // 크기 옵션
  className?: string; // 선택적 CSS 클래스 이름
  disabled?: boolean; // 버튼 비활성화 상태
}

const colorClasses = {
  default: 'bg-neutral-950 text-zinc-50 border border-neutral-800 hover:bg-neutral-900',
  primary: 'bg-white text-black hover:bg-neutral-300',
  // success: 'bg-green-500 text-white',
  // warning: 'bg-yellow-500 text-white',
  danger: 'bg-red-600 text-black hover:bg-red-500'
};

const sizeClasses = {
  small: 'text-xs py-1 px-2',
  medium: 'text-sm py-2 px-4',
  large: 'text-lg py-3 px-6',
};

export default function Button({children, onClick, color = 'default', size = 'medium', className, disabled}: ButtonProps) {

  const buttonClasses = `
    rounded-md transition-background-color duration-200  
    ${colorClasses[color]}
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <>
      <button className={buttonClasses} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  )
}

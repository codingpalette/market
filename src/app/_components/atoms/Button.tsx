import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


// Button 컴포넌트 내부에 추가합니다.
const spinnerClasses = 'inline-block mr-2 w-4 h-4 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void; // 클릭 이벤트 핸들러
  // color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'; // 색상 옵션
  color?: 'default' | 'primary' | 'danger'; // 색상 옵션
  size?: 'small' | 'medium' | 'large'; // 크기 옵션
  className?: string; // 선택적 CSS 클래스 이름
  disabled?: boolean; // 버튼 비활성화 상태
  isLoading?: boolean; // 로딩 상태
  isIconOnly?: boolean; // 아이콘만 표시
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

/**
 * @param {React.ReactNode} children - 버튼 안에 들어갈 내용
 * @param {() => void} onClick - 클릭 이벤트 핸들러
 * @param {'default' | 'primary' | 'success' | 'warning' | 'danger'} color - 색상 옵션
 * @param {'small' | 'medium' | 'large'} size - 크기 옵션
 * @param {string} className - 선택적 CSS 클래스 이름
 * @param {boolean} disabled - 버튼 비활성화 상태
 * @param {boolean} isLoading - 로딩 상태
 * @param {boolean} isIconOnly - 아이콘만 표시
 * */
export default function Button({children, onClick, color = 'default', size = 'medium', className = '', disabled, isLoading, isIconOnly}: ButtonProps) {

  const buttonClasses = `
    rounded-md transition-background-color duration-200  
    ${colorClasses[color]}
    ${sizeClasses[size]}
    ${className}
    ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
    ${isIconOnly ? 'rounded-full px-0 py-0 w-[40px] h-[40px] flex items-center justify-center' : ''}
  `;

  return (
    <>
      <button className={buttonClasses} onClick={onClick} disabled={disabled}>
        {isLoading && <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 inline-block mr-2 animate-spin" />}
        {children}
      </button>
    </>
  )
}

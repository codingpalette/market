import { useState, useEffect, RefObject, Dispatch, SetStateAction } from 'react';

export const useDetectOutsideClick = (
  el: RefObject<HTMLElement>,
  initialState: boolean,
  toggleButtonRef: RefObject<HTMLElement>
) : [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // 드롭다운과 토글 버튼 외부를 클릭했는지 확인
      if (isActive && el.current && !el.current.contains(e.target as Node) && !toggleButtonRef.current?.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    // 이벤트 리스너를 항상 추가
    window.addEventListener('click', onClick);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el, toggleButtonRef]); // 의존성 배열에 isActive 추가

  return [isActive, setIsActive];
};

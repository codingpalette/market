import {useState, useEffect, RefObject} from 'react';

interface useDetectOutsideClickProps {
  el: RefObject<HTMLElement> | null; // HTMLElement 혹은 다른 요소 타입으로 지정 가능
  initialState: boolean;
}


export const useDetectOutsideClick = ({el, initialState}: useDetectOutsideClickProps) => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    const onClick = (e: any) => {
      // If the active element exists and is clicked outside of
      if (el?.current !== null && !el?.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

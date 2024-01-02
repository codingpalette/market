import {useEffect, useRef, useState} from "react";
import Button from "@/app/_components/atoms/Button";
import {useDetectOutsideClick} from "@/hooks/useDetectOutsideClick";
import MenuList, {MenuListProps} from "@/app/_components/atoms/MenuList";

interface DropdownMenuProps extends MenuListProps{
  active?: boolean;
  position?: 'left' | 'right';
  boxWidth?: string;
  triggerTitle?: string;
}

export default function DropdownMenu({active, position = 'left', boxWidth = '250px', triggerTitle = '메뉴', ...MenuListProps}: DropdownMenuProps) {


  const dropDownBoxClasses = `
    absolute w-full mt-2 z-10
    ${position === 'left' ? 'left-0' : 'right-0'} 
  `;

  const dropdownRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false, toggleButtonRef);
  const toggleDropdown = () => setIsActive(!isActive);

  useEffect(() => {
    console.log('isActive', isActive)
  }, [isActive]);

  const items = [
    {
      key: 1,
      label: '메뉴1',
      onClick: () => console.log('메뉴1')
    },
    {
      key: 2,
      label: '메뉴2',
      onClick: () => console.log('메뉴2')
    },
    {
      key: 3,
      label: '메뉴3',
      onClick: () => console.log('메뉴3')
    },
  ]


  return (
    <>
      <div className="relative">
        <Button ref={toggleButtonRef} onClick={toggleDropdown}>{triggerTitle}</Button>
        {isActive && (
          <>
            <div ref={dropdownRef} className={dropDownBoxClasses} style={{width: boxWidth}}>
              <MenuList {...MenuListProps}  />
            </div>
          </>
        )}
      </div>

    </>
  )
}

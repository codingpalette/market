import {useRef, useState} from "react";
import Button from "@/app/_components/atoms/Button";
import {useDetectOutsideClick} from "@/hooks/useDetectOutsideClick";

interface DropdownMenuProps {
  active?: boolean;
}

export default function DropdownMenu({active}: DropdownMenuProps) {

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick({el: dropdownRef, initialState: false});
  const [aa, setAa] = useState(false)

  const onClick = () => setAa(!isActive);

  return (
    <>
      <Button onClick={onClick}>클릭</Button>
      {isActive && (
        <>
          <div ref={dropdownRef}>1111</div>
        </>
      )}
    </>
  )
}

import ImageBox from "@/app/_components/atoms/ImageBox";
import DropdownMenu from "@/app/_components/molecules/DropdownMenu";

interface ItemCardProps {
  children?: React.ReactNode;
  className?: string; // 선택적 CSS 클래스 이름
}

export default function ItemCard({children, className}: ItemCardProps) {

  const itemCardClasses = `
    bg-neutral-950 p-3 border border-neutral-800 rounded-md flex gap-4
    ${className}
  `

  return (
    <>
      <div className={itemCardClasses}>
        <ImageBox rounded />
        <div className="flex-1">
          <h3>타이틀</h3>
          <p>설명......</p>
        </div>
        <div>
          <DropdownMenu />
        </div>
      </div>
    </>
  )
}

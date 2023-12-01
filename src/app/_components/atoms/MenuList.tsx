
interface itemsProps {
  key: string | number;
  label: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined
  disabled?: boolean;
}

interface MenuListProps {
  items?: itemsProps[];
}

/**
 * @param {itemsProps[]} items - 메뉴 아이템 배열
 * @param {string | number} items.key - 메뉴 아이템 키
 * @param {React.ReactNode} items.label - 메뉴 아이템 라벨
 * @param {() => void} items.onClick - 메뉴 아이템 클릭 이벤트 핸들러
 * @param {boolean} items.disabled - 메뉴 아이템 비활성화 상태
 * */

export default function MenuList({items}: MenuListProps) {


  return (
    <>
      <div className="p-2 rounded-md bg-neutral-950 border border-neutral-800 text-sm">
        <ul className="">
          {items?.map((v , i) => {
            const liClasses = `
              p-2 rounded-md hover:bg-neutral-900 
              ${v.disabled ? 'opacity-50 cursor-auto' : 'cursor-pointer'}
            `
            return (
              <li key={v.key} className={liClasses} onClick={!v.disabled ? v.onClick : undefined}>{v.label}</li>
            )
          })}
          {/*<li className="p-2 rounded-md hover:bg-neutral-900">111</li>*/}
          {/*<li className="p-2 rounded-md hover:bg-neutral-900">111</li>*/}
          {/*<li className="p-2 rounded-md hover:bg-neutral-900">111</li>*/}
        </ul>
      </div>
    </>
  )
}

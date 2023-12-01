'use client'

import Header from "@/app/_components/organisms/Header";
import Card from "@/app/_components/organisms/Card";
import ItemCard from "@/app/_components/molecules/ItemCard";
import MenuList from "@/app/_components/atoms/MenuList";


export default function MainPage() {

  const testClick = () => {
    console.log('test')
  }

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="block">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <span>1111</span>
      ),
      disabled: true,
      onClick: testClick,
    },
    {
      key: '3',
      label: (
        <span>1111</span>
      ),
      onClick: testClick,
    }
  ]

  return (
    <>
      <Header />
      <div style={{width: '400px'}}>
        <ItemCard />
      </div>
      <div>
        <MenuList items={items} />
      </div>
      <Card />
    </>
  )
}

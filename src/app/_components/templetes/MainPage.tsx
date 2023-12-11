'use client'

import Header from "@/app/_components/organisms/Header";
import Card from "@/app/_components/organisms/Card";
import ItemCard from "@/app/_components/molecules/ItemCard";
import MenuList from "@/app/_components/atoms/MenuList";
import Modal from "@/app/_components/molecules/Modal";
import Button from "@/app/_components/atoms/Button";
import {useState} from "react";


export default function MainPage() {

  const testClick = () => {
    console.log('test')
  }

  const [active, setActive] = useState(false)

  const modalOpen = () => {
    console.log('33333')
    setActive(true)
  }

  const modalClose = () => {
    console.log('44444')
    setActive(false)
  }

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="" className="block">
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
      {/*<div style={{width: '400px'}}>*/}
      {/*  <ItemCard />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <MenuList items={items} />*/}
      {/*</div>*/}
      {/*<Card />*/}

      <Button onClick={modalOpen}>오픈</Button>

      <Modal title="모달 타이틀" open={active} onClose={modalClose}>
      </Modal>
    </>
  )
}

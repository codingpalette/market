'use client'

import Header from "@/app/_components/organisms/Header";
import Card from "@/app/_components/organisms/Card";
import ItemCard from "@/app/_components/molecules/ItemCard";
import MenuList from "@/app/_components/atoms/MenuList";
import Modal from "@/app/_components/molecules/Modal";
import Button from "@/app/_components/atoms/Button";
import {useEffect, useState} from "react";
import Link from "next/link";
import Input from "@/app/_components/atoms/Input";
import FromInput from "@/app/_components/molecules/FormInput";
import useToastStore from "@/stores/toastStore";


interface MainPageProps {
  aa?: any
}

export default function MainPage({aa}: MainPageProps) {

  const { addToast } = useToastStore()

  useEffect(() => {
    console.log('aa', aa)
  }, [aa])

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

  function onClickToast() {
    addToast({
      type: 'success',
      message: '안녕!',
      position: 'top-right'
    })
  }

  function onClickToast2() {
    addToast({
      type: 'error',
      message: '안녕ㄴㅇㄹㄴㅇㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇsadaasdasdasdasdsadsa!',
      position: 'bottom-center'
    })
  }



  return (
    <>
      {/*<div style={{width: '400px'}}>*/}
      {/*  <ItemCard />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <MenuList items={items} />*/}
      {/*</div>*/}
      {/*<Card />*/}

      <div>
        <Button onClick={onClickToast}>toast</Button>
        <Button onClick={onClickToast2} color="danger">toast2</Button>
      </div>


      <div>
        <Link href='/'>Home</Link>
      </div>
      <div>
        <Link href='/about'>about</Link>
      </div>

      <Button onClick={modalOpen}>오픈</Button>
      {aa.map((v: any) => {
        return (
          <div key={v.user_id}>
            {v.user_nickname}
          </div>
        )
      })}
      <Modal
        title="모달 타이틀"
        open={active}
        onClose={modalClose}
      >
      </Modal>
    </>
  )
}

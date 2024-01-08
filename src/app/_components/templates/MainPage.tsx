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
import { useSession, signIn, signOut } from "next-auth/react"
import {useRouter} from "next/navigation";
import DropdownMenu from "@/app/_components/molecules/DropdownMenu";
import ContentBox from "@/app/_components/atoms/ContentBox";
import SearchInput from "@/app/_components/molecules/SearchInput";
import SectionBox from "@/app/_components/atoms/SectionBox";
import PostCard from "@/app/_components/molecules/PostCard";


interface MainPageProps {
  aa?: any
}

export default function MainPage({aa}: MainPageProps) {
  const { data: session } = useSession();

  const router = useRouter();

  const { addToast } = useToastStore()

  const [active, setActive] = useState(false)

  const modalOpen = () => {
    console.log('33333')
    setActive(true)
  }

  const modalClose = () => {
    console.log('44444')
    setActive(false)
  }


  async function logOut() {
    console.log('logout')
    await signOut({
      redirect: false,
    });
    router.push('/')

  }



  return (
    <>
      <ContentBox>
        <SectionBox>
          <SearchInput />
        </SectionBox>
        <SectionBox>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <PostCard imageUrl="https://velog.velcdn.com/images/sehyunny/post/9a074eca-4274-4f46-8970-62b73fa5243e/image.png" />
            <PostCard />
            <PostCard />
          </div>
          {/*<ItemCard />*/}
        </SectionBox>
      </ContentBox>

    </>
  )
}

'use client'


import Header from "@/app/_components/organisms/Header";
import Link from "next/link";
import Button from "@/app/_components/atoms/Button";
import {userCreate} from "@/actions/userAction";


export default function Page() {

  async function createUser(formData: any) {
    console.log('1111')
    try {
      // await userCreate(formData)
      console.log('작성 성공')

    } catch (e) {

      console.log('222222')
    }

  }

  return (
    <>
      <Header />
      <div>
        <Link href='/'>Home</Link>
      </div>
      <div>
        <Link href='/about'>about</Link>
      </div>

      <form action={userCreate}>
        <input type="text" name="user_nickname" placeholder="유저 닉네임" style={{color: 'black'}} />
        <Button type="submit">추가</Button>
      </form>
    </>
  )
}

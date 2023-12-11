'use client'

import Button from "@/app/_components/atoms/Button";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-regular-svg-icons'
import {loginAction} from "@/actions/userAction";
import { useTransition } from 'react';



export default function HeaderTop() {
  let [isPending, startTransition] = useTransition();


  return (
    <>
      <div className="flex items-center justify-between px-6 h-[64px]">
        <div>
          <Link href="/">
            {/*<a className="text-2xl font-bold">LOGO</a>*/}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className="flex gap-2">
          <Button>
            <FontAwesomeIcon icon={faBell} />
          </Button>
          <Button onClick={() => startTransition(() => loginAction())}>로그인</Button>
          {/*<Button>로그인</Button>*/}
          <Button color="primary">회원가입</Button>
        </div>
      </div>
    </>
  )
}

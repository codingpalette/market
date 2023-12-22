'use client'

import Button from "@/app/_components/atoms/Button";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-regular-svg-icons'
import {loginAction} from "@/actions/userAction";
import {useState, useTransition} from 'react';
import Modal from "@/app/_components/molecules/Modal";



export default function HeaderTop() {
  let [isPending, startTransition] = useTransition();

  // 로그인 모달 상태값
  const [loginModalActive, setLoginModalActive] = useState(false);
  // 로그인 모달 열기
  function openLoginModal() {
    setLoginModalActive(true);
  }
  // 로그인 모달 닫기
  function closeLoginModal() {
    setLoginModalActive(false);
  }


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
          {/*<Button onClick={() => startTransition(() => loginAction())}>로그인</Button>*/}
          <Button onClick={openLoginModal}>로그인</Button>
          {/*<Button>로그인</Button>*/}
          <Button color="primary">회원가입</Button>
        </div>
      </div>

      <Modal
        open={loginModalActive}
        onClose={closeLoginModal}
        title="로그인"
      >
        sdfdsf
      </Modal>
    </>
  )
}

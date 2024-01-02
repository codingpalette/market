'use client'

import Button from "@/app/_components/atoms/Button";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-regular-svg-icons'
import {loginAction} from "@/actions/userAction";
import {useState, useTransition} from 'react';
import Modal from "@/app/_components/molecules/Modal";
import FromInput from "@/app/_components/molecules/FormInput";
import Input from "@/app/_components/atoms/Input";
import {useSession, signOut} from "next-auth/react";
import DropdownMenu from "@/app/_components/molecules/DropdownMenu";



export default function HeaderTop() {
  const { data: session } = useSession();
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

  const dropDownItems = [
    {
      key: 1,
      label: '로그아웃',
      onClick: () => signOut()
    }
  ]


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
        <div className="flex gap-2 items-center">
          {session ? (
            <>
              <Button rotundFull>
                <FontAwesomeIcon icon={faBell} />
              </Button>
              <DropdownMenu
                position="right"
                boxWidth="150px"
                items={dropDownItems}
              />
            </>
          ): (
            <>
              <Button>
                <Link href="/login">
                  로그인
                </Link>
              </Button>
              <Button>
                <Link href="/join">
                  회원가입
                </Link>
              </Button>
            </>
          )}

          {/*<Button onClick={() => startTransition(() => loginAction())}>로그인</Button>*/}
          {/*<Button onClick={openLoginModal}>로그인</Button>*/}

          {/*<Button>로그인</Button>*/}
          {/*<Button color="primary">회원가입</Button>*/}
        </div>
      </div>

      <Modal
        open={loginModalActive}
        onClose={closeLoginModal}
        title="로그인"
        okRender={false}
      >
        <div className="flex flex-col gap-4">
          <Input name="email" fullWidth={true} placeholder="이메일을 입력해 주세요." maxLength={50} />
          <Button fullWidth={true}>이메일로 로그인</Button>
        </div>

      </Modal>
    </>
  )
}

'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import FromInput from "@/app/_components/molecules/FormInput";
import Button from "@/app/_components/atoms/Button";
import LoginJoinBox from "@/app/(beforeLogin)/_components/organisms/LoginJoinBox";


export default function LoginTemplate() {

  async function loginAction(formData: any) {
    console.log('event', formData)
    console.log(formData.get('user_nickname'))
    try {
      await signIn('credentials', {
        user_nickname: formData.get('user_nickname'),
        password: formData.get('password'),
        redirect: false,
      })
    } catch (e) {

    }

    return null;
  }

  return (
    <>
      <LoginJoinBox title="로그인">
        <form action={loginAction}>
          <div className="mt-4">
            <FromInput
              placeholder="아이디를 입력해 주세요."
              fullWidth
              label="아이디"
              id="user_nickname"
              name="user_nickname"
            />
          </div>
          <div className="mt-4">
            <FromInput
              placeholder="비밀번호를 입력헤 주세요."
              fullWidth
              label="비밀번호"
              type="password"
            />
          </div>
          <div className="mt-10">
            <Button fullWidth type="submit">로그인</Button>
          </div>
        </form>
      </LoginJoinBox>
    </>
  )
}

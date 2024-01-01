'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import FromInput from "@/app/_components/molecules/FormInput";
import Button from "@/app/_components/atoms/Button";
import LoginJoinBox from "@/app/(beforeLogin)/_components/organisms/LoginJoinBox";
import {UserJoinErrorType} from "@/types/userType";


interface LoginTemplateProps {
  action: string | ((formData: FormData) => void) | undefined
  errorMessage?: string
  errorType?: UserJoinErrorType | null
  isLoading?: boolean
}

/**
 * @param action - form 이벤트
 * @param errorMessage - 에러 메세지
 * @param errorType - 에러 타입
 * @param isLoading - 로딩 여부
 * */
export default function LoginTemplate({action, errorMessage, errorType, isLoading}: LoginTemplateProps) {

  return (
    <>
      <LoginJoinBox title="로그인">
        <form action={action}>
          <div className="mt-4">
            <FromInput
              placeholder="아이디를 입력해 주세요."
              fullWidth
              label="아이디"
              id="login_id"
              name="login_id"
              maxLength={30}
              isError={errorType === 'login_id'}
              errorMessage={errorMessage}
            />
          </div>
          <div className="mt-4">
            <FromInput
              placeholder="비밀번호를 입력헤 주세요."
              fullWidth
              label="비밀번호"
              id="password"
              name="password"
              type="password"
              maxLength={30}
              isError={errorType === 'password'}
              errorMessage={errorMessage}
            />
          </div>
          <div className="mt-10">
            <Button fullWidth type="submit" isLoading={isLoading}>로그인</Button>
          </div>
        </form>
      </LoginJoinBox>
    </>
  )
}

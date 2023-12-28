'use client';

import FromInput from "@/app/_components/molecules/FormInput";
import Button from "@/app/_components/atoms/Button";
import LoginJoinBox from "@/app/(beforeLogin)/_components/organisms/LoginJoinBox";
import {userCreate} from "@/actions/userAction";


export interface JoinTemplateProps {
  action: string | ((formData: FormData) => void) | undefined
  errorMessage?: string
  errorType?: 'user_nickname' | 'password' | 'password_confirm' | null
}

/**
 * @param action - form 이벤트
 * @param errorMessage - 에러 메세지
 * @param errorType - 에러 타입
 * */

export default function JoinTemplate({action, errorMessage, errorType}: JoinTemplateProps) {
  return (
    <>
      <LoginJoinBox title="회원가입">
        <form action={action}>
          <div className="mt-4">
            <FromInput
              placeholder="아이디를 입력해 주세요."
              fullWidth
              label="아이디"
              id="user_nickname"
              name="user_nickname"
              isError={errorType === 'user_nickname'}
              errorMessage={errorMessage}
            />
          </div>
          <div className="mt-4">
            <FromInput
              placeholder="비밀번호를 입력헤 주세요."
              fullWidth
              label="비밀번호"
              type="password"
              isError={errorType === 'password'}
              errorMessage={errorMessage}
            />
          </div>
          <div className="mt-4">
            <FromInput
              placeholder="비밀번호를 입력헤 주세요."
              fullWidth
              label="비밀번호 확인"
              type="password"
              isError={errorType === 'password_confirm'}
              errorMessage={errorMessage}
            />
          </div>
          <div className="mt-10">
            <Button fullWidth type="submit">회원가입</Button>
          </div>
        </form>
      </LoginJoinBox>
    </>
  )
}

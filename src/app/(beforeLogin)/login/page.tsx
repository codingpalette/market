'use client';

import LoginTemplate from "@/app/(beforeLogin)/_components/templates/LoginTemplate";
// 서버
// import { signIn} from "@/auth";
// 클라이언트
import { useSession, signIn, signOut } from "next-auth/react"
import {isEmpty, isValidLoginId} from "@/util/stringFormat";
import {useState} from "react";
import {UserJoinErrorType} from "@/types/userType";
import useToastStore from "@/stores/toastStore";
import {useRouter} from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  const { addToast } = useToastStore();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [errorType, setErrorType] = useState<UserJoinErrorType | null | undefined>(null)

  // https://msm1307.tistory.com/151

  async function loginAction(formData: any) {
    // 점증 로직
    if (isEmpty(formData.get('login_id'))) {
      setErrorMessage('아이디를 입력해 주세요.')
      setErrorType('login_id')
      return
    }
    if (isEmpty(formData.get('password'))) {
      setErrorMessage('비밀번호를 입력해 주세요.')
      setErrorType('password')
      return
    }
    setIsLoading(true)
    try {
      const res = await signIn('credentials', {
        login_id: formData.get('login_id'),
        password: formData.get('password'),
        redirect: true,
        callbackUrl: '/'
      })
      if (res?.error) {
        addToast({
          type: 'error',
          message: '로그인 정보가 다릅니다.',
          position: 'top-center'
        })
        return
      }
      addToast({
        type: 'success',
        message: '로그인 되었습니다.',
        position: 'top-center'
      })
      setIsLoading(false)
      router.push('/')
    } catch (e) {
      console.log('e', e)
      addToast({
        type: 'error',
        message: '서버에 문제가 발생했습니다.',
        position: 'top-center'
      })
      setIsLoading(false)

    } finally {
    }

    return null;
  }

  return (
    <>
      <LoginTemplate
        action={loginAction}
        errorMessage={errorMessage}
        errorType={errorType}
        isLoading={isLoading}
      />
    </>
  )
}

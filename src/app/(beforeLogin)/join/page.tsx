'use client';

import JoinTemplate from "@/app/(beforeLogin)/_components/templates/JoinTemplate";
import {userCreate} from "@/actions/userAction";
import {useState} from "react";
import {isEmpty, isValidLoginId, isValidNickname, isValidPassword} from "@/util/stringFormat";
import {UserJoinErrorType} from "@/types/userType";


export default function JoinPage() {

  const [errorMessage, setErrorMessage] = useState<string>('')
  const [errorType, setErrorType] = useState<UserJoinErrorType | null | undefined>(null)

  async function actionEvent(formData: FormData) {
    // 'use server'
    console.log('22222')
    console.log()
    // 점증 로직
    if (isEmpty(formData.get('login_id'))) {
      setErrorMessage('아이디를 입력해 주세요.')
      setErrorType('login_id')
      return
    }
    if (!isValidLoginId(formData.get('login_id'))) {
      setErrorMessage('아이디는 영문자로 시작하는 4~30자 영문자 또는 숫자이어야 합니다.')
      setErrorType('login_id')
      return
    }
    if (isEmpty(formData.get('user_nickname'))) {
      setErrorMessage('닉네임을 입력해 주세요.')
      setErrorType('user_nickname')
      return
    }
    if (!isValidNickname(formData.get('user_nickname'))) {
      setErrorMessage('닉네임은 2글자 이상 띄어쓰기 없이 한글, 영문, 숫자만 사용 가능합니다.')
      setErrorType('user_nickname')
      return
    }
    if (isEmpty(formData.get('password'))) {
      setErrorMessage('비밀번호를 입력해 주세요.')
      setErrorType('password')
      return
    }
    if (!isValidPassword(formData.get('password'))) {
      setErrorMessage('비밀번호는 영문자, 숫자, 특수문자를 포함한 6~30자리로 입력해주세요.')
      setErrorType('password')
      return
    }
    if (formData.get('password') !== formData.get('password_confirm')) {
      setErrorMessage('비밀번호가 일치하지 않습니다.')
      setErrorType('password_confirm')
      return
    }

    console.log('33333')

    try {

      const res = await userCreate(formData)
      console.log('res', res)
      setErrorMessage('아이를 입력해 주세요.')
      setErrorType('login_id')
    } catch (e) {

    }
  }

  return (
    <>
      <JoinTemplate
        action={actionEvent}
        errorMessage={errorMessage}
        errorType={errorType}
      />
    </>
  )
}

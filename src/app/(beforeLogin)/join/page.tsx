'use client';

import JoinTemplate from "@/app/(beforeLogin)/_components/templates/JoinTemplate";
import {userCreate} from "@/actions/userAction";
import {useState} from "react";


export default function JoinPage() {

  const [errorMessage, setErrorMessage] = useState<string>('')
  const [errorType, setErrorType] = useState<"user_nickname" | "password" | "password_confirm" | null | undefined>(null)

  async function actionEvent(formData: FormData) {
    // 'use server'
    console.log('22222')
    try {
      const res = await userCreate(formData)
      console.log('res', res)
      setErrorMessage('아이를 입력해 주세요.')
      setErrorType('user_nickname')
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

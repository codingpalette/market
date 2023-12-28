'use client';

import JoinTemplate from "@/app/(beforeLogin)/_components/templates/JoinTemplate";
import {userCreate} from "@/actions/userAction";


export default function JoinPage() {

  async function actionEvent(formData: FormData) {
    // 'use server'
    console.log('22222')
    try {
      const res = await userCreate(formData)
      console.log('res', res)
    } catch (e) {

    }
  }

  return (
    <>
      <JoinTemplate action={actionEvent} />
    </>
  )
}

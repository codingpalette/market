import FromInput from "@/app/_components/molecules/FormInput";
import Button from "@/app/_components/atoms/Button";
import LoginJoinBox from "@/app/(beforeLogin)/_components/organisms/LoginJoinBox";
import {userCreate} from "@/actions/userAction";


export default function JoinTemplate() {
  return (
    <>
      <LoginJoinBox title="회원가입">
        <form action={userCreate}>
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
          <div className="mt-4">
            <FromInput
              placeholder="비밀번호를 입력헤 주세요."
              fullWidth
              label="비밀번호 확인"
              type="password"
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

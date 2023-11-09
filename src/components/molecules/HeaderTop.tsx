import Button from "@/components/atoms/Button";


export default function HeaderTop() {
  return (
    <>
      <div className="flex items-center justify-between px-6 h-[64px]">
        <div>
          logo
        </div>
        <div className="flex gap-2">
          <Button>로그인</Button>
          <Button color="primary">회원가입</Button>
        </div>
      </div>
    </>
  )
}

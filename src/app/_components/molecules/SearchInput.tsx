import Input from "@/app/_components/atoms/Input";
import Button from "@/app/_components/atoms/Button";


export default function SearchInput() {
  return (
    <>
      <div className="flex gap-2">
        <Input placeholder="검색어를 입력해주세요..." fullWidth/>
        <Button style={{width: '100px'}}>검색</Button>
      </div>
    </>
  )
}

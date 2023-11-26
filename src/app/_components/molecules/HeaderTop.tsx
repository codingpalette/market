import Button from "@/components/atoms/Button";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-regular-svg-icons'

export default function HeaderTop() {
  return (
    <>
      <div className="flex items-center justify-between px-6 h-[64px]">
        <div>
          <Link href="/">
            {/*<a className="text-2xl font-bold">LOGO</a>*/}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className="flex gap-2">
          <Button isIconOnly>
            <FontAwesomeIcon icon={faBell} className="w-4 h-4" />
          </Button>
          <Button>로그인</Button>
          <Button color="primary">회원가입</Button>
        </div>
      </div>
    </>
  )
}

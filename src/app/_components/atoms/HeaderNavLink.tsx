import Link from "next/link";


interface HeaderNavLinkProps {
  children?: React.ReactNode;
  href: string;
}

/**
 * @param {React.ReactNode} children - 버튼 안에 들어갈 내용
 * @param {string} href - 링크 주소
 * */

export default function HeaderNavLink({href, children}: HeaderNavLinkProps) {
  return (
    <>
      <Link href={href} className="text-neutral-500 text-sm px-4 py-2 rounded-md transition hover:bg-neutral-900 hover:text-zinc-50">
        {children}
      </Link>
    </>
  )
}

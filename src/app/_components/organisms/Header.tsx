import HeaderTop from "@/components/molecules/HeaderTop";
import HeaderBottom from "@/components/molecules/HeaderBottom";


export default function Header () {
  return (
    <>
      <header className="">
        <HeaderTop />
        <HeaderBottom />
        <div className="h-[1px] bg-neutral-500"></div>
      </header>
    </>
  )
}

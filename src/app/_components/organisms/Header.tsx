import HeaderTop from "@/app/_components/molecules/HeaderTop";
import HeaderBottom from "@/app/_components/molecules/HeaderBottom";


export default function Header () {
  return (
    <>
      <header className="">
        <HeaderTop />
        {/*<HeaderBottom />*/}
        <div className="h-[1px] bg-neutral-500"></div>
      </header>
    </>
  )
}

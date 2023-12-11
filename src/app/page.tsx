import MainPage from "@/app/_components/templetes/MainPage";
import {gerUsers} from "@/actions/userAction";

export default async function Home() {

  const aa = await gerUsers();

  return (
    <>
      <MainPage aa={aa.result.rows}  />
    </>
  )
}

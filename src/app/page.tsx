import HomePage from "@/components/templates/HomePage";
import api from "@/utils/axios";
import { ICountries } from "@/utils/interfaces";


export default async function Home() {
  try {
    const {data}=await api.get<ICountries[]>("countries");
    return (
      <>
      <HomePage items={data}/>
      </>
       );
  } catch {
     return(<h2 className="text-center text-lg mt-[10%]"> not connect to server !! 🥲 </h2>)
  }

}

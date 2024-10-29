import HomePage from "@/components/templates/HomePage";
import api from "@/utils/axios";
import { ICountries } from "@/utils/interfaces";

export default async function Home() {
  try {
    const {data}=await api.get<ICountries[]>("/countries");
    return <HomePage items={data}/>
  } catch {
   return <h1 className="w-full mt-10 font-light text-center text-xl">
   Loading ...  
   </h1>
  }
}

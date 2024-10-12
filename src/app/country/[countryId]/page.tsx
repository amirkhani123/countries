import Country from "@/components/templates/Country";
import api from "@/utils/axios"
import { ICountryData } from "@/utils/interfaces";

interface Icountry{
  params:{
    countryId:string
  }
}

async function page({params}:Icountry) {
  try {
    const {data}= await api.get<ICountryData>(`http://localhost:5000/countries/${params.countryId}`);
   
    return (
      <Country data={data}/>
    )
 } catch {
  
 }
 
}

export default page
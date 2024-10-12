import { ICountryData } from "@/utils/interfaces"
import Image from "next/image"
import Button from "../ui/Button"


interface ICountry{
    data:ICountryData
}
function Country({data}:ICountry) {
  return (
   <main className="max-w-[1300px] mx-auto  my-14">
 <Button/>
    <div className="flex  max-xl:flex-wrap max-xl:justify-center   gap-10 w-full">
        <Image src={data.flags.svg} alt="countryImage.svg" width={700} height={300} className="w-[500px] h-[300px] rounded-md"/>
        <div>
            <h1 className=" text-xl my-5 font-medium">{data.name}</h1>
            <div className="flex justify-between  w-full font-light">
                <div>
                <p >Native Name :<span className="span-gray">{data.nativeName}</span></p>
                <p>Population :<span className="span-gray">{data.population.toLocaleString("usi")}</span></p>
                <p>Region :<span className="span-gray">{data.region}</span></p>
                <p>Sub Region :<span className="span-gray">{data.subregion}</span></p>
                <p>Capital:<span className="span-gray">{data.capital}</span></p>
                </div>
                <div>
                <p>Top Level Domain :<span className="span-gray">{data.topLevelDomain}</span></p>
                <p>Currencies:<span className="span-gray">{data.currencies[0].name}</span></p>
                <p>Language:<span className="span-gray">{data.languages[0].name}</span></p>
                </div>
            </div>
            <div className="flex  gap-2 items-center mt-6 flex-wrap" >
            <p>Border Countries :</p> 
            <div className="flex">
            {
                data.borders ? (data.borders.map((i:string,index:number)=>(<div key={index} className=" rounded-md px-2 py-1 shadow-3xl mx-1">{i}</div>))): <div className=" rounded-md px-2 py-1 shadow-3xl mx-1">Not Borders</div>
            }
            </div>
        </div>
        </div>
    </div>

   </main>
  )
}

export default Country
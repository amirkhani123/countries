import { ICountries } from "@/utils/interfaces"
import Image from "next/image"
import Link from "next/link"

interface ICardProps{
data:ICountries
}
function Card({data}:ICardProps) {
  return (
    <Link href={`/country/${data.id}`} className="w-[265px] overflow-hidden  bg-white min-h-[320px]  rounded-md shadow-lg dark:bg-gray-800 mx-4 max-md:w-[90%] ">
      <Image src={data.flags.svg} alt="flags.svg" width={500} height={300}  />
      <h3 className="text-lg m-2 font-medium">{data.name}</h3>
      <div className="m-2">
       <p className=" font-light">Population:<span className="text-gray-500 ml-px">{data.population.toLocaleString("us")}</span> </p>
       <p className=" font-light ">Region : <span className="text-gray-500 ml-px">{data.region}</span></p>
       <p className=" font-light">Capital : <span className="text-gray-500 ml-px">{data.capital}</span></p>
      </div>
    </Link>
  )
}

export default Card
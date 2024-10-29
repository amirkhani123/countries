"use client"
import { ICountries, Iquery } from "@/utils/interfaces"
import Card from "../modules/Card"
import FiltersTemplate from "./FiltersTemplate"
import { useEffect, useState } from "react"

interface homePageProps{
    items:ICountries[],
 
}
function HomePage({items}:homePageProps) {
  const params=new URLSearchParams(window.location.search);
  const [showData,setShowData]=useState(items);
  const [query,setQuery]=useState<Iquery>({
    name:"",
    region:""
  })
  useEffect(()=>{
    params.set("name",query.name);
    params.set("region",query.region);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    let {name,region}=query;
    let filterData=items.filter(i=>{
      const filterName= name.length ? i.name.includes(name): true;
      const filterRegion=region==="All" || !region.length ? true: i.region===region  ;    
      if(name && region && filterName && filterRegion){
        return i;
      } else if(
        name && !region && filterName
      ){
        return i;
      }else if(!name&&region && filterRegion ){
        return i;
      }else if (filterName && filterRegion) {
        return i
      }
    })
   setShowData(filterData)
  },[query])
 
    return (
      <div className="max-w-[1300px] m-auto">
        <FiltersTemplate query={query} setQuery={setQuery}/>
    <main className=" flex items-center  flex-wrap gap-3 ">
      {showData.map((i:ICountries)=><Card key={i.id} data={i}/>)}
    </main>

      </div>
  )
}

export default HomePage
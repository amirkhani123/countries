import { ICountries } from "@/utils/interfaces"
import Card from "../modules/Card"

interface homePageProps{
    items:ICountries[]
}
function HomePage({items}:homePageProps) {
    return (
    <div className="max-w-[1300px] m-auto flex items-center  flex-wrap gap-3 ">
      {items.map((i:ICountries)=><Card key={i.id} data={i}/>)}
    </div>
  )
}

export default HomePage
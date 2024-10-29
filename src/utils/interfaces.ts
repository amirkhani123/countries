export interface ICountries{
    name:string,
    id:string,
    region:string,
    population:number,
    capital:string,
    flags:{
        svg:string
    }
}
export interface ICountryData{
        nativeName:string
        name:string;
        region:string;
        capital:string;
        subregion:string;
        population:number;
        topLevelDomain:string;
        flags:{
          svg:string
        }
        currencies:{name:string}[]
          
        
        languages:{
          name:string
        }[]
        borders:string[]
  }
  
export  interface Iquery{
    name:string,
    region:string
  }
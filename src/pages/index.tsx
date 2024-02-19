import type { Month } from "@/types/month.type";
import { getJsonData } from "@/services/getJsonData";
import Dashboard from "@/components/Views/Dashboard";
import AsideBar from "@/components/AsideBar/AsideBar";



export async function getServerSideProps(){
    const CardsData = await getJsonData("src/json/data.json") as Month;

    return {
        props: { CardsData }
    }    
}

export default function HomePage({CardsData}: {CardsData: Month}) {
  return (
    <div className="flex flex-col lg:flex-row lg:px-24 w-full">
        <div className="lg:flex-1 w-full lg:w-auto">
            <Dashboard/>
        </div>
        <AsideBar CardsData={CardsData}/>
    </div>
  );
}

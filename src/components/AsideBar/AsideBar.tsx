import type { Month } from "@/types/month.type";
import CardData from "@/components/Card/CardData";
import TabPulse from "@/components/Tabs/TabPulse";

function AsideBar({CardsData}: {CardsData: Month}) {
  return (
    <aside className="lg:flex-initial w-full lg:w-[400px] pt-12">
        <div className="flex flex-col items-center gap-y-8 mx-auto w-4/5 pt-8">
            <TabPulse/>
            {
                Object.keys(CardsData).map(cardKey => (
                    <CardData key={cardKey} CardsData={CardsData} cardKey={cardKey}/>                        
                ))
            }
        </div>            
    </aside>
  )
}

export default AsideBar
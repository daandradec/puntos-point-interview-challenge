import { Month } from '@/types/month.type'
import React from 'react'

function CardData({CardsData, cardKey}: {CardsData: Month, cardKey: string}) {
  return (
    <div className="bg-white p-4 rounded-2xl w-full max-w-[340px] shadow-[0_0_5px_3px_rgba(0,0,0,0.1)]">
    <h6 className="font-bold text-center">{cardKey}</h6>
        <ul>
            { 
                Object.keys(CardsData[cardKey]).map(cardItemKey => (
                    <li key={cardItemKey+cardKey} className="flex justify-between">
                        <p>{ cardItemKey }</p>
                        <p>{ CardsData[cardKey][cardItemKey] }</p>
                    </li> 
                )) 
            
            }
        </ul> 
    </div>
  )
}

export default CardData
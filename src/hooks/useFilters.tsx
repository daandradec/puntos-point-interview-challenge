type Filter = {first: string, second: string};
export default function useFilters(filters: Filter, setFilters: React.Dispatch<React.SetStateAction<Filter>>){
    const updateFilter = (value: number) => {
        switch(value){
            case 0: 
                setFilters(() => ({first:"hoy", second: ""}))
                break;
            case 1: 
                setFilters(() => ({first:"7d", second: ""}))
                break;
            case 2: 
                setFilters(() => ({first:"mes", second: ""}))
                break;
            case 3: 
                setFilters(() => ({first:"6m", second: ""}))
                break;
            case 4: 
                setFilters(() => ({first:"ytg", second: ""}))
                break;
            case 5: 
                setFilters(() => ({first:"1a", second: ""}))
                break;
            case 6: 
                setFilters(() => ({first:"max", second: ""}))
                break;
            case 7: 
                setFilters(() => ({first:"personalizado", second: ""}))
                break;
            case 8:
                setFilters(() => ({...filters, second:"lunes"}))
                break;
            case 9:
                setFilters(() => ({...filters, second:"martes"}))
                break;
            case 10:
                setFilters(() => ({...filters, second:"miercoles"}))
                break;
            case 11:
                setFilters(() => ({...filters, second:"jueves"}))
                break;
            case 12:
                setFilters(() => ({...filters, second:"viernes"}))
                break;
            case 13:
                setFilters(() => ({...filters, second:"sabado"}))
                break;
            case 14:
                setFilters(() => ({...filters, second:"domingo"}))
                break; 
            case 15: 
                setFilters(() => ({...filters, second:"enero"}))
                break;
            case 16: 
                setFilters(() => ({...filters, second:"febrero"}))
                break;
            case 17: 
                setFilters(() => ({...filters, second:"marzo"}))
                break;
            case 18:
                setFilters(() => ({...filters, second:"abril"}))
                break;
            case 19:
                setFilters(() => ({...filters, second:"mayo"}))
                break;
            case 20:
                setFilters(() => ({...filters, second:"junio"}))
                break;
            case 21:
                setFilters(() => ({...filters, second:"julio"}))
                break;
            case 22:
                setFilters(() => ({...filters, second:"agosto"}))
                break;
            case 23:
                setFilters(() => ({...filters, second:"septiembre"}))
                break;
            case 24:
                setFilters(() => ({...filters, second:"octubre"}))
                break; 
            case 25:
                setFilters(() => ({...filters, second:"noviembre"}))
                break; 
            case 26:
                setFilters(() => ({...filters, second:"diciembre"}))
                break;                                                                                                                                      
            default:
                setFilters(() => ({...filters, first:"hoy"}))
                break;
        } 
    }


    /* 
        Aqui va un useMemo() de React QUE filtre la data original y la filtre usando el metodo filter de Array
        o solo la remplaze segun el filtro seleccionado.  
    */


    return { updateFilter } 
}
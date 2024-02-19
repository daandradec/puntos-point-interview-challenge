const categorias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"    
]

export default function generaterandom(): Array<{x: string, y: number}>{
    let data = [];
    for(let i = 0; i < categorias.length; ++i){
        data.push({x:categorias[i], y: Math.floor(Math.random()*100)})
    }
    return data.sort((_a, _b) => 0.5 - Math.random())
}
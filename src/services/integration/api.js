import axios from 'axios'

const api = "https://pokeapi.co/api/v2/type/fire"

export default async ()=>{
    const lista = await axios.get(api)
    let p = []
    lista.data.pokemon.map(function(po){
        return p.push(po.pokemon.url)
    })
    let resposta = await add(p)
    return resposta
}

async function add(lista){
    let l =[]
    for(let i = 0; i < lista.length; i++){
        const response = await axios.get(lista[i])
        l.push(response.data)

    }
    return l
}

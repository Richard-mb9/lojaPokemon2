export async function getTotal(){
    try{
        const tot = await window.localStorage.getItem("total")
        let total = tot.toString()
        return total
    }catch{
        let total = 0
        return total
    }
}

export async function getPedido(){
    const itens = await window.localStorage.getItem("itens")
    let lista = []
    if (itens != null){
        let compras = JSON.parse(itens)
        for(let i = 0; i < compras.length; i++){
            let p = JSON.parse(compras[i])
            lista.push(p)
        }
    }
    return lista
}

export default function comprar(nome,valor,img){
    let item = {nome:nome, valor:valor,img:img}
        let itens = []
        const obj = window.localStorage.getItem("itens")
        let total
        if(obj){
            total = window.localStorage.getItem("total")
            total = parseFloat(total)
            total += item.valor
            itens = JSON.parse(obj)
            item = JSON.stringify(item)
            itens.push(item)
            itens = JSON.stringify(itens)
            window.localStorage.setItem("itens",itens)
            window.localStorage.setItem("total",total)
            
        }else{
            window.localStorage.setItem("itens",itens)
            window.localStorage.setItem("total",0)
            total = item.valor
            item = JSON.stringify(item)
            itens.push(item)
            itens = JSON.stringify(itens)
            window.localStorage.setItem("itens",itens)
            window.localStorage.setItem("total",total)
        }
}
import React,{useState,useEffect} from 'react'
import {getPedido,getTotal} from '../../services/pedido'
import './finalizar.css'

export default props =>{
    const [pedido,setpedido] = useState()
    const [total, settotal] = useState()
    async function gerarpedido(){
        const ped = await Promise.resolve(getPedido())
        const tot = await Promise.resolve(getTotal())
        setpedido(ped)
        settotal(tot)
        localStorage.clear();
    }
    useEffect(()=>{
        gerarpedido()
    },[])
    function isPokemon(){

        if(pedido.length === 0){
            return <h3>Você ainda não comprou nenhum pokemon</h3>
        }else{
            return  <h3>Meus parabens, Você acabou de adiquirir os seguintes pokemon por R${total},00</h3>
        }
    }
    try{
        return (
            <div className="div_conteudo">
                <div className="div_pedido">
                    {isPokemon()}
                    <div className="div_itens">
                        {pedido.map((po)=>{
                            return(
                            <li key={pedido.indexOf(po)} className="item_pedido">
                                <img className="img_item_pedido" src={po.img} alt=""/>
                                <p className="div_info">{po.nome}</p> 
                                <p className="div_info"> R${po.valor} </p>
                            </li>
                            )
                        })}
                    </div>
                    <a href="/"><button className="btn_inicio">Retornar a loja</button></a>
                </div>
            </div>
        )
    }
    catch{
        return <h1>Aguarde!!!</h1>
    }
    
}
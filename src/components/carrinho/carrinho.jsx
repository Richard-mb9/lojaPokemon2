import React, { useState } from 'react'
import './carrinho.css'
import SVG from '../../static/imagens/seta-para-baixo.svg'

import {getPedido,getTotal} from '../../services/pedido'
import Item from '../itemCarrinho/itemCarrinho'


let pedido = []
let total
async function add(){
    pedido = await Promise.resolve(getPedido())
    total = await Promise.resolve(getTotal())
}
add()


export default (props)=>{
    const [statusmenu,setstatusmenu] = useState("inativo")

    function menuControler(){
        if(statusmenu === "inativo"){
            setstatusmenu("ativo")
        }else{
            setstatusmenu("inativo")
        }
    }
    function CarregarItens(){
        try{
            if(props.ped.length !== 0){
                return(
                    props.ped.map(po=> {
                        total = props.total
                        return(
                            <Item key={props.ped.indexOf(po)} nome={po.nome}valor={po.valor} img={po.img}/>
                        )
                    })
                )
            }else{
                return <p>Voce ainda não comprou nenhum pokemon</p>
            }
            
        }catch{
            if(pedido.length !== 0){
                return(
                    pedido.map(po=> <Item key={pedido.indexOf(po)} nome={po.nome}
                        valor={po.valor} img={po.img}/>)
                    
                )
            }else{
                return <p>Voce ainda não comprou nenhum pokemon</p>
            }
            
        }
    }
    return(
        <>
        <div className="header_carrinho">
                <button onClick={menuControler}  className="btn_carrinho">
                    Meu Carrinho &nbsp;
                    <img className="seta_carrinho" src={SVG} alt=""/>
                </button>
            </div>
        <div className="carrinho">
            
            <div id="div_carrinho" className={statusmenu}>
                <div className="div_titulo_carrinho">
                        <p>Carrinho</p>
                </div>
                <div className="div_lista_pedido">
                    <Item nome="nome" valor="valor" img="imagem"/>
                    {CarregarItens()}
                </div>
                <div className="div_fim_carrinho">
                    <div className="div_total">
                        <p>Total: <b>R${total}</b></p>
                    </div>
                    <div className="div_finalizar_compra">
                        <a href="/finalizar">
                            <button className="btn_finalizar_compra">Finalizar Compra</button>
                        </a>
                        
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
    
}
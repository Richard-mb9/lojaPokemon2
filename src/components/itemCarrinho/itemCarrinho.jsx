import React from 'react'
import './itemCarrinho.css'


export default props =>{
    return(
    <li className="item_carrinho">
        <img className="img_item_arrinho" src={props.img} alt=""/>
         {props.nome} <span className="valor">R$ {props.valor}</span></li>
    )
}
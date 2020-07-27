import React from 'react'
import './pokemon.css'


export default (props)=>{
    
    return (
        <div className="div_pokemon">
            <p className="titulo">{props.nome}</p>
            <div className="div_dados_pokemon">
                
                <div className="div_img">
                    <img className="img" src={props.img} alt=""/>
                </div>
                
                <p className="info">R$ 30,00</p>
            </div>
            
            <button onClick={()=>props.func(props.nome,30,props.img)} className="btn-adicionar">
                Adicionar ao Carrinho
            </button>
        </div>
    )
}
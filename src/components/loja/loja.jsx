import React from 'react'
import API from '../../services/integration/api'
import {useState,useEffect}  from 'react'
import './loja.css'


import comprar,{getPedido, getTotal} from '../../services/pedido'
import Carrinho from '../carrinho/carrinho'
import Pokemon from '../pokemon/pokemon'


export default props => {
    const [pokemon,setpokemon] = useState()
    const[pedido,setpedido] = useState()
    const [total,settotal] = useState()
    useEffect(()=>{
        Promise.resolve(API()).then(value=> setpokemon(value))
    },[])
    function compra (nome,valor,img){
        comprar(nome,valor,img)
        Promise.resolve(getPedido()).then((value)=> {
            setpedido(value)
        })
        Promise.resolve(getTotal()).then((value)=> {
            settotal(value)
        })
    }
    try{
        if(props.pesquisa === ""){
            return(
                <div className="div_conteudo">
                    <div className="lista">
                        {pokemon.map(po=>{
                            return <Pokemon key={po.id} img={po.sprites.front_default} 
                            func={compra} nome ={po.name}/>
                        })}
                    </div>
                    <Carrinho ped={pedido} total={total}/>
                </div>
            )}
            else{
                return(
                    <div className="div_conteudo">
                        <div className="lista">
                            {pokemon.map(po=>{
                                if(po.name === props.pesquisa){
                                    return <Pokemon key={po.name} img={po.sprites.front_default} 
                                    func={compra} nome ={po.name}/>
                                }
                                return null
                            })}
                        </div>
                        <Carrinho ped={pedido} total={total}/>
                    </div>
                    )
            }
        }
        
        
    catch(e){
        return (
            <div className="div_conteudo">
                <h1>Buscando Pokemon!! Aguarde...</h1>
            </div>
        )
        
    }
    
}



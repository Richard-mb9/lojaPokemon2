import React, {useState}from 'react';
import './header.css';


import Search from '../../static/imagens/search.svg'


export default (props) =>{
    const [busca,setbusca] = useState("")
    function handleChange(event){
        setbusca(event.target.value)
    }
    function KeyHandler(event){
        if(event.key === 'Enter'){
            props.func(busca)
        }
    }
    function search(){
        if(window.location.pathname !== "/finalizar" ){
            return(
                <div className="pesquisa">
                    <div className="div-pesquisa">
                        <input  className="input-pesquisa" type="text"
                            value={busca} 
                            onChange={handleChange}
                            onKeyUp={KeyHandler} />
                        <button onClick={(e)=>props.func(busca)}
                            className="btn-pesquisar-responsivo">
                                <img className="img-lupa" src={Search} alt=""/>
                        </button>
                    </div>   
                </div>
            )
        }
    }
    
    return(
        <header className="barra-nav">
            {search()}
        </header>
    )
}
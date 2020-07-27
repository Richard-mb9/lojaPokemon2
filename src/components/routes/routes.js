import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Loja from '../loja/loja'
import Finalizar from '../finalizar/finalizar'



export default props =>{

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => (
                    <Loja  pesquisa={props.pesquisa}/>
                )}/>
                <Route path="/finalizar" component={Finalizar}/>                
            </Switch>
        </BrowserRouter>
    )
}

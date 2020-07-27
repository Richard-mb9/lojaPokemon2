import React,{useState} from 'react';
import Header from './components/header/header'
import Routes from './components/routes/routes'

function App() {
  const [pesquisa,setpesquisa] = useState("")
  function pesquisar(busca){
    setpesquisa(busca)
  }
  return (
    <>
      <Header func={pesquisar}/>
      <Routes pesquisa={pesquisa}/>
    </>
  );
}
export default App;


import logo from './logo.svg';
import './App.css';
import image from './fotinha.png';


import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

function Fotinha(props){
  const $foto = <img src={image}/>
  return $foto;
}

function App() {
  return (

    <div>
      <Button />
    </div>

    // <div>
    //   <Fotinha />
    //   <center>
    //   <Header />
    //   <Main nome='vermelho ta bom' genero='sim' />
    //   <Sidebar />
    //   </center>
    // </div>
  )
}

export default App;

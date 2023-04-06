import logo from './logo.svg';
import './App.css';



import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div>
      <center>
      <Header />
      <Main nome='macaco gordo alemao do oriundo da minha azuleija nacional azul aaaave marioa the quick brown 
      fox jumps over the lazy dog' genero='sim' />
      <Sidebar />
      </center>
    </div>
  )
}

export default App;

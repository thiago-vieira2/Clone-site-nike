
import './App.scss';
import Carrosel_Header from './component/carrosel-header';
import Header from './component/header';
import Land from './pages/land';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Carrosel_Header/>
      <Land/>
    </div>
  );
}

export default App;

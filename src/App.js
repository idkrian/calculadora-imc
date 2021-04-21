import './App.css';
import Routes from './Routes'
import Navbar from './components/Navbar'
import {HashRouter} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar/>
        <Routes/>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;

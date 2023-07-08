
import './App.css';
import Footer from './components/Footer';
import Head
 from './components/Head';
import Restaurats from './components/Restaurats';
import Restview from './components/Restview';
 import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Head/>
   <Routes>
      <Route path='/' element={<Restaurats/>}/>
       <Route path='/view-restaurant/:id' element={<Restview/>}/>
   </Routes>
     <Footer/>
    
    </div>
  );
}

export default App;

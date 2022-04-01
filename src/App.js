import './App.css';
import {Routes, Route} from 'react-router-dom'
import LayOut from './LeyOut'

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
          <Routes>
             <Route path='/' element={<LayOut/>}>
               <Route path='/' element={<Home/>}/>
               <Route path='menu' element={<Menu/>}/>
               <Route path='about' element={<About/>}/>
               <Route path='contact' element={<Contact/>}/>
             </Route>
          </Routes>
    </div>
  );
}

export default App;

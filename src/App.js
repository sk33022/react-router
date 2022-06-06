import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import  Contact  from './Components/Contact';
import {Navbar} from './Components/Navbar';
import card from './Components/Card';

import{
  BrowserRouter,
  Route,
  Switch,
  
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    
   <Navbar/>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route  path='/:user' component={card} />


          {/* <Home/>
        </Route> */}
        {/* <Route exact path="/about" element={<About/>}>
          <About/>
        </Route>
        <Route exact path="/contact" >
          <Contact />
        </Route> */}
      </Switch>   
       

    
    </BrowserRouter> 
  );
}

export default App;

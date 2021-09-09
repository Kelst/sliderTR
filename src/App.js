import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
function App() {
 const [toggle, setToggle] = useState(true)
 const switchToggle=()=>{
  document.body.classList.toggle("dark")
   setToggle(!toggle);
 }
  const [SliderData,setList]=useState([]);
  useEffect(() => {
 fetch('https://my-json-server.typicode.com/Kelst/server/Photos')
.then(response => response.json())
.then(json => setList([...json]))
    
}, [])
  return (
    <div className="conatiner">
    <Router>
     <Header toggle={toggle} switchToggle={switchToggle}/>
     
     <Switch>
     <Route exact path="/">
                 <Slider slider={SliderData}/>
          </Route>
          <Route path="/about">
                 <About/>
          </Route>
          <Route path="/contact">
                 <Contact/>
          </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;

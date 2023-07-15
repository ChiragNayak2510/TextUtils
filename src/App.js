
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import { Link, Route, Routes } from "react-router-dom";


function App() {
  const[mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#121212'
    }
    else{ 
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar mode = {mode} toggleMode={toggleMode}></Navbar>
    <Routes>
      <Route path="/" element={<Textform/>}></Route>
      <Route path="/About" element={<About/>}></Route>
    </Routes>
    
    
    </>
  );
}

export default App;

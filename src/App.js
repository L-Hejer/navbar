import React from 'react';
import './App.css';
import Nav from './components/navbar.js';


function App(){
const menu=[
{title:"Home",link:"#"},
{title: "Services",link:"#",dropdown:['For entrepreneurs','For students','For hobbyists']},
{title:"Contact",link:"#"},
]
    return <Nav menulist={menu}/>   
}

export default App;

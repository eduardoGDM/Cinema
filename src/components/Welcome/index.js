import React, {Fragment, useState} from 'react';
import { BiCartAlt} from "react-icons/bi";
import {Button} from "@mui/material";
import './style.css';


import Catalogo from '../Catalogo';
import Home from '../Home';
import About from '../About';

const Welcome = () => {

    const[page, setPage] = useState('home')
  
    return(
    <Fragment>
            <div className="main-container">
                <div className="Top-bar">
                    <h1 className="Cinema-title">Cinema <h2>World</h2></h1> 
                        <div className="icon-bar">
                            <a href = "#"><BiCartAlt className="icon-Theme"/></a>
        </div>                  
    </div> 
            <div className="navegation-Button">
                <Button onClick={()=>setPage('home')} className="button-Navegation">Home</Button>
                <Button onClick={()=>setPage('catalogo')} className="button-Navegation">FILMES</Button>
                <Button onClick={()=>setPage('about')} className="button-Navegation">Sobre</Button>

    </div>
             <div className="box-content">
                    {page == 'home' && <Home/>} 
                    </div>
            <div className="box-information">
                    {page == 'catalogo' && <Catalogo/> } 
                    {page == 'about' && <About/>}                    
            </div>     
        </div>     
    </Fragment>
    )
}


export default Welcome; 
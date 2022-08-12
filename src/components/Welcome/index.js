import React, {Fragment, useState} from 'react';
import { BiCartAlt} from "react-icons/bi";
import {Button} from "@mui/material";
import './style.css';


import Catalogo from '../Catalogo';
import Home from '../Home';
import About from '../About';
import Produtos from '../Produtos';

const Welcome = () => {

    const[page, setPage] = useState('home')

        
    return(
    <Fragment>
            <div className="main-container">
                <div className="Top-bar">
                    <h1 className="Cinema-title">Cinema World</h1>
                        <div className="icon-bar">
                            <a href = "#"><BiCartAlt className="icon-Theme"/></a>
        </div>                  
    </div> 
            <div className="navegation-Button">
                <Button onClick={()=>setPage('home')} className="button-Navegation"color="error">Home</Button>
                <Button onClick={()=>setPage('catalogo')} className="button-Navegation"color="error">FILMES</Button>
                <Button  className="button-Navegation" onClick={()=>setPage('produtos')} color="error">Produtos</Button>
                <Button onClick={()=>setPage('about')} className="button-Navegation"color="error">Sobre</Button>

    </div>
             <div className="box-content">
                    {page == 'home' && <Home/>} 
           
                    </div>
            <div className="box-information">
                
                    {page == 'catalogo' && <Catalogo/> } 
                    {page == 'about' && <About/>}
                    {page == 'produtos' && <Produtos/>}
                    
            </div>
          
        </div>
                
    </Fragment>
    )
}


export default Welcome; 
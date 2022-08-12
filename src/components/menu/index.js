import React, {Fragment, useState} from 'react';
import {Button} from "@mui/material";
import {MdChair, MdSecurityUpdateGood} from 'react-icons/md'; 

import './style.css';
import Store from '../store';



const Menu = ({data, show}) => {

    const[page,setPage] = useState('store')

    const [assentos, setAssentos] = useState([]);

    function pushChairs(e){
        setAssentos((a) => [...a, e])
        console.log(assentos);
    }
    return(
    <Fragment>
        <Button variant="text" onClick={() => show(false)}>voltar</Button>
        <div className="menu-container">
        <img src = {data.img}/> 
            <div style={{display: 'flex',flexDirection: 'column'}}> 
                <h1>Filme: {data.titulo}</h1>
                <h3>{data.dub}</h3>
            </div>
                <div>
                    <h1>Sessão: {data.horario}</h1>
                    <h2>Gênero:{data.genero}</h2>
                    
             </div>
        </div>
        <div className="assentos-container"> 
            <h2>
                Escolha seus assentos  
            </h2>  
            <div className="chairs-container">
                {data.chairs.map((c)=>{
                    return( 
                    <div className="cadeirinha-div" onClick={(e) => pushChairs(c)}> 
                            <MdChair size="45px" color={c.used ? "#f6f6f6" : "#008000"}/>
                            <span className="cadeirinha">{c.id}</span>

                    </div>)

                })}
            </div>
            <Button onClick={()=>setPage('store')}> Avançar</Button> 
        </div>
    </Fragment>
    )
}
export default Menu;
import React, {Fragment,useState} from 'react';
import './style.css';
import {Button} from "@mui/material";
import filmeCartaz from '../../images/filme-cartaz.jpg';


const Catalogo = () => {
            
    return(
        <Fragment>
            <div className="catalogo-style"> 
                 <h1>Filmes em Cartaz</h1>

                    <div className="catalogo-org">     
                             <h2>O baita 1 </h2>
                        <div style={{display: 'flex',alignItems:'center'}}>
                             <Button> 12 : 05 </Button>
                         </div>
                         <div style={{display: 'flex',alignItems:'center'}}>
                             <img src = {filmeCartaz}/>  
                             <h3>sinopse</h3>
                         </div>

                            <h2>O baita 2</h2>
                         <div style={{display: 'flex',alignItems:'center'}}>
                             <Button> 12 : 05 </Button>
                         </div>
                         <div style={{display: 'flex',alignItems:'center'}}>
                         <img src = {filmeCartaz}/>  
                             <h3>sinopse</h3>
                         </div>         

                             <h2>O baita 3 </h2>
                        <div style={{display: 'flex'}}>
                             <Button> 12 : 05 </Button></div>
                         <div style={{display: 'flex',alignItems:'center'}}>
                             <img src = {filmeCartaz}/>  
                             <h3>sinopse</h3>
                         </div>                        
    </div>
    </div>
    </Fragment>
    )
    
}

export default Catalogo;
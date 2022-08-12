import { render } from '@testing-library/react';
import React, {Fragment} from 'react';

import './style.css';

const Menu = ({data, show}) => {
    return(
    <Fragment>
        <button onClick={() => show(false)}>voltar</button>
        <div className="menu-container">
        <img src = {data.img}/> 
            <div style={{display: 'flex',flexDirection: 'column'}}> 
                <h1>Filme: {data.titulo}</h1>
                <h3>{data.dub}</h3>
                </div>
                <div >
                <h1>Sessão: {data.horario}</h1>
                <h2>Gênero:{data.genero}</h2>
                </div>
        </div>
        <div className="assentos-container"> 
            <h2>
                Escolha seus assentos 
            </h2>  
        </div>

        
    </Fragment>
    )
}
export default Menu;
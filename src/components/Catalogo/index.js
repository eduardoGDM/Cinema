import React, {Fragment,useState} from 'react';
import './style.css';
import {Button} from "@mui/material";
import filmeCartaz from '../../images/filme-cartaz.jpg';

import Menu from '../menu';


const Catalogo = () => {

            const[page,setPage] = useState(false)
            const [single,setSingle] = useState() 
            
            function getMovie(f) {
                setSingle(f)
                setPage(true)
            }

        const data = [
            {
            titulo: 'Baita 1',
            horario: '12:05',
            sinopse:'sinopse',
            img:'https://cdn.olivre.com.br/wp-content/uploads/2019/09/20190912-y5i92dqjh3m31.jpg',
            genero:'Terror',
            dub:'Dublado',
            chairs:'https://cdn-icons-png.flaticon.com/512/24/24868.png',
            chairs:[
                {"id": 1, used: true},
                {"id": 2, used: false},
                {"id": 3, used: true},
            ]
            },
            {
                titulo: 'Baita 2',
                horario: '12:05',
                sinopse:'sinopse',
                img:'https://cdn.olivre.com.br/wp-content/uploads/2019/09/20190912-y5i92dqjh3m31.jpg',
                genero:'ação/aventura',
                dub:'Legendado',
                },
                {
                    titulo: 'Baita 3',
                    horario: '12:05',
                    sinopse:'sinopse',
                    img:'https://cdn.olivre.com.br/wp-content/uploads/2019/09/20190912-y5i92dqjh3m31.jpg',
                    genero:'Suspense',
                    dub:'Dublado',
                    },
        
    ]

    return(
        <Fragment>
            {page ? <Menu show={setPage} data={single}/> : <div className="catalogo-style"> 
                 <h1>Filmes em Cartaz</h1>
                    <div className="catalogo-org">     
                         {data.map((f) => (
                            <>
                                <h2>{f.titulo}</h2>
                         <div style={{display: 'flex',alignItems:'center'}}>
                             <Button onClick={()=>getMovie(f)}>{f.horario}</Button>
                         </div>
                         <div style={{display: 'flex',alignItems:'center'}}>
                         <img src = {f.img}/>  
                             <h3>{f.sinopse}</h3>
                         </div>
                            </>
                         ))}                    
    </div>
    </div>}
    </Fragment>
    )
    
}

export default Catalogo;
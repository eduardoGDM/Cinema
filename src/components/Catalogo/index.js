import React, {Fragment,useState} from 'react';
import './style.css';
import {Button} from "@mui/material";

import Menu from '../menu';
import water from '../../images/water.png';

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
            // ta importando o link em vez da imagem     
            img_pipoca:'https://cdn-icons-png.flaticon.com/512/3439/3439699.png',
            img_water:'https://cdn-icons.flaticon.com/png/512/2745/premium/2745060.png?token=exp=1660483590~hmac=1397d0eef0280506ec7ba744324f8aa9',         
            // ta importando o link em vez da imagem     

                
            genero:'Terror',
            dub:'Dublado',
            bebidas:'Agua',
            comidas:'Pipoca',
            chairs:[
                {"id": 1, used: true},
                {"id": 2, used: false},
                {"id": 3, used: true},
                {"id": 4, used: true},
                {"id": 5, used: false},
                {"id": 6, used: true},
                {"id": 7, used: true},
                {"id": 8, used: false},
                {"id": 9, used: true},
                {"id": 10, used: true},
                {"id": 11, used: true},
                {"id": 12, used: false},
                {"id": 13, used: true},
                {"id": 14, used: true},
                {"id": 15, used: false},
                {"id": 16, used: true},
                {"id": 17, used: true},
                {"id": 18, used: false},
                {"id": 19, used: true},
                {"id": 20, used: true},
                {"id": 21, used: true},
                {"id": 22, used: false},
                {"id": 23, used: true},
                {"id": 24, used: true},
                {"id": 25, used: false},
                {"id": 26, used: true},
                {"id": 27, used: true},
            ]
            },
            {
                titulo: 'Baita 2',
                horario: '12:05',
                sinopse:'sinopse',
                img:'https://cdn.olivre.com.br/wp-content/uploads/2019/09/20190912-y5i92dqjh3m31.jpg',
                img_pipoca:'https://cdn-icons-png.flaticon.com/512/3439/3439699.png',
                img_water:'https://cdn-icons.flaticon.com/png/512/2745/premium/2745060.png?token=exp=1660483590~hmac=1397d0eef0280506ec7ba744324f8aa9',
                genero:'ação/aventura',
                dub:'Legendado',
                bebidas:'Agua',
                comidas:'Pipoca',
                chairs:[
                    {"id": 1, used: true},
                    {"id": 2, used: false},
                    {"id": 3, used: true},
                    {"id": 4, used: true},
                    {"id": 5, used: false},
                    {"id": 6, used: true},
                    {"id": 7, used: true},
                    {"id": 8, used: false},
                    {"id": 9, used: true},
                    {"id": 10, used: true},
                    {"id": 11, used: true},
                    {"id": 12, used: false},
                    {"id": 13, used: true},
                    {"id": 14, used: true},
                    {"id": 15, used: false},
                    {"id": 16, used: true},
                    {"id": 17, used: true},
                    {"id": 18, used: false},
                    {"id": 19, used: true},
                    {"id": 20, used: true},
                    {"id": 21, used: true},
                    {"id": 22, used: false},
                    {"id": 23, used: true},
                    {"id": 24, used: true},
                    {"id": 25, used: false},
                    {"id": 26, used: true},
                    {"id": 27, used: true},
                ]
                },
                {
                titulo: 'Baita 3',
                horario: '12:05',
                sinopse:'sinopse',
                img:'https://cdn.olivre.com.br/wp-content/uploads/2019/09/20190912-y5i92dqjh3m31.jpg',
                img_pipoca:'https://cdn-icons-png.flaticon.com/512/3439/3439699.png',
                img_water:'https://cdn-icons-png.flaticon.com/512/2892/2892731.png',
                genero:'Suspense',
                dub:'Dublado',
                bebidas:'Agua',
                comidas:'Pipoca',
                chairs:[
                    {"id": 1, used: true},
                    {"id": 2, used: false},
                    {"id": 3, used: true},
                    {"id": 4, used: true},
                    {"id": 5, used: false},
                    {"id": 6, used: true},
                    {"id": 7, used: true},
                    {"id": 8, used: false},
                    {"id": 9, used: true},
                    {"id": 10, used: true},
                    {"id": 11, used: true},
                    {"id": 12, used: false},
                    {"id": 13, used: true},
                    {"id": 14, used: true},
                    {"id": 15, used: false},
                    {"id": 16, used: true},
                    {"id": 17, used: true},
                    {"id": 18, used: false},
                    {"id": 19, used: true},
                    {"id": 20, used: true},
                    {"id": 21, used: true},
                    {"id": 22, used: false},
                    {"id": 23, used: true},
                    {"id": 24, used: true},
                    {"id": 25, used: false},
                    {"id": 26, used: true},
                    {"id": 27, used: true},
                    ]
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
                             <h3></h3>
                         </div>
                            </>
                         ))}                    
    </div>
    </div>}
    </Fragment>
    )
    
}

export default Catalogo;
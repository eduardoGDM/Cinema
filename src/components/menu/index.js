import React, { Fragment, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { MdChair } from "react-icons/md";

import "./style.css";

import waterImg from "../../images/water.png";
import popcornImg from "../../images/popcorn.png";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(0, 0, 0,)",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  p: 4,
};

const Menu = ({ data, show }) => {
  const [assentos, setAssentos] = useState([]);

  function pushChairs(e) {
    setAssentos((a) => [...a, e]);
    console.log(assentos);
  }

  const [countWater, setCountWater] = useState(0);

  function decreaseWater() {
    if (countWater - 1 >= 0) {
      setCountWater(countWater - 1);
    }
  }

  const [countPop, setCountPop] = useState(0);

  function decreasePop() {
    if (countPop - 1 >= 0) {
      setCountPop(countPop - 1);
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log("mudei o modal");
  }, []);

  return (
    <Fragment>
      
      <Button variant="text" onClick={() => show(false)}>
        voltar
      </Button>
      <div className="menu-container">
        <img src={data.img} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Filme: {data.titulo}</h1>
          <span>{data.dub}</span>
        </div>
        <div>
          <h1>Sessão: {data.horario}</h1>
          <span>Gênero:{data.genero}</span>
        </div>
      </div>
      <div className="assentos-container">
        <span>Escolha seus assentos :</span>
        <div className="chairs-container">
          {data.chairs.map((c) => {
            return (
              <div className="cadeirinha-div" onClick={(e) => pushChairs(c)}>
                <MdChair size="30px" color={c.used ? "#f6f6f6" : "#008000"} />
                <span className="cadeirinha">{c.id}</span>
              </div>
            );
          })}
        </div>
      </div>
      <span>Você deseja algum acompanhamento para a sessão?</span>
      <div className="store-container">
        <div>
          <img style={{ width: "50px" }} src={waterImg} />
          <p>{countWater} Água 250ml </p>
          <Button onClick={() => setCountWater(countWater + 1)}> +</Button>
          <Button onClick={() => decreaseWater()}>-</Button>
        </div>
        <div>
          <img style={{ width: "50px" }} src={popcornImg} />
          <p>{countPop} Pipoca</p>
          <Button onClick={() => setCountPop(countPop + 1)}> +</Button>
          <Button onClick={() => decreasePop()}> - </Button>
        </div>
        <div className="Modal-Container"> 
        <Button onClick={handleOpen}>Prosseguir</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <section
          sx={style}
          className="modal-card"
          onClick={() => handleClose()}
        >
          <div className="modal-card-show">
            <h1>Dados da Compra!!</h1>
            <div className="modal-inf">
            <p>Filme: {data.titulo}</p>
            <p>Gênero: {data.genero}</p>
            <p>{data.dub} </p>
            <p>Horario: {data.horario}</p>
            <p>Agua: {countWater}</p>
            <p>Pipoca: {countPop}</p>
            </div>
          </div>
        </section>  
      </Modal>
      </div>
      </div>
      
      <div>
        {assentos.map((ass, i) => (
          <Fragment>
            <h1>Seleção de compra</h1>  
            <p>Assentos selecionados:</p>
            <br/>
            <p>{ass.id}</p>

          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default Menu;

//como salvar nos cookies
//fazer a porra da pasgina

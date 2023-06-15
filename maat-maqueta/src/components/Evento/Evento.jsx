import React from "react";
import EventoEjemplo from "../../resources/img/EventoEjemplo.jpg";
import ArrowCircle from "../../resources/icons/arrow-right-circle.svg";
import Feed from "./Feed.jsx";
import "./evento.css";

//IMG
import user_circle from "../../resources/icons/user_circle.svg";
import puntoNegro from "../../resources/icons/puntoNegro.svg";
import heart from "../../resources/icons/heart.svg";
import retweet from "../../resources/icons/retweet.svg";
import comment from "../../resources/icons/comment.svg";
import eventoPost from "../../resources/img/eventoPost.jpg";


function Evento() {
  return (
    <div className="eventos">
      <div className="evento">
        <div>
          <img src={EventoEjemplo} alt="eventoEjemplo" />
        </div>
        <div className="eventoInfo">
          <h1>05 de junio</h1>
          <h2>Día mundial del medio hambiente</h2>
          <h3>
            Evento mundial del mediohambiente, inscribete para reunirte con
            gente que lucha contra el cambio climatico.
          </h3>
          <div className="verMas">
            <p>Ver mas</p>
            <img src={ArrowCircle} />
          </div>
        </div>
      </div>
      
      {/* <div className="postEventos">
        <hr />
        <div className="postEvento">
          <div className="post">
            <h6>
              <span>Main page</span> &#62; <span>Posts</span> &#62; Evento 1
            </h6>
            <h1 className="tituloPost">Titulo post</h1>
            <div className="iconosPosts">
              <h2 className="nombreUsuario">Nombre usu</h2>
              <img className="postIconosImg" src={puntoNegro} />
              <img className="postIconosImg" src={heart} />
              <img className="postIconosImg" src={retweet} />
              <img className="postIconosImg" src={comment} />
            </div>
            <img className="imgPost" src={eventoPost} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="insertarComentario">
            <div className="miUsuario">
              <div className="img">
                <img src={user_circle} />
              </div>
              <div className="info">
                <h1>My username</h1>
                <h2>Empresa</h2>
              </div>
            </div>
            <div className="comentario">
              <input type="text" placeholder="Escribe un comentario ..." />
            </div>
          </div>
          <div className="comentarios">
            <hr />
            <h1 className="comentariosH1">Comentarios</h1>
            <div className="comentarioPost">
              <div className="usuarioComentario">
                <div className="img">
                  <img src={user_circle} />
                </div>
                <div className="info">
                  <h1>User name</h1>
                  <h2>Empresa</h2>
                </div>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="iconosComentarios">
                <img className="postIconosImg" src="..." />
                <img className="postIconosImg" src="..." />
                <img className="postIconosImg" src="..." />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Feed></Feed>
    </div>
  );
}

export default Evento;

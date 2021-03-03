import React from 'react'
import './css/sidebar.css'

import profileAvatar from './images/profile_avatar.jpeg'
import buscarAmigos from "./assets/buscar_amigos.png";
import covidIcon from "./assets/covid.png";
import watch from './assets/watch.png'
import facebookLogo from "./assets/facebook_logo.png";
import grupos from "./assets/grupos.png";
import marketplace from "./assets/marketplace.png";
import eventos from "./assets/eventos.png";
import recuerdos from "./assets/recuerdos.png";
import guardado from "./assets/guardado.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src={profileAvatar} alt="" /> <span>Devce Code</span>
      </div>
      <ul>
        <li>
          <a href="#">
            <img src={covidIcon} alt="" /> Covid-19: Centro de información
          </a>
        </li>
        <li>
          <a href="#">
            <img src={buscarAmigos} alt="" /> Buscar Amigos
          </a>
        </li>
        <li>
          <a href="#">
            <img src={watch} alt="" /> Watch
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebookLogo} alt="" /> Te damos la bienvenida
          </a>
        </li>
        <li>
          <a href="#">
            <img src={grupos} alt="" /> Grupos
          </a>
        </li>
        <li>
          <a href="#">
            <img src={marketplace} alt="" /> Marketplace
          </a>
        </li>
        <li>
          <a href="#">
            <img src={eventos} alt="" /> Eventos
          </a>
        </li>
        <li>
          <a href="#">
            <img src={recuerdos} alt="" /> Recuerdos
          </a>
        </li>
        <li>
          <a href="#">
            <img src={guardado} alt="" /> Guardado
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar
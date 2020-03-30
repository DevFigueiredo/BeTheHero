import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import herosImg from '../../assets/heroes.png';
import logoSVG from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
export default function Logon() {
    return (
<div className="logon-container">


<section className="logon-container">
<img src={logoSVG} alt="Be The Hero"/>

<form action="/profile">
<h1>Faça seu Logon</h1>
<input placeholder="Digite o Usuário" type="text"/>
<button type="submit" className="button">Entrar</button>
<Link  className="link" to="/register" ><FiLogIn size={16} color="#E02041"/>Não tenho cadastro</Link>
</form>

</section>
<img src={herosImg} alt="Heroes "/>

</div>
      );
  }
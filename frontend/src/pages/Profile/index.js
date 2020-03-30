import React from 'react';
import { Link } from 'react-router-dom'
import {FiPower} from 'react-icons/fi';
import './style.css';
import logoSVG from '../../assets/logo.svg';


export default function Profile(){
    return(
        <div className="profile-container">
           <header>
           <img src={logoSVG} alt="Be Ther Hero"/>
           <span>Seja Bem Vindo(a), Daniel. </span>
           <Link className="button " to="/incidents/new" >Cadastrar Novo Caso</Link>
          <button><FiPower size={18} color="#E02041" /></button>
           </header>

        </div>

    );
}
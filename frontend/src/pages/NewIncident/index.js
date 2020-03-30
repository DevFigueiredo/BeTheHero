import React from 'react';
import { Link } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logoSVG from '../../assets/logo.svg';


export default function NewIncident(){
    return(
        <div className="incident-container">
       <div className="content">
      <section >
   <img src={logoSVG} alt="Be The Hero"/>
   <h1>Novo Incidente</h1>
   <Link className="link" to="/profile" ><FiArrowLeft size={16} color="#E02041" />Voltar para o Perfil</Link>
   
      </section>
   <form>
       <input placeholder="Titulo do Caso"/>
       <input placeholder="Valor Doado" />
       <textarea placeholder="Descrição">
           
           </textarea>       

   <button type="submit" className="button">Cadastrar</button>
   </form>
       </div>
   
        </div>
       );
}
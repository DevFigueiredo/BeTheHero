import React from 'react';
import { Link } from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi';
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
        <h1>Casos Cadastrados:</h1> 
         <ul>
             <li>
            <strong>Caso: </strong>
            <p>Caso Teste</p>
            <strong>Descrição:</strong> 
            <p>Ong XXXX resolvou conseguir dinheiro</p>
            <strong>Valor</strong>
            <p>R$ R$200,00</p>
             <button type="button"><FiTrash2 /></button>
             </li>

             <li>
            <strong>Caso: </strong>
            <p>Caso Teste</p>
            <strong>Descrição:</strong> 
            <p>Ong XXXX resolvou conseguir dinheiro</p>
            <strong>Valor</strong>
            <p>R$ R$200,00</p>
             <button type="button"><FiTrash2 /></button>
             </li>

             <li>
            <strong>Caso: </strong>
            <p>Caso Teste</p>
            <strong>Descrição:</strong> 
            <p>Ong XXXX resolvou conseguir dinheiro</p>
            <strong>Valor</strong>
            <p>R$ R$200,00</p>
             <button type="button"><FiTrash2 /></button>
             </li>
             
             <li>
            <strong>Caso: </strong>
            <p>Caso Teste</p>
            <strong>Descrição:</strong> 
            <p>Ong XXXX resolvou conseguir dinheiro</p>
            <strong>Valor</strong>
            <p>R$ R$200,00</p>
             <button type="button"><FiTrash2 /></button>
             </li>
         </ul>

        </div>

    );
}
import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import logoSVG from '../../assets/logo.svg';


export default function NewIncident(){
    return(
        <div className="incident-container">
       <div className="content">
      <section >
   <img src={logoSVG} alt="Be The Hero"/>
   <h1>Cadastro</h1>
   <p>Faça seu cadastro em nosso site e ajude a ONG mais proxima de sua cidade. Lutamos por um mundo melhor!</p>
   <Link className="link" to="/" >Voltar para o login</Link>
   
      </section>
   <form>
       <input placeholder="Nome da Ong"/>
       <input type="email" placeholder="Digite o e-email" />
       <input placeholder="Whatsapp" />
       
   <div className="input-group">
   <input placeholder="Cidade" />
   <input placeholder="UF" style={{width: 80}}/>
     </div>
   <button type="submit" className="button">Cadastrar</button>
   </form>
       </div>
   
        </div>
       );
}
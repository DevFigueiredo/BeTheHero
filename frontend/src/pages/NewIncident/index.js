import React,{useState} from 'react';
import { Link } from 'react-router-dom';
//import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logoSVG from '../../assets/logo.svg';

const [title, setTitle] = useState('');
const [value, setValue] = useState('');
const [description, setDescription] = useState('');
//const history = useHistory();

  async function HandleRegisterIncident(){
      try{
     const data = {title, value, description};
     console.log(data);
     
     
      }catch(error){

      }
  }


export default function NewIncident(){
    return(
        <div className="incident-container">
       <div className="content">
      <section >
   <img src={logoSVG} alt="Be The Hero"/>
   <h1>Novo Incidente</h1>
   <Link className="link" to="/profile" ><FiArrowLeft size={16} color="#E02041" />Voltar para o Perfil</Link>
   
      </section>
   <form onSubmit={HandleRegisterIncident}>
       <input placeholder="Titulo do Caso" value={title} onChange={e=>setTitle(e.target.value)}/>
       <input placeholder="Valor Doado" value={value} onChange={e=>setValue(e.target.value)}/>
       <textarea placeholder="Descrição" value={description} onChange={e=>setDescription(e.target.value)}>
           
           </textarea>       

   <button type="submit" className="button">Cadastrar</button>
   </form>
       </div>
   
        </div>
       );
}
//Importa o a Biblioteca do React e o UseState para usar no envio dos formulários 
import React, {useState} from 'react';
//Importa o Link para atualizar as páginas sem ter que recarrega-las apenas alterando a rota
//Importa o useHistory redirecionar o usuário sem recarregar a pagina 
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import logoSVG from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';


export default function Register(){
    //Armazena os dados que estão nos Inputs do HTML
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

   const history = useHistory();


  // Realiza todas as necessidades para enviar um cadastro novo no banco de dados
   async function HandleRegister(e){
     e.preventDefault();
     const data = {name, email, whatsapp, city, uf};
     console.log(data);

     try{
     const response = await api.post('ongs', data);
     alert(`Seu ID de Acesso ${response.data.id}`);
     //redireciona para a página inicial
     history.push('/')
     }catch(err){
         alert('Deu problema no cadastro, tente novamente');
     }
    }


    return(
     <div className="register-container">
    <div className="content">
   <section >
<img src={logoSVG} alt="Be The Hero"/>
<h1>Cadastro</h1>
<p>Faça seu cadastro em nosso site e ajude a ONG mais proxima de sua cidade. Lutamos por um mundo melhor!</p>
<Link className="link" to="/" ><FiArrowLeft size={16} color="#E02041" />Voltar para o login</Link>

   </section>
<form onSubmit={HandleRegister}>

    <input placeholder="Nome da Ong" value={name} onChange={e=>setName(e.target.value)}/>
    <input type="email" placeholder="Digite o e-email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <input placeholder="Whatsapp" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} />
    
<div className="input-group">
<input placeholder="Cidade" value={city} onChange={e=>setCity(e.target.value)}/>
<input placeholder="UF" style={{width: 80}} value={uf} onChange={e=>setUF(e.target.value)}/>
  </div>
<button type="submit" className="button">Cadastrar</button>
</form>
    </div>

     </div>
    );
}
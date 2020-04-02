//Importa o a Biblioteca do React e o UseState para usar no envio dos formulários 
import React, {useState} from 'react';
//Importa o Link para atualizar as páginas sem ter que recarrega-las apenas alterando a rota
//Importa o useHistory redirecionar o usuário sem recarregar a pagina 
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import logoSVG from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';


export default function NewIncident(){
    //Armazena os dados que estão nos Inputs do HTML
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
   const history = useHistory();


  // Realiza todas as necessidades para enviar um cadastro novo no banco de dados
  async function HandleRegisterIncident(e){
    e.preventDefault();
    try{
  const data = {title, value, description};
  const ongID = localStorage.getItem('ongID');

  
    await api.post('incidents',data ,{
    headers: {'Authorization': ongID}
          });
   history.push('/profile');
    }catch(error){
    console.log("Erro ao cadastrar este incidente:", error)
    }
}




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
       <textarea placeholder="Descrição" value={description} onChange={e=>setDescription(e.target.value)}>	</textarea>


<button type="submit" className="button">Cadastrar</button>
</form>
    </div>

     </div>
    );
}
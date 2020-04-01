import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';

import {FiPower, FiTrash2} from 'react-icons/fi';

import './style.css';
import logoSVG from '../../assets/logo.svg';



export default function Profile(){
    const [incidents, setIncidents ] = useState([]);
    const ongID = localStorage.getItem('ongID');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    useEffect(() => {
        api.get('/profile', {
            headers: {'Authorization': ongID}
                  })
          .then(response => {
            setIncidents(response.data)
          })
          .catch(function (error) {
            console.log("Problema ao retornar os dados da ONG"+error);
          });


    }, [ongID]);

    
    async function handleDeleteIncident(IncidentID){
     try{
         await api.delete(`incidents/${IncidentID}`, {
            headers: {'Authorization': ongID}
                  });

        //Faz uma varredura em todos os incidents armazenados, pois acabou de ser exluido um deles.          
        setIncidents(incidents.filter(incident => incident.id !== IncidentID));
     }catch{
         alert('Problema para deletar o caso')
     }
    }
  
 function handleLogout(ongID){
   localStorage.clear(); 
   history.push('/');
 }
      


    return(
        <div className="profile-container">
           <header>
           <img src={logoSVG} alt="Be Ther Hero"/>
            <span>Seja Bem Vindo(a), {ongName}. </span>
           <Link className="button " to="/incidents/new" >Cadastrar Novo Caso</Link>
          <button onClick={handleLogout} ><FiPower size={18} color="#E02041" /></button>
           </header>
        <h1>Casos Cadastrados:</h1> 
         <ul>
             {incidents.map(incident =>( 
            <li key={incident.id}>
            <strong>Caso: </strong>
            <p>{incident.title} </p>
            <strong>Descrição:</strong> 
            <p>{incident.description} </p>
            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)} </p>
             <button type="button" onClick={()=>handleDeleteIncident(incident.id)}><FiTrash2 /></button>
             </li>
             )) }

             
         </ul>

        </div>

    );
}
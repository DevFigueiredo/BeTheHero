import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './style.css';
import herosImg from '../../assets/heroes.png';
import logoSVG from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';
export default function Logon() {
    
    const [id,setID] = useState('');
    const history =  useHistory();

  async function handleLogin(e){
       e.preventDefault();
      
try{
const response = await api.post('session', {id});
localStorage.setItem('ongID', id);
localStorage.setItem('ongName', response.data.name)
history.push('/profile');
}catch(err){
alert('Falha no Login, ID inválido')
}
   }

   

    return (
<div className="logon-container">


<section className="logon-container">
<img src={logoSVG} alt="Be The Hero"/>

<form action="/profile" onSubmit={handleLogin}>
<h1>Faça seu Logon</h1>
<input placeholder="Digite seu ID" type="text" value={id} onChange={e=> setID(e.target.value)} />
<button type="submit" className="button">Entrar</button>
<Link  className="link" to="/register" ><FiLogIn size={16} color="#E02041"/>Não tenho cadastro</Link>
</form>

</section>
<img src={herosImg} alt="Heroes "/>

</div>
      );
  }
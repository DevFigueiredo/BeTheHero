## Be The Hero - Rocketseat
_Projeto desenvolvido na semana Omnistack da Rocketseat, com objetivo de aprender o universo Javascript, utilizadno as tecnologias NodeJS e ReactJS_

#### Para Executar o Projeto deve executar alguns scripts nos terminais.

> **Baixe o Projeto e Acesse a Pasta:**

> - git clone https://github.com/DevFigueiredo/BeTheHero

> - cd BeTheHero

> ##### Para Executar o BackEnd:
> - cd backend
> - npm install
> - npm start

> ##### Para Executar o FrontEnd:
> - cd frontend
> - npm install
> - npm start


> ## FrontEnd
> **Página de Login**
> 
> Endereço: http://seudominio:3000/
> 
>![Página de Login](login.png)
> 
> 
> **Página de Registrar**
> 
> Endereço: https://seudomnio:3000/register
> 
>![Página de Login](register.png)
>
> 
> 
> **Página do Perfil do Usuário**
> 
> Endereço: https://seudomnio:3000/profile
> 
>![Página de Login](profile.png)
>
> 
> 
> **Novo Incidente**
> 
> Endereço: https://seudomnio:3000/incidents/new
>
>![Página de Login](new_incident.png)





## BackEnd
> * [X] **Rota: Login da Ong**
>
> Método: post
>
> Endereço: http://seudominio:3333/session
>
> Controller: SessionController
> 
> **_#Todas as rotas abaixo precisam de uma sessão no localStorage armazenando os campos: ongID, ongName_**
> * [X] **Rota: Cadastro de Ong**
>
> Método: post
>
> Endereço: http://seudominio:3333/ongs
>
> Controller: OngController
> 
> * [X] **Rota: Consulta todas ONG's cadastradas**
>
> Método: get
>
> Endereço: http://seudominio:3333/ongs
>
> Controller: OngController
>  
> * [X] **Rota: Cadastra um Incidente**
>
> Método: post
>
> Endereço: http://seudominio:3333/incidents
>
> Controller: IncidentController
> 
> * [X] **Rota: Visualiza todos os Incidentes Cadastrados**
>
> Método: get
>
> Endereço: http://seudominio:3333/incidents
>
> Controller: IncidentController
> 
> * [X] **Rota: Deleta um incidente**
>
> Método: delete
>
> Endereço: http://seudominio:3333/incidents
>
> Controller: IncidentController
> 
> * [X] **Rota: Visualizar os dados de uma ONG**
>
> Método: get
>
> Endereço: http://seudominio:3333/profile
>
> Controller: ProfileController
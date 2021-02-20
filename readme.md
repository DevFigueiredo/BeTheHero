
## FrontEnd

![Página de Login](login.png)










## BackEnd
[checkbox:checked] #Rota: Login da Ong
Método: post
Endereço: http://seudominio:3333/session
Controller: SessionController

#Todas as rotas abaixo precisam seu uma sessão no localStorage
[x] #Rota: Cadastro de Ong
Método: post
Endereço: http://seudominio:3333/ongs
Controller: OngController

[x] #Rota: Consulta todas ONG's cadastradas
Método: get
Endereço: http://seudominio:3333/ongs
Controller: OngController
 
[x] #Rota: Cadastra um Incidente 
Método: post
Endereço: http://seudominio:3333/incidents
Controller: IncidentController

[x] #Rota: Visualiza todos os Incidentes Cadastrados
Método: get
Endereço: http://seudominio:3333/incidents
Controller: IncidentController

[x] #Rota: Deleta um incidente
Método: delete
Endereço: http://seudominio:3333/incidents
Controller: IncidentController

//Perfil da Ong
[x] #Rota: Visualizar os dados de uma ONG 
Método: get
Endereço: http://seudominio:3333/profile
Controller: ProfileController;
const connection = require('../database/connection.js');

module.exports = {
    
    //FUNCAO DE CRIAR INCIDENTE
    async create(request, response){
        const {title, description, value} = request.body;
      const ong_id = request.headers.authorization;
     const [id] = await connection('incidents').insert({
        title, 
        description,
        value, 
        ong_id  
     });
   
     return response.json({id});
    },


    
    //FUNCAO DE LISTAR INCIDENTES
    async index(request, response){
        
        const [countIncidents] = await connection('incidents').count();  
        response.header('X-TotalIncidents-Count', countIncidents['count(*)']);
        //Pega da url a pagina que deseja
        const {page = 1} = request.query;
        //Consulta os incidentes limitando a 5 itens apenas
        incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5).offset((page -1)*5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        
        return response.json(incidents);
    },
    
    
    //FUNCAO DE DELETAR INCIDENTE
    async delete(request, response){
        //Recebe o ID do Incidente que deseja 
        const {id} = request.params;
     //Consulta no banco de dados o (ID da Ong) que criou este incidente
       const incident = await connection('incidents').where('id', id).select('ong_id').first();

     //Verifica se o (ID da Ong) é o mesmo ID do Usuário autenticado no sistema
     if(incident.ong_id == request.headers.authorization){
        //Deleta o Incidente que deseja     
        await connection('incidents').where('id', id).delete();
        //Retorna o sucesso do delete com o status 201 sem Content
        return response.status(204).send();    
    } 
  //--------------------------------------------------------------------
    //Retorna o erro 401(Falha de Autenticação / Não Autorizado)
    return response.status(401).json({error: "Operation Not Permitted"});


    }
};
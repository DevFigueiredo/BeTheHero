const connection = require('../database/connection.js')

module.exports = {


 async index(request, response){
    //Recebe o Token Autenticado da Ong 
    ong_id = request.headers.authorization;
    //Consulta no banco de dados o (ID da Ong) que criou este incidente
    const incident = await connection('incidents').where('ong_id', ong_id).select('*');

  return response.json(incident);

}




    
}
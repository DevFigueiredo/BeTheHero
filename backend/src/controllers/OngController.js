const connection = require('../database/connection.js');
const crypto = require('crypto')

module.exports = {

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; //Quando for criar algum usuário, entao está recebendo atraves do metodo post 
        const buf = Buffer.alloc(4);  
        const id = crypto.randomFillSync(buf).toString('hex');
       console.log(id);
       await connection('ongs').insert({
           id,
           name,
           email,
           whatsapp, 
           city,
           uf,
       })
     
        //  const params = request.params; // Quando é passado obrigatóriamente após a / da rota exemplo users/:name.
        // const params = request.query; // Quando é passado por metodo de query a moda antiga ?nome=daniel&idade=18
     return response.json({id});   
    },

    async index(request, response){
        ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }

};
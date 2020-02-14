const db = require('../models/db.js');
const GetCategories = (request, response) => {
    try {
        let query = `SELECT 
                        A.id AS 'CategoryId',
                        A.name AS 'Name',
                        A.description AS 'Description' ,
                        A.status AS 'Status'
                    FROM category A 
                    ORDER BY id ASC`; // query database to get all the departments
        // execute query
        db.query(query, (err, result) => {
           if (err != null) response.status(500).send({ error: error.message });
           return response.json(result);
       });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
} 
const CreateCategories = (request, response)=>{
    console.log("ok");
    try{
        const Name= request.body.name;
        const Description= request.body.description;
        const Status= request.body.status;
        let query = `INSERT INTO category(name,description,status) VALUES ('${Name}','${Description}', ${Status})`;
        db.query(query, (err, result)=>{
            if(err !=null) response.status(500).send({error:error.message});
            return response.json(result);
        })
    }catch(error){
        if(error != null) response.status(500).send({error: error.message});
    }
}
const category = {
    GetCategories,
    CreateCategories
};

module.exports = category;

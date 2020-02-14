
const GetProducts = (request, response) => {
    try {
        let query = `SELECT
                            P.id AS 'ProductId',
                            P.name AS 'Name',
                            P.content AS 'Content',
                            P.price AS 'Price',
                            P.sale_price AS 'SalePrice',
                            P.image AS 'PrimaryImage',
                            P.category_id AS 'CategoryId',
                            C.name AS 'CategoryName'
                    FROM product P INNER JOIN category C ON P.category_id = C.id LIMIT ${request.query.PageNumber},${request.query.PageSize}`; // query database to get all the departments
        db.query(query, (err, result) => {
            if (err != null){
                response.status(500).send({ error: err.message });
            }
            let resultSet = {
                Products: result,
                Count: ''
            }
            let productCountQuery = `SELECT COUNT(P.id) AS 'ProductCount' FROM product P;`;
                db.query(productCountQuery, (err, result)=>{
                    if (err != null){
                        response.status(500).send({ error: err.message });
                    }
                    resultSet.Count= result;
                    return response.json(resultSet);
                });
       });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};


const GetProductDetailsById = (request, response) => {
    try {
        let query = `SELECT 
                        P.id AS 'ProductId',
                        P.name AS 'Name',
                        P.content AS 'Content',
                        P.price AS 'Price',
                        P.sale_price AS 'SalePrice',
                        P.image AS 'PrimaryImage',
                        P.category_id AS 'CategoryId',
                        C.name AS 'CategoryName'
                     FROM 
                        product P INNER JOIN category C ON P.category_id = C.id
                     WHERE P.id = ${request.query.productId}`; // query database to get all the departments

        // execute query
        db.query(query ,(err, result) => {
            if (err != null){
                response.status(500).send({ error: err.message });
            }
            let productDetails = result;
            return response.json(productDetails);

       });
    } catch (err) {
        if (err != null) {
            response.status(500).send({ error: err });
        }
    }
};
const CreateProduct = (request, response)=>{
    try{
       
        const name=request.body.name;
        const price=request.body.price;
        const sale_price= request.body.sale_price;
        const content = request.body.content;
        const category_id = request.body.category_id;
        if(!request.files){
            return response.status(400).send('No files were uploads');
        }else{

            var file = request.files.uploaded_image;
            var image_name = file.name;
            if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/gif' || file.mimetype == 'image/jpg'){
                file.mv('uploads/'+ file.name, function(err){
                   
                    if(err){
                         response.status(500).send({ error: err.message });
                    }else{
                        var sql = `INSERT INTO product(name, price, sale_price, content, category_id, image) VALUES('${name}', ${price}, ${sale_price}, '${content}',${category_id}, '${image_name}')`;
                        var query = db.query(sql, (err, res) => {
                            if(err != null ) {
                                return response.status(500).send({error:err});
                            }else{
                                return response.json(res);
                            }
                        });
                    }
                });
            }else{
                return response.status(500).send({error:'This format is not allowed'});
            }
        }
    }catch(err){
        if(err != null) {
            response.status(500).send({error:err});
        }
    }
}
const product = {
    GetProducts,
    GetProductDetailsById,
    CreateProduct
};

module.exports = product;
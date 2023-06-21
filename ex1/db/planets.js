
const pool = require('../connectPool');

exports.getAll = async function(req,res,next) {

    pool.query('SELECT * FROM Solar_System',(err,results) => {

        if(err) next(err);

        res.status(200).json(results);
        
    })
}
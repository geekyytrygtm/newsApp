const service = require("../services/common");

class CommonController{
    constructor(){}
    
    getTopHeadlines(req, res){
        service.getTopHeadlines()
        .then(result => {
            res.status(200).send(result);
          })
        .catch(err => res.status(500).send(err.message));
    }
}

module.exports = new CommonController();
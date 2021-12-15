const bcrypt = require('bcrypt');
const User = require('../user/userModel');


exports.hashPassword = async(req, res, next) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    }catch(err){
        console.log(err);
        res.status(500).send({message: 'oops... something broke'});
    }
};

exports.checkPassword = async(req, res, next) => {
    try{
        // finds an object with username = request-username
        const match = await User.findOne({username: req.body.username});
        console.log(match);
        if(match){
            const compare = await bcrypt.compare(req.body.password, match.password);
            if(compare){
                console.log('loggin successful');
                next();
            }else{
                console.log('fail');
            }
        }else{
            res.status(500).send({message: 'check password failed'});
            console.log('not worked');
        } 
    }catch(err){
        console.log(err);
    }
}
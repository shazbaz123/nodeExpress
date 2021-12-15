const User = require('./userModel');

exports.addUser = async (req, res) => {
    console.log(req.body);
    try{
        const newUser = new User(req.body);
        console.log(newUser);
        await newUser.save();
        res.status(200).send({message: 'Successfully added user', newUser});
    }catch(err){
        console.log(err);
        res.status(500).send({message: 'Help! I\'m stuck in the computer!'})
    }
};

exports.listUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).send({message: '...listed', users});
    }catch(err){
        console.log(err);
    }
}

exports.updateUser = async (req, res) => {
    try{
        const result = await User.findOneAndUpdate(req.body.filter, req.body.newData, {new: true});
        console.log(result);
        res.status(200).send({message: '...updated', result});
    }catch(err){
        console.log(err);
    }
}

exports.deleteUser = async (req, res) => {
    try{
        await User.deleteOne(req.body);
        res.status(200).send({message: '...deleted',});
    }catch(err){
        console.log(err);
    }
}

exports.welcome = async (req, res) => {
    try{
        const name = req.body.username;
        console.log(`welcome ${name}`);
        res.status(200).send({message: `welcome ${name}`});
    }catch(err){
        console.log('you are not welcome');
    }
}
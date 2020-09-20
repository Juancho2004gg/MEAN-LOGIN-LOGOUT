const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req,res,next) =>{
    //call for authenticate
    passport.authenticate('local',(err,user,info)=>{
    //error
    if(err)
        return res.status(400).json(err);
    //user authenticacion
    else if(user)
        return res.status(200).json({"token":user.generateJwt()}) ;
    //unknown user or wrong password
    else
        return res.status(404).json(info)    
    })(req,res)
}
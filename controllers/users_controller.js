const User = require('../models/user');
module.exports.profile = function(req,res){
    res.end('<h1>User Profile </h1>');
}
//signin page rendering 
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"codeial | SignUp "
    })
}

//signup page rendering 
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"codeial | SignIn "
    })
}

//creating user
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return
        }
         
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in finding user in signing up');
                    return
                }
                return res.redirect('/users/sign-in');  
            })
        }
        else{
            return res.redirect('back');
        }

        });
    }



//logging in a user
module.exports.createSession = function(req,res){
    // todo later
}
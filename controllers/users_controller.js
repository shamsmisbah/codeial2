const User = require('../models/user');

module.exports.profile = function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user_profile',{
                    title : " User Profile",
                    user : user
                })
            }else{
            return res.redirect('/users/sign-in');
            }
        });
    }
    else{
        return res.redirect('/users/sign-in');
    }
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
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return}
            
           if(user){
               //handle passwords that dont match
               if(user.password != req.body.password){
                return res.redirect('back');
               }
               //handle session creation
               res.cookie('user_id',user.id);
               return res.redirect('/users/profile');
           }
           
           else{
             //handle user/account not found in db
             return res.redirect('back');
           }
});
}
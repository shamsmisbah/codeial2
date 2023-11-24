module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',7);
    return res.render('home',{
        title:'HOME'
    });
}
//module.exports.actionName=fucntion(res,req){};
const express = require('express');
const app = express();
const port =8000;

app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));
app.listen(port,function(err){
if(err){
    console.log('error in connecting to server : ${err}');
}
console.log('Server  is running on port : ${port}');
});


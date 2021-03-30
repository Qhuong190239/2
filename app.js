var express = require('express')
var hbs = require('hbs')

var app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','hbs')

app.post('/sendDangky',(req,res)=>{
    let nameValue = req.body.txtName;
    let genderValue = req.body.Gender;
    let userInfo = {name:nameValue,Gender:genderValue};
    res.render('confirm',{model:userInfo}); 

//     res.write('Name: ' + nameValue)
//     res.write('\nGender: ' + genderValue);
//     res.end();
 })

app.get('/register',(req,res)=>{
    res.render('dangky')
})

app.get('/',(req,res)=>{
    res.render('index')
})

var PORT = process.env.PORT || 3000
app.listen(PORT)
console.log('server is running', PORT)
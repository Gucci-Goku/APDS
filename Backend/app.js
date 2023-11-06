const express = require('express')
const app = express();
const urlprefix = '/api'
const mongoose = require('mongoose')
const Task = require('./Model/task')
const fs = require('fs');
const route = require('./Routes/task')
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: {sslCA:cert}};

    const connstring = 'mongodb+srv://SamRam:vBzZTWnEhYAMuES7@cluster0.dhxgjl4.mongodb.net/?retryWrites=true&w=majority'
    const taskModel = require('./Model/task')
    const userModel = require('./Model/user')
    const taskRoute = require('./Routes/task')
    const userRoute = require('./Routes/userReg')
mongoose.connect(connstring).then(()=>{console.log('Connected :-')})
.catch((error)=>{
    console.log('NOT connected :-('+error)
},options);

app.use(express.json())
app.use((reg,res,next)=>
{
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
 res.setHeader('Access-Control-Allow-Methods', '*');
 next();
});


app.use(urlprefix+'/task',taskRoute)
app.use(urlprefix+'/users',userRoute)

app.use(urlprefix+'/tasks', route)

module.exports = app;
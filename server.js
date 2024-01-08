const express=require('express')
require('./config/db');
const quesroute=require('./route/question');
const optionroute=require('./route/option');

const app=express();
app.use(express.json());


console.log("working fine");
app.use('/',quesroute);
app.use('/',optionroute);

app.listen('5000');
console.log('app is running on port')

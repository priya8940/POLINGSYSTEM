const express=require('express');
const optionRouter=express.Router();
const optntnctrlr=require('../controller/optionCtrlr');

//v1/options/questions/q_id
optionRouter.post('/questions/:id',optntnctrlr.createOption);

module.exports=optionRouter;
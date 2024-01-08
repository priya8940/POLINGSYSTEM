const express=require('express');
const optionRouter=express.Router();
const optntnctrlr=require('../controller/optionCtrlr');

//v1/options/questions/q_id
optionRouter.post('/questions/:id/options/create',optntnctrlr.createOption);
optionRouter.put('/options/:id/add_vote',optntnctrlr.addVote);
optionRouter.get('/getAllOptions',optntnctrlr.getAllOptions);
optionRouter.delete('/options/:id/delete',optntnctrlr.deleteOption);

module.exports=optionRouter;
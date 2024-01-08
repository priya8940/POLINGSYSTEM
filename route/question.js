const express=require('express');
const queRouter=express.Router();
const quetnctrlr=require('../controller/questionCtrlr');

queRouter.post('/questions/create',quetnctrlr.createQue);
queRouter.get('/questions/getAllQuestions',quetnctrlr.getAllQue);
queRouter.delete('/questions/:id/delete',quetnctrlr.deleteQue);
queRouter.get('/questions/:id',quetnctrlr.populateOptions);


module.exports=queRouter;
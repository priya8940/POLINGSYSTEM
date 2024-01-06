const express=require('express');
const queRouter=express.Router();
const quetnctrlr=require('../controller/questionCtrlr');

queRouter.post('/create',quetnctrlr.createQue);

module.exports=queRouter;
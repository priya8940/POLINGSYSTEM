const queModel = require('../models/question');
const optionModel = require('../models/option');

module.exports.createQue =async (req, res)=>{
   
    const {title,options}=req.body;
    console.log(title);
    let saveQue;
    saveQue = await queModel.create({
            'title': title,
             'options':options,
             
        })
    res.status(201);
        res.json({
            'status_code':201,
            'message': 'question has been created successfully',
            'title': saveQue
        });
    return saveQue;
    
}
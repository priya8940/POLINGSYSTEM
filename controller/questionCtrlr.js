const queModel = require('../models/question');
module.exports.createQue =async (req, res)=>{
   
    const {title}=req.body;
    console.log(title);
    let question = await queModel.create({
            'title': title
             
        })
    res.status(201);
        res.json({
            'status_code':201,
            'message': 'question has been created successfully',
            'question': question
        });
    return res;
    
}
module.exports.getAllQue =async (req, res)=>{
    let questions = await queModel.find();
    res.status(200);
        res.json({
            'status_code':200,
            'message': 'question has been created successfully',
            'questions': questions
        });
    return res;
    
}
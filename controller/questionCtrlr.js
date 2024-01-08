const queModel = require('../models/question');
const optionModel=require('../models/option');
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
            'message': 'question has been fetched successfully',
            'questions': questions
        });
    return res;
    
}
module.exports.deleteQue =async (req, res)=>{
    let queId=req.params.id;
    let deletedQuestion = await queModel.findByIdAndDelete(queId);
     //delte all option one by one
     let optionsArr=deletedQuestion.options;
     for(let optionId of optionsArr){
        await optionModel.findByIdAndDelete(optionId); 
     }
    res.status(200);
        res.json({
            'status_code':200,
            'message': 'question has been deleted successfully',
            'questions': deletedQuestion
        });
    return res;
    
}
module.exports.viewQuestion=async (req,res)=>{
    const questionId = req.params.id;
    const question= await queModel.findById(questionId).populate('options');
    if(!question){
        res.json({
            'status_code':404,
            'message': 'oops question not found',
        });
        return res;
    }
    res.json({
        'status_code':200,
        'question':question
       })
       return res;

}
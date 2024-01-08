const option = require('../models/option');
const optionModel = require('../models/option');
const queModel = require('../models/question');

module.exports.createOption =async (req, res)=>{
    const id=req.params.id;
    const {text}=req.body;
    //console.log(text);
    let option = await optionModel.create({
            'text': text,
            'q_id':id 

        })
        //save options id in question table
        let question= await queModel.findById(id);
        question.options.push(option._id);
        await question.save();
        
        //addd the link for vote
        let savedOption=await optionModel.findById(option._id)
        let url=`http://localhost:8000/options/${option._id}/add_vote`;
        savedOption.link_to_vote=url;
        await savedOption.save();
    res.status(201)
        res.json({
            'status_code':201,
            'message': 'option has been addded successfully',
            'option': savedOption
        });
    return res;
}
module.exports.addVote =async (req, res)=>{
    const id=req.params.id;

   //find option by id
     let option=await optionModel.findById(id);
     option.votes=option.votes+1;
     await option.save(); 
    res.status(203)
        res.json({
            'status_code':201,
            'message': 'vote has been addded successfully',
            'option': option
        });
    return res;
}
module.exports.getAllOptions =async (req, res)=>{
     let options=await optionModel.find();
    res.status(200)
        res.json({
            'status_code':200,
            'message': 'options has been fetched successfully',
            'option': options
        });
    return res;
}
module.exports.deleteOption=async (req,res)=>{
    let id=req.params.id;
    let option = await optionModel.findByIdAndDelete(id);
    let qId=option.q_id;
    let question=await queModel.findById(qId);
     let optionIdArr=question.options;

     for(let i=0; i<optionIdArr.length; i++){
        if(optionIdArr[i].toString()==option._id.toString()){
            question.options.splice(i,1);
        }
     }
     await question.save(); 
    res.json({
            'status_code':204,
            'message': 'option has been deleted successfully',
            'option': option
        });
    return res;
}
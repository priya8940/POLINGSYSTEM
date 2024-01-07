const optionModel = require('../models/option');
const queModel = require('../models/question');

module.exports.createOption =async (req, res)=>{
    const id=req.params.id;
    const {text}=req.body;
    //console.log(text);
    let option = await optionModel.create({
            'text': text     
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
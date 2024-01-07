//creating schema 
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    options:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'option' 
        
        
    }],
 },
    {
        timestamps:true,
});
const question=mongoose.model('question',userSchema);
module.exports=question;
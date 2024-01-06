//creating schema 
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    options:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'Option' 
        
        
    }],
    totalVotes: {
        type: Number,
        default: 0,
      },
 },
    {
        timestamps:true,
});
const question=mongoose.model('question',userSchema);
module.exports=question;
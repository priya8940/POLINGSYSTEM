//creating schema 
const mongoose=require('mongoose');
const optionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true

    },
    votes:{
         type:Number,
         required:false,
         default:0

    },
    link_to_vote:{
        type:String,
        required:false
    },
    q_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'question' 
    }
  
},
    {
        timestamps:true,
});
const option=mongoose.model('option',optionSchema);
module.exports=option;
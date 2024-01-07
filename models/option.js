//creating schema 
const mongoose=require('mongoose');
const optionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true

    },
    votes:{
         type:String,
         required:false,
         default:0

    },
    link_to_vote:{
        type:String,
        required:false
    },

  
},
    {
        timestamps:true,
});
const option=mongoose.model('option',optionSchema);
module.exports=option;
//creating schema 
const mongoose=require('mongoose');
const optionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true,
        unique:true

    },
    votes:{
         type:String,
         required:true,

    },
    link_to_vote:{
        type:String,
        required:true
    },

  
},
    {
        timestamps:true,
});
const option=mongoose.model('option',optionSchema);
module.exports=option;
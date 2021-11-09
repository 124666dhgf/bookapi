const mongoose = require('mongoose'); 
 const bookSchema= mongoose.Schema({ 
     title:{
          type:String, 
          required:true,
         },
    price:{
      type:Number, 
      required:true 
    },
     author:{
          type:String, 
          require:true
        },
        publisher:{
          name:{
          type:String,
          required:true},
             city:{
               type:String,
               required:true
              }
        } 
        });

 module.exports=mongoose.model('Books',bookSchema); 
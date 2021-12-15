const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true,

  },
 phone_number :{
   type:Number,
   required:true,

  },
  CIN:{
    type:Number,
    required:true,
  },
  City:{
    type:String,
    required:true,
  }
})

module.exports = user=mongoose.model('user',userSchema)
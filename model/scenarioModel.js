const mongoose = require('mongoose')
//sagaranumaa
const scenarioSchema =  mongoose.Schema({
  firstName: {
      type: "String",
      required: [true,'Please add a firstName']
     },
  lastName:{
      type: "String",
      required: [true,'Please add a lastName']
     },
  email:{
      type: "String",
      required: [true,'Please add a Email']
     },
  phone:{
      type: "Number",
      required: [true,'Please add a phone Number']
     },
  })

module.exports = mongoose.model('scenario',scenarioSchema)
const mongoose = require('mongoose')

//Schema 
const CompanySchema = new mongoose.Schema ({
    name:String,
    price:Number,
    category:String,
    userId:String,
    company:String
})

//collections 
const Companydata= mongoose.model('CompanyProduct',CompanySchema);

module.exports= Companydata;
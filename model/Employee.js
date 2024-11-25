const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Mendatory"]
    },
    email:{
        type:String,
        required:[true,"Email Field is Mendatory"]
    },
    phone:{
        type:String,
        required:[true,"Phone Field is Mendatory"]
    },
    designation:{
        type:String,
        required:[true,"Designation Field is Mendatory"]
    },
    salary:{
        type:Number,
        required:[true,"Number Field is Mendatory"]
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    }
})
const Employee = new mongoose.model("Employee",EmployeeSchema)

module.exports = Employee
/**
 * Define the schema of students collection to be
 * stored in DB
 */
const mongoose=require('mongoose')

//ADD schema & Vallidation and check for all schema,and 
//only if check pass then data store in DB
const studentSchema=new mongoose.Schema({
    name:{
        type:String, // type,required :- constraint
        required:true // required:- mandotary field
    },
    age:{
        type:Number,
        min:19
    },
    email:{
        type:String,
        required :true,
        lowercase:true,
        minLength:15
    },
    subjects:[String],

    // createdAt:{
    //     type:Date,
    //     immutable:true,
    //     default:()=>{
    //         return Date.now()
    //     }
    // }

},{versionKey:false,timestamps:true} // Additional,who removes the version field )
    //timestamps:Add time stamps by default ,1.created & 2. updatedted
)
//Go ahead & create corresponding collection in DB
module.exports=mongoose.model("student",studentSchema) // student :- create a collections for students  // studentSchema:- schema of the document
//module.exports:-model ko module me convert kr diye taki kahi bhi use/called  kr ske    


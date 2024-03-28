const mongoose=require('mongoose')
//const studentModel=require("./Models/student_model")
const studentModel=require("./Models/student_model1")
/**
 * Write the code to connect Mongoose
 */

mongoose.connect("mongodb://localhost:27017/BackendDevelopment_Demo_db")

//Order to connect two possible case
const db=mongoose.connection

db.once("error",()=>{
    console.log("Error while connecting to Db");
    });
db.on("open",()=>{
    console.log("Connected to mongoDB");

    //Logic to insert data into the db
    init() // ek function bana liya init name se

    //Running the queries on MongoDB
    dbQueries()
})    

 async function init(){
    //logic to insert data in the db
    const student={
        name:"Jay",
        age:23,
        email:"rajjay123@gmail.com",
        subjects:["Maths" , "English"]
    }

    const std_obj=await studentModel.create(student) // await use kiye h taki yaha wait kr ske
    //ar await use krne ke liye function me async use krna h

    console.log(std_obj);
}


async function dbQueries(){
    // Read the student data based on the Id
     console.log("Insidethe dbQueries function");
    try{
    //Read the student data based on the id
    const student=await studentModel.findById("65d9e07cd799fa634943337a")
    console.log(student);

    }catch(err){
        console.log(err);
    }

    //I want to go and search based on Name
    try{
    const student=await studentModel.find({name:"Jay"})
    console.log(student);
    }catch(err){
        console.log(err);
    }

    /**
 * Deal with the Multiple Condition
 */
const stds=await studentModel.where("age").gt("10").where("name").equals("Jay").limit(2)
console.log(stds);

/**
 * Delete one document where name ="Jay"
 */
const student=await studentModel.deleteOne({name:"Jay"})
console.log(student);
}

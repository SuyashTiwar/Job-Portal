import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide Job Title!"],
        minLength: [3, "Job title must contain at least 3 Characters!"],
        maxLength: [30, "Job title cannot exceed 30 Characters!"],
      },
      description: {
        type: String,
        required: [true, "Please provide Job description!"],
            minLength: [50, "Job description must contain at least 50 Characters!"],
            maxLength: [350, "Job description cannot exceed 350 Characters!"],
      },
      category: {
        type: String,
        required: [true, "Please provide Job category"],
        
      },
      country:{
        type: String,
        required: [true, "Please provide country"],
      },
      city:{
        type: String,
        required: [true, "Please providecity"],
      },
      location:{
        type: String,
        required: [true, "Please provide location"],
        minLength:[10,"Job location must contain atleast 50 character"]
      },
      fixedSalary:{
        type:Number,
        minLength:[4,"Fixed salary must conatain atleast 4 digits"],
        maxLength:[9,"can't exceed than 9 digit"]
      },
      salaryFrom:{
        type:Number,
        minLength:[4,"salary from  must conatain atleast 4 digits"],
        maxLength:[9,"can't exceed than 9 digit"]
      },
      salaryTo:{
        type:Number,
        minLength:[4,"salary To  must conatain atleast 4 digits"],
        maxLength:[9,"Salary can't exceed than 9 digit"]
      },
      expired:{
        type:Boolean,
        default:false,
      },
      jobPostedOn:{
        type:Date,
        default:Date.now,
      },
      postedBy:{//targetting it by id
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:[true,]

      },
});
export const Job= mongoose.model("Job",jobSchema)
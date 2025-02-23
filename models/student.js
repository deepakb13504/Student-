import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  dob: {
    type: String, 
    required: true, 
  },
  age: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false, 
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;

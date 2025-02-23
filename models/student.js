import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // ✅ Fixed typo
  },
  dob: {
    type: String, // ✅ Fixed typo (was `typr`)
    required: true, // ✅ Fixed typo (was `require`)
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
    required: false, // This can be optional
  },
});

const Student = mongoose.model("Student", studentSchema); // ✅ Fixed reference

export default Student;

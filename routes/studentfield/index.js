import { Router } from "express";
import Student from "../../models/student.js"; // Ensure correct import path

const router = Router();

// Create a new student
router.post("/post", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send("Student created successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all students
router.get("/get", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a student by ID
router.put("/put/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).send("Student not found");
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a student by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).send("Student not found");
    }

    res.status(200).send("Student deleted successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

import { Router } from "express";
import Student from "../../models/student.js"; 

const router = Router();

router.post("/post", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send("Student created successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/get", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
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

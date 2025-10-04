import { Router } from "express";
import {
  createStudent,
  listStudents,
  getStudentById,
} from "../controllers/studentController.js";

const router = Router();

router.post("/students", createStudent);
router.get("/students", listStudents);
router.get("/students/:id", getStudentById);

export default router;

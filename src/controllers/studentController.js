import { firstNonRepeatedChar } from "../utils/stringUtils.js";

export let students = [
  { id: 1, name: "Bruno", grade: 10 },
  { id: 2, name: "Gabriel", grade: 9 },
  { id: 3, name: "Anna", grade: 0 },
];

export const createStudent = async (req, res) => {
  const { name, grade } = req.body;
  if (!name || grade == null) {
    return res
      .status(400)
      .json({ mensagem: "Precisa preencher nome e nota do estudante" });
  }
  if (grade < 0 || grade > 10) {
    return res
      .status(400)
      .json({ mensagem: "A nota precisa estar entre 0 e 10" });
  }
  const newStudent = { id: students.length + 1, name, grade };
  await new Promise((resolve) => setTimeout(resolve, 500));
  students.push(newStudent);
  res.status(201).json(newStudent);
};

export const listStudents = async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const payload = students.map((student) => ({
    ...student,
    firstNonRepeatedLetter: firstNonRepeatedChar(student.name),
  }));
  res.json(payload);
};

export const getStudentById = async (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((candidate) => candidate.id === id);
  if (!student) {
    return res.status(404).json({ mensagem: "Estudante não encontrado" });
  }
  student.firstNonRepeatedLetter = firstNonRepeatedChar(student.name);
  res.json(student);
};

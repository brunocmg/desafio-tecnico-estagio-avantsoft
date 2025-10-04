import express from "express";
import usersRouter from "./routes/student.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

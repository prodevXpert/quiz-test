const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5001;
const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const quizRouter = require("./routes/quizRoutes");
app.use("/api/quiz", quizRouter);

const questionRouter = require("./routes/questionRoutes");
app.use("/api/question", questionRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



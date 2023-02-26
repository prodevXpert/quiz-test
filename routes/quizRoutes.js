const { Router } = require("express");
const { createQuiz, getAllQuiz, getQuizById, editQuiz, deleteQuiz } = require("../services/quizServices");

const router = Router();

router.route("/").post(createQuiz);
router.route("/").get(getAllQuiz);
router.route("/:id").get(getQuizById);
router.route("/:id").put(editQuiz);
router.route("/:id").delete(deleteQuiz);



module.exports = router;

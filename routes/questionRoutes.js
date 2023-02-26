const { Router } = require("express");
const { createQuestions, getAllQuestions, getQuestionById, editQuestion, deleteQuestion } = require("../services/questionServices");

const router = Router();

router.route("/").post(createQuestions);
router.route("/").get(getAllQuestions);
router.route("/:id").get(getQuestionById);
router.route("/:id").put(editQuestion);
router.route("/:id").delete(deleteQuestion);



module.exports = router;

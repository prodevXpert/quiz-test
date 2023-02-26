const pool = require("../db/pool");

exports.createQuestions = async (req, res) => {
    const { quiz_id, question, correct_answer } = req.body;
    console.log(quiz_id, question, correct_answer);
    try {
        const Question = await pool.query("insert into question (quiz_id, question, correct_answer) Values($1,$2,$3)", [
            quiz_id, question, correct_answer
        ]);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: Question.rows[0],
            message: "Question created successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Question creation failed"
        });
    }
}

exports.getAllQuestions = async (req, res) => {
    try {
        const Question = await pool.query("select * from question");
        res.status(200).json({
            sucess: true,
            errors: null,
            data: Question.rows,
            message: "Question fetched successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Question fetch failed"
        });
    }
}

exports.getQuestionById = async (req, res) => {
    const { id } = req.params;
    try {
        const Question = await pool.query("select * from question where id=$1", [
            id
        ]);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: Question.rows[0],
            message: "Question fetched successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Question fetch failed"
        });
    }
}

exports.editQuestion = async (req, res) => {
    const { question, correct_answer } = req.body;
    const { id } = req.params;
    try {
        const questionRes = await pool.query("update question set question=$1, correct_answer=$2 where id=$3 returning *", [
            question, correct_answer, id
        ]);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: questionRes.rows[0],
            message: "question updated successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "question update failed"
        });
    }
}

exports.deleteQuestion = async (req, res) => {
    const { id } = req.params;
    try {
        const question = await pool.query("delete from Question where id=$1 returning *", [
            id
        ]);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: question.rows[0],
            message: "Question deleted successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "question delete failed"
        });
    }
}

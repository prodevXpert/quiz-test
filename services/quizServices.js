const pool = require("../db/pool");

exports.createQuiz = async (req, res) => {
    const { name, description } = req.body;
    console.log(name, description);
    try {
        const quiz = await pool.query("insert into quiz (name, description) Values($1,$2)", [
            name, description
        ]);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: quiz.rows[0],
            message: "Quiz created successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Quiz creation failed"
        });
    }
}

exports.getAllQuiz = async (req, res) => {
    try {
        const quiz = await pool.query("select * from quiz");
        res.status(200).json({
            sucess: true,
            errors: null,
            data: quiz.rows,
            message: "Quiz fetched successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Quiz fetch failed"
        });
    }
}

exports.getQuizById = async (req, res) => {
    const { id } = req.params;
    try {
        const quiz = await pool.query("select * from quiz where id=$1", [
            id
        ]);
        console.log(quiz.rows);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: quiz.rows[0],
            message: "Quiz fetched successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Quiz fetch failed"
        });
    }
}

exports.editQuiz = async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;
    try {
        const quiz = await pool.query("update quiz set name=$1, description=$2 where id=$3 returning *", [
            name, description, id
        ]);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: quiz.rows[0],
            message: "Quiz updated successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Quiz update failed"
        });
    }
}

exports.deleteQuiz = async (req, res) => {
    const { id } = req.params;
    try {
        const quiz = await pool.query("delete from quiz where id=$1", [
            id
        ]);
        res.status(200).json({
            sucess: true,
            errors: null,
            data: quiz.rows[0],
            message: "Quiz deleted successfully"

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            errors: error,
            date: null,
            message: "Quiz delete failed"
        });
    }
}

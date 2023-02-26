const pools = require("../db/pool");

exports.addNewUser = async (NewUser, socketId) => {
    console.log("newUser", NewUser.username);
    const DatasetsInDbQuery = await pools.query(
        "SELECT * FROM online_user WHERE username='" + NewUser.username + "'"
    );
    DatasetsInDb = DatasetsInDbQuery.rows;
    if (!DatasetsInDb.length) {
        const DatasetsInDbQuery2 = await pools.query(
            "INSERT INTO online_user(username,socket_id) VALUES($1,$2)",
            [NewUser.username, socketId]
        );
    } else {
        const DatasetsInDbQuery3 = await pools.query(
            "UPDATE online_user SET socket_id ='" +
            socketId +
            "' WHERE username='" +
            NewUser.username +
            "'"
        );
    }
    // !onlineUsers.some((user) => user.user_id === NewUser.user_id) &&
    //   onlineUsers.push({ user: NewUser, socketId });
};

exports.removeUser = async (socketId) => {
    const DatasetsInDbQuery4 = await pools.query(
        "DELETE FROM online_user WHERE socket_id ='" + socketId + "'"
    );
    // onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

exports.getUser = async (TargetUser) => {
    console.log("TargetUser", TargetUser);
    const DatasetsInDbQuery = await pools.query(
        `SELECT * FROM online_user WHERE username='${TargetUser}'`
    );
    DatasetsInDb = DatasetsInDbQuery.rows[0];
    console.log("DatasetsInDbQuery.rows[0]", DatasetsInDbQuery.rows[0]);
    return DatasetsInDb;
    // return onlineUsers.find((user) => user.user.user_id == TargetUser.user_id);
};


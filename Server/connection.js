const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "food_ordering_system",
    multipleStatements: true

});
mysqlConnection.connect((err) => {
    if (!err) console.log("Connection Success ...");
    else console.log("Connection Error ...");
});

module.exports = mysqlConnection;
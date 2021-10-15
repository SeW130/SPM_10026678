const express = require("express");
// const { Router } = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

Router.get("/", (req, res) => {

    mysqlConnection.query("SELECT * FROM `user`", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err)
    })
})

Router.post("/", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    fName = req.body.fName;
    lName = req.body.lName;
    email = req.body.email;
    password = req.body.password;
    contactNo = req.body.contactNo;

    mysqlConnection.query("INSERT INTO `user` (`id`,  `fName`,`lName`,`email`, `password`, `contactNo`) VALUES (NULL, '" +fName + "', '" +lName + "', '" + email + "', '" + password + "', '" + contactNo  + "');", (err, rows, fields) => {
            if (!err) {
                response = {
                    success: true,
                };
                console.log(response);
                res.end(JSON.stringify(response));
            } else {
                response = {
                    success: false,
                };
                console.log(err);
                console.log(response);
                console.log(req.body);
                res.end(JSON.stringify(response));
            };
        })

})

Router.post("/auth", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    email = req.body.email;
    password = req.body.password;

    mysqlConnection.query("SELECT * FROM `user` WHERE `email`='" + email + "' AND `password`='" + password + "' ", (err, rows, fields) => {
        if (!err && rows[0] != undefined ) {
            response = {
                success: true,
                dataset: rows
            };
        
            console.log(rows[0] );
            res.end(JSON.stringify(response));
        } else {console.log(err)
            response = {
                success: false
               
            };
            res.end(JSON.stringify(response));
        }
    })
})

module.exports = Router;
const express = require("express");
// const { Router } = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

Router.get("/", (req, res) => {

    mysqlConnection.query("SELECT * FROM `item`", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err)
    })
})

// Router.get("/:item", urlencodedParser, (req, res) => {

//      console.log(req.params.id);
//     item = req.params.item;

//     mysqlConnection.query("SELECT `item`.`id`,`item`.`serialNo`,`item`.`name`,`item`.`qty`,`item`.`sellingPrice`,`item`.`description`,`store`.`name` AS `store` FROM `item` ,`store` WHERE `item`.`shop`=`store`.`id` AND `item`.`id`='" + item + "'", (err, rows, fields) => {
//         if (!err) res.send(rows);
//         else console.log(err)
//     })
// })

// Router.post("/search", urlencodedParser, (req, res) => {
//     res.setHeader('Content-Type', 'application/json');

//     key = req.body.key;
//     console.log(key );
//     mysqlConnection.query("SELECT * FROM `item` WHERE `name` LIKE '%" + key + "%'; ", (err, rows, fields) => {
//         if (!err && rows[0] != undefined ) {
//             response = {
//                 success: true,
//                 dataset: rows
//             };
        
//             console.log(rows[0] );
//             res.end(JSON.stringify(response));
//         } else {console.log(err)
//             response = {
//                 success: false
               
//             };
//             res.end(JSON.stringify(response));
//         }
//     })
// })

Router.post("/", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
     console.log(req.body);
   
    userId = req.body.user;
    item = req.body.item;
    qty = req.body.qty;
   

    mysqlConnection.query("INSERT INTO `order_item` (`user`, `item`, `qty`)     VALUES (   '" + userId + "', '" + item + "', '" + qty + "'); ", (err, rows, fields) => {
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
            res.end(JSON.stringify(response));
        };
    })

})   

module.exports = Router;
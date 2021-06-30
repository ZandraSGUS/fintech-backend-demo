const mysql = require("mysql");

const properties = {
    host: "34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: 3306,
    database: "market",    
};

let connection = mysql.createConnection(properties);

connection.connect((error) => {
    if (error) {
        console.error("Connection to MySQL failed! \n" + error);
    } else {
        console.log("Connected to MySQL!");
    }
});

module.exports = {
    connection,
};


// connection.query(
//    `select * from products`,
//    (error, result) => {
//        if(error){
//            console.log(error);
//        }
//        else{
//            console.log(result);
//        }
//    }
//);

// alternatively: console.log(result[0].name)); // print one result and the name field

// press control + C to run the terminal againx
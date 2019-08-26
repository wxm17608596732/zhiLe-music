const  express = require('express');
const  bodyParser = require('body-parser');
const mysql = require('mysql');
const fs = require('fs');
const cookie = require('cookie-parser');
const  app = express();

//CORS：允许跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


const connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '123456',
database : 'musicplayer'
});
connection.connect();

//启用中间件，接受post过来的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/recom', function(req, res) {
   //接收get过来的值
    let sql = `SELECT * FROM form WHERE 1 LIMIT 15`;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
})
app.get('/musicForm', function(req, res) {
   //接收get过来的值
   
    let sql = `SELECT * FROM form`;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
})
app.get('/classify', function(req, res) {
   //接收get过来的值
   let fId=req.query.id;
   let fTitle=req.query.Title;
// console.log(fTitle);
// console.log(fId);
	let sql = "SELECT * FROM form WHERE f_language='"+fTitle+"' or mood='"+fTitle+"' or f_style='"+fTitle+"'" ;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
})
app.get('/getForm', function(req, res) {
   //接收get过来的值
   let fId=req.query.id;
// console.log(fId);
	let sql = `SELECT * FROM form WHERE f_id=`+fId;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
})
app.get('/getSongs', function(req, res) {
   //接收get过来的值
   let fId=req.query.id;
	let sql = `SELECT * FROM music WHERE f_id=`+fId;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
})
app.get('/getMusic', function(req, res) {
   //接收get过来的值
   let mId=req.query.id;
	let sql = `SELECT * FROM music WHERE m_id=`+mId;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
})
app.get('/getComment', function(req, res) {
   //接收get过来的值
   let mId=req.query.id;
	let sql = `SELECT * FROM comm WHERE m_id=`+mId;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
})

//登录注册部分
app.get('/validate',function(req,res){
	//接收get过来的值
	let userName=req.query.user;
	let sql = "SELECT * FROM users WHERE u_name='"+userName+"'";
	connection.query(sql, (err,results)=>{
		res.json(results);
	});
})
app.get('/enter',function(req,res){
	//接收get过来的值
	let uname=req.query.userN;
	let upwd=req.query.userP;
	let sql = "SELECT * FROM users WHERE u_name='"+uname+"' and u_pwd='"+upwd+"'";
	connection.query(sql, (err,results)=>{
		res.json(results);
	});
})

app.listen(8888);
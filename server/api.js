const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    
});  //数据库连接

module.exports = {
  getValuenews(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM newslist' : sqlMap.getValuenews //三元表达式，如果是不传输ID 则输出全文
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },  //获取新闻列表
  getValuedetail(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM phoneidea' : sqlMap.getValuedetail
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },  //获取手机参数
  getValuevideo(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM videolist' : sqlMap.getValuevideo
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },  //获取视频
  getValuepic(req, res, next) {
    var type = req.query.type || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM piclist' : sqlMap.getValuepic
      connection.query(sql, [type], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },  //获取图片
  getValueshopcar(req, res, next) {
    var type = req.query.type || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM shopcarlist' : sqlMap.getValueshopcar
      connection.query(sql, [type], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  }, 
  getValuecomment(req, res, next) {
    var type = req.query.type || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM commentlist' : sqlMap.getValuecomment
      connection.query(sql, [type], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },  //获取评论
  getValuepho(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM phonelist' : sqlMap.getValuepho
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },  //获取手机
  getValueapple(req, res, next) {
    var space = req.query.space || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = all ? 'SELECT * FROM space' : sqlMap.getValuespace
      connection.query(sql, [space], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getValueuser(req, res, next) {
    var name = req.query.name || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = 'SELECT * FROM user WHERE name = ?'
      connection.query(sql, [name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getValueuserrr(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql = 'SELECT * FROM user WHERE id = ?'
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getValuespacecom(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql =  'SELECT * FROM space WHERE id = ?'
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getValuegood(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql =  'UPDATE space SET good=good+1 WHERE id = ?;'
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getValuebad(req, res, next) {
    var id = req.query.id || -1, all = req.query.all;
    pool.getConnection((err, connection) => {
      var sql =  'UPDATE space SET bad=good+1 WHERE id = ?'
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValue(req, res, next) {
    var type = req.body.type, comment = req.body.comment, name = req.body.name
   
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [comment, type, name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },   //写入评论
  setValueuser(req, res, next) {
    var name = req.body.name, 
    password = req.body.password, 
    namex = req.body.namex,
    msg = req.body.msg
    pool.getConnection((err, connection) => {
      var sql = 'INSERT INTO user (name,password,namex,msg) VALUES (? , ? , ? , ?)';
      connection.query(sql, [name, password, namex,msg], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValuespace(req, res, next) {
    var name = req.body.name, 
    title = req.body.title,
    msg = req.body.msg,
    space = req.body.space;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValuespace;
      connection.query(sql, [name, title, msg, space], (err, result) => {
        if(err){console.log(err)}
          res.json(result);
          connection.release();
      })
    })
  },   //帖子
  delValuespace(req, res, next) {
    var id = req.query.id
    console.log(id)
    pool.getConnection((err, connection) => {
      var sql = 'DELETE FROM space WHERE id = ?'
      connection.query(sql, [id], (err, result) => {
        if(err){console.log(err)}
          res.json(result);
          connection.release();
      })
    })
  }
}
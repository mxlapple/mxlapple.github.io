var sqlMap = {
    getValuenews: 'SELECT * FROM newslist WHERE id = ?',
    getValuedetail: 'SELECT * FROM phoneidea WHERE id = ?',
    getValuepic: 'SELECT * FROM piclist WHERE type = ?',
    getValueshopcar: 'SELECT * FROM shopcarlist WHERE type = ?',
    getValuecomment: 'SELECT * FROM commentlist WHERE type = ?',
    getValuepho: 'SELECT * FROM phonelist WHERE id = ?',
    setValue: 'INSERT INTO commentlist (comment,type,name) VALUES (? , ? , ?)',
    getValuevideo: 'SELECT * FROM videolist WHERE id = ?',
    getValuespace:'SELECT * FROM space WHERE space = ?',
    setValuespace:'INSERT INTO space (name,title,msg,space,good,bad) VALUES (? , ? , ? , ? , 0 , 0)'
  }
  
  module.exports = sqlMap;
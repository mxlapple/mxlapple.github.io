const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValuenews', (req, res, next) => {
  api.getValuenews(req, res, next);
});
router.get('/getValuedetail', (req, res, next) => {
  api.getValuedetail(req, res, next);
});
router.get('/getValuepic', (req, res, next) => {
  api.getValuepic(req, res, next);
});
router.get('/getValuecomment', (req, res, next) => {
  api.getValuecomment(req, res, next);
});
router.get('/getValueshopcar', (req, res, next) => {
  api.getValueshopcar(req, res, next);
});
router.get('/getValuepho', (req, res, next) => {
  api.getValuepho(req, res, next);
});
router.get('/getValueapple', (req, res, next) => {
  api.getValueapple(req, res, next);
});
router.get('/getValuevideo', (req, res, next) => {
  api.getValuevideo(req, res, next);
});
router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});
router.post('/setValuespace', (req, res, next) => {
  api.setValuespace(req, res, next);
});
router.get('/delValuespace', (req, res, next) => {
  api.delValuespace(req, res, next);
});
router.get('/getValuespacecom', (req, res, next) => {
  api.getValuespacecom(req, res, next);
});
router.get('/getValuegood', (req, res, next) => {
  api.getValuegood(req, res, next);
});
router.get('/getValuebad', (req, res, next) => {
  api.getValuebad(req, res, next);
});
router.post('/setValueuser', (req, res, next) => {
  api.setValueuser(req, res, next);
});
router.get('/getValueuser', (req, res, next) => {
  api.getValueuser(req, res, next);
});
router.get('/getValueuserrr', (req, res, next) => {
  api.getValueuserrr(req, res, next);
});
module.exports = router;
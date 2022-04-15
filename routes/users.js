const express = require('express');
const router = express.Router(); // Behuzunk egy ROUTERT hogy külön kis appot tudjuk késziteni routernek amit késöbb beágyazhatunk

router.get('/', (req, res) => { // Mivel hogy késöbb usersként fogjuk behuzni a mainbe ezért nem kell /usersnek irni hanem csak /-nek
  res.send('dat was get')
})

router.get('/new', (req, res) => { // Mivel hogy késöbb usersként fogjuk behuzni a mainbe ezért nem kell /usersnek/new irni hanem csak /new-nek
  res.send('usersNewForm')
})

router.get('/new/first', (req, res) => { // Mivel hogy késöbb usersként fogjuk behuzni a mainbe ezért nem kell /usersnek/new irni hanem csak /new-nek
  res.send('usersNewForm-first')
})

router.route("/:userId")
.get((req, res) => {
  console.log(req.user);
  res.send(`dat was get on ${req.params.userId}`);
})
.post((req, res) => {
  res.send(`dat was post`);
})
.delete((req, res) => {
  res.send(`dat was delete on ${req.params.userId}`);
})
.put((req, res) => {
  res.send(`dat was put on ${req.params.userId}`);
})

const users = [{name: "kyle"}, {name: "sally"}];
router.param('userId', (req,res,next,id) => {
  req.user = users[id];
  next();
})

// 23:00




module.exports = router; // Exportáljuk hogy a mainbe felhasználgassuk
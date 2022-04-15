const express = require('express');
const router = express.Router(); // Behuzunk egy ROUTERT hogy külön kis appot tudjuk késziteni routernek amit késöbb beágyazhatunk

router.get('/', (req,res) => { // Mivel hogy késöbb usersként fogjuk behuzni a mainbe ezért nem kell /usersnek irni hanem csak /-nek
  res.send('usersList')
})

router.get('/new', (req,res) => { // Mivel hogy késöbb usersként fogjuk behuzni a mainbe ezért nem kell /usersnek/new irni hanem csak /new-nek
  res.send('usersNewForm')
})

router.get('/new/first', (req,res) => { // Mivel hogy késöbb usersként fogjuk behuzni a mainbe ezért nem kell /usersnek/new irni hanem csak /new-nek
  res.send('usersNewForm-first')
})

//16:00




module.exports = router; // Exportáljuk hogy a mainbe felhasználgassuk
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

router.route("/:userId") // Létrehozunk egy router.route-t a könnyebb szintaxis érdekében
  .get((req, res) => {
    console.log(req.user); //3. Innentől már a routeren belül bárhol elérhetjük a request user kulcsát, ami az id
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

const users = [{ name: "kyle" }, { name: "sally" }]; // 1Létrehozunk egy users tömböt
router.param('userId', (req, res, next, id) => { // 2melyben a router param értékének átadjuk az userId-t -> id paraméternek, majd a /válasznak/ req.user-nek átadjuk a users tömb id indexét
  console.log(id)
  req.user = users[id];
  next();
})

// 23:00




module.exports = router; // Exportáljuk hogy a mainbe felhasználgassuk
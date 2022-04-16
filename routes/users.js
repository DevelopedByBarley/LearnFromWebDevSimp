const express = require('express');
const router = express.Router(); 
router.use(logger); // 4. Hogy a logger middleware-t elérjük , használnunk is kell a routeren belül

router.get('/', (req, res) => {
  res.send('dat was get')
})

router.get('/new', (req, res) => { 
  res.send('usersNewForm')
})

router.get('/new/first', (req, res) => { 
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

const users = [{ name: "kyle" }, { name: "sally" }]; 
router.param('userId', (req, res, next, id) => {
  console.log(id)
  req.user = users[id];
  next();
})

function logger(req, res, next) { // 1 Létrehozunk egy middleware-t ami a res és req közötti állapotot tudja reprezentálni és müveleteket végrehajtani
  console.log(req.originalUrl) // 2 Kiiratjuk benne az url-t 
  next(); // 3 majd a kontrollt átpasszoljuk a következő sor kódoknak
  // Mivel ez is úgy müködik mint egy változó igy scope-ja van, mivel ezt az users.js routerjében deklaráltuk, ezért csak azon belül fog müködni
}

// 23:00




module.exports = router; // Exportáljuk hogy a mainbe felhasználgassuk
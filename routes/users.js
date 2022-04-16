const express = require('express');
const router = express.Router();
router.use(logger);

router.get('/', (req, res) => {
  res.send('dat was get on users')
})

router.get('/new', (req, res) => { // 1 Létrehozunk egy formot a views/users/new.ejs-en belül
  res.render("users/new", { firstName: 'Test' }) // 2 Amelyet kirenderelünk és átadjuk neki a firsName: 'Test' value-t ami a form input value-ként fog funkcionálni
})

router.post('/', (req, res) => { // ezt elküldjük post utvonalra
  const isValid = true; // Megvizsgálunk egy if else ágat
  if(isValid) { // Ami ha igaz
    users.push({ firstName: req.body.firstName}); // users tömbhöz pussoljuk a req.body.firstName kulcsát
    res.redirect(`/users/${users.length - 1}`) // Majd átirányitunk egy másik url-re ami a /users/userId lesz userId-nak átadva az users.lenght - 1 -et igy megkava az utolsó elemet amit hozzáadtunk a tömbhöz
  } else {
    console.log("error"); // Más esetben
    res.render(`users/new`, {firstName: req.body.firstName}) // Kirendereljük újra az users.new-ot nem átirányitunk mert annak nem tudunk átadni body-t
  }
  res.send('Hi')
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

function logger(req, res, next) {
  console.log(req.originalUrl)
  next();
}






module.exports = router;
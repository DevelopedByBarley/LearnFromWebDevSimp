const express = require('express');
const router = express.Router(); 
router.use(logger); 

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

function logger(req, res, next) { 
  console.log(req.originalUrl) 
  next(); 
}






module.exports = router;
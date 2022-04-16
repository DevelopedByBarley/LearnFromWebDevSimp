const express = require('express');
const app = express();

app.set('view engine', 'ejs') // Behúzzuk az EJS-t

app.get('/', (req, res) => {
  // res.status(500).json({ message: "Error"})
res.render('index', { text: "World" }) // Ki rendereljük az EJS-t átadva neki paramétereket kulcs értékpárokként 
})

const userRouter = require('./routes/users'); // behuzzuk az exportált filet

app.use('/users', userRouter); // Majd használatra birjuk első paraméterként az itteni utvonallal amit átpasszolunk , másodikként pedig a routerböl kapott utvonallal, igy összeáll a teljes utvonal

app.listen(3000);
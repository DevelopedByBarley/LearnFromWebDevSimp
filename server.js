const express = require('express');
const app = express();

app.use(express.static("public")) // kiszolgáljuk a teljes public mappát, majd ha még a /test/tt.html-t példaként beirjuk, azt is kiszolgálja!
app.set('view engine', 'ejs') 

app.get('/', (req, res) => {
  
})

const userRouter = require('./routes/users'); 

app.use('/users', userRouter);



app.listen(3000);
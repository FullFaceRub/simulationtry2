const express = require('express');
const massive = require('massive');
const port = process.env.PORT || 1337;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const controller = require('./bincontroller');

app.use(bodyParser.json());
app.use(cors());

app.put('/api/bin/:shelfid/:binid', controller.update)
app.get('/api/bin/:shelfid/:binid', controller.getOne)
app.get('/api/bin', controller.getAll)


massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
    app.listen(port, ()=>{
        console.log(`That's no moon! It's a port ${port}!`)
    })
})
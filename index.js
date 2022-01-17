//Kongkom Sumlee 6135512039 CoE
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors());

app.get('/get',(req,res)=>{
    res.status(200).json({
        name:'Kongkom Sumlee',
        age:22,
        faculty:'CoE'
    });
});

app.listen(3000, (err)=> err? console.log('Error Connect Port 3000') : console.log('Connected Port 3000'));
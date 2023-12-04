const express= require('express');
const app= express();

const port= process.env.PORT || 5000;

const chef=require('./data/chefs.json');

app.get('/', (req,res)=>{
    res.send('our cafe is now running')
} )

app.get('/chefs', (req,res)=>{
    res.send(chef)
} )

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })

 


app.listen(port, ()=>{
    console.log(`cafe API is running on port:${port}`)
} )
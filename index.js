const express= require('express');
const app= express();
const cors=require('cors');

const port= process.env.PORT || 3000;

const chef=require('./data/chefs.json');

// app.use(cors());

const options = [
    cors({
      origin: '*',
      methods: '*',
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  ];
  
  app.use(options);
  

app.get('/', (req,res)=>{
    res.send('our cafe is now running')
} )

app.get('/chefs', (req,res)=>{
    res.send(chef)
} )

app.get('/chefInfo/:id', (req,res) =>{
    const id= parseInt ( req.params.id);
    const selectedChef= chef.find ( c=> parseInt(c.chef_id) === id );
    res.send(selectedChef)
} )

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })

 


app.listen(port, ()=>{
    console.log(`cafe API is running on port:${port}`)
} )
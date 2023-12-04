const express= require('express');
const app= express();

const port= process.env.PORT || 5000;


app.get('/', (req,res)=>{
    res.send('our cafe is now running')
} )



// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })

 


app.listen(port, ()=>{
    console.log(`cafe API is running on port:${port}`)
} )
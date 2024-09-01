import express, { Request, Response } from 'express';

const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.post('/send',(req : Request ,res:Response)=>{
  const data = req.body;
  console.log(data)
  res.json({message:"성공적"})
})

app.listen(8080, () => {
    console.log(`Server is running at http://localhost:8080`);
  });
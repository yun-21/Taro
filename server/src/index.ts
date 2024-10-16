import express, { Request, Response } from 'express';

const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/public')))

// 로그인 사용 x
// app.post('/send',(req : Request ,res:Response)=>{
//   const data = req.body;
//   console.log(data)
//   res.json({message:"성공적"})
// })

// app.post('/behavior',)

app.listen(3001, () => {
    console.log(`Server is running at http://localhost:3001`);
});
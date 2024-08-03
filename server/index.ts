const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(8080, () => {
    console.log(`Server is running at http://localhost:8080`);
  });
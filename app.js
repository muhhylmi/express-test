const express = require('express');
const app = express()
const PORT = 3000;

app.use('/hello', (req, res, next)=>{
    res.send('hello world')
})

app.use('*',(req, res, next)=>{
    res.send('no url detected')
})
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
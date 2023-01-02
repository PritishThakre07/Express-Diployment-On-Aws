const express = require('express');
const path = require('path');

const app = express();

app.get("/",(req,resp)=>{

    resp.sendFile(path.join(__dirname,"index.html"));
})
app.get("/schedule",(req,resp)=>{

    resp.sendFile(path.join(__dirname,"sh.html"));
})


app.listen(3000,()=>{
    console.log("server is running ")
}
)
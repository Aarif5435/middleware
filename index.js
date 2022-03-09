const express = require("express");

const app = express();

app.use(allBooks);

app.get("/books", (res , req)=>{
    console.log("hello");
    req.send("welcom")
})

function allBooks(req,res,next){

    console.log("Fetching all books");

    next();
}

app.listen(5000, () =>{
    console.log("listening at 5000")
})
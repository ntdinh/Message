let express = require("express");
let app = express();

let hostname = "localhost";
let port = 8000;

app.get("/helo", (req,res) => {
    res.send("<h1> hihihi </h1>");
});
app.listen(port, hostname,() =>{
    console.log(`helo at ${hostname} : ${port}`);
});
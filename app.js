const express = require("express");
let app = express();

app.get("/",(req,rest)=>rest.send("Ola novo projeto com express"))

//criando um servidor com o express
app.listen(3000, ()=>console.log("O Servidor esta rodando na porta 3000"));


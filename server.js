const express = require("express")
const server = express()

server.get("/", function(req, res){ 
    return res.send("oi mundo!")
})

server.listen(3000) 
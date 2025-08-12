const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json())
app.get("/", (req,res)=>{
    res.status(201).json({
        "msg": "runs"
    })
})

// mongoose.connect()

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
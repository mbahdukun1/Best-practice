if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const express = require("express")
const router = require("./routes/index")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)

app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
})

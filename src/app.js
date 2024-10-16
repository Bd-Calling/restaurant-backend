import express from "express"
import userRoutes from "./app/module/user/user.route.js"
import itemRoutes from "./app/module/items/items.route.js"

 const app  =  express()
 app.use(express.json())
const errorHandler  =  (err,req,res,next)=>{
    console.log(err)
    res.status(err?.status || 500).json({
        success:false,
        message:err?.message || "something went wrong",
    })
    next()
}


app.use(errorHandler)
app.use("/api",userRoutes)
app.use("/api",itemRoutes)
app.get('/', (req, res) => {
    res.send('server is running....')
  })
  

  export default app
import itemServices from "./items.service.js"

const insertItemIntoDb  =  async(req,res,next)=>{
    try {
        const result  =  await itemServices.insertItemIntoDb(req.body)
        res.status(200).json({
            success:true,
            message:"Item inserted successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}



const itemController ={
    insertItemIntoDb
}


export default itemController
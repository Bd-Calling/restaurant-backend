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
const getAllItems  =  async(req,res,next)=>{
    try {
        const result  =  await itemServices.getAllItems(req.query)
        res.status(200).json({
            success:true,
            message:"Items retrieved successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}
const getSingleItem  =  async(req,res,next)=>{
    try {
        const result  =  await itemServices.getSingleItems(req.params.id)
        res.status(200).json({
            success:true,
            message:"Item retrieved successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}
const updateItem  =  async(req,res,next)=>{
    try {
        const result  =  await itemServices.updateItem(req.params.id,req.body)
        res.status(200).json({
            success:true,
            message:"Item updated successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}



const itemController ={
    insertItemIntoDb,
    getAllItems,
    getSingleItem,
    updateItem
}


export default itemController
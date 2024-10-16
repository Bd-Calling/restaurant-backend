import userServices from "./user.service.js"

const insertUserIntoDB =  async(req,res,next)=>{
    try {
        const result  = await userServices.insertUserIntoDB(req.body)
        res.status(200).json({
            success:true,
            message:"User created successfully",
            data:result
        })
        
    } catch (error) {
        next(error)
    }
}

const getSingleUser =  async(req,res,next)=>{
    try {
        const result  = await userServices.getSingleUser(req.params.id)
        res.status(200).json({
            success:true,
            message:"User retrieved successfully",
            data:result
        })
        
    } catch (error) {
        next(error)
    }
}

const loginUser =  async(req,res,next)=>{
    try {
        const result  = await userServices.loginUser(req.body)
        res.status(200).json({
            success:true,
            message:"User logged in successfully",
            data:result?.data,
            token:result?.token
        })
        
    } catch (error) {
        next(error)
    }
}



const userController ={
    insertUserIntoDB,
    getSingleUser,
    loginUser
}


export default userController
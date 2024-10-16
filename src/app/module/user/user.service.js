import User from "./user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const insertUserIntoDB  = async(data)=>{
 const hasedData  = {...data}
const hasedPassword  = await bcrypt.hash(hasedData.password,12)
hasedData.password  =  hasedPassword
    const result  =  await User.create(hasedData)
    return result
}

const loginUser  = async(data)=>{
    // 
    const isUserExist  =  await User.findOne({email:data?.email})
 if(!isUserExist){
 throw new Error("user not exist.")
 }

 const isPasswordMatched  = await bcrypt.compare(data?.password,isUserExist?.password)
if(isPasswordMatched === false){
    throw new Error("password did not match.")
}
const userObj  ={
    userId:isUserExist?._id,
    role:isUserExist?.role,
    email:isUserExist?.email
}
const token  =  jwt.sign(userObj,"restaurant123",{expiresIn:"7d"})
const {password,...others} =  isUserExist.toObject()
return {
    data:others,
    token:token
}
}

const getSingleUser  =  async(id)=>{
    const result = await User.findById(id)
    return result
}



// get all users
// update user
// delete user

const userServices = {
    insertUserIntoDB,
    getSingleUser,
loginUser
}


export default userServices


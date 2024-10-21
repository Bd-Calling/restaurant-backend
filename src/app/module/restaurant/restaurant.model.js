import { model, Schema } from "mongoose";


const restaurantSchema  = new Schema({
    image:{
        type:String,
        required:[true,"image is required"]
    },
    name:{
        type:String,
        required:[true,"name is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
})




const Restaurant  =  model("Restaurant",restaurantSchema)

export default Restaurant
import { model, Schema } from "mongoose";


const itemsSchema  =  new Schema({
    title:{
        type:String,
        required:[true,"title is required."]
    },
    price:{
        type:Number,
        required:[true,"price is required."]
    },
    description:{
        type:String,
        required:[true,"description is required."]
    },
    images:[{
        url:{
            type:String,
      
        }
    }]
},{timestamps:true})

const Item  =  model("Item",itemsSchema)
export default Item
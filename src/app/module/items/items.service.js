import Item from "./items.model.js"

const insertItemIntoDb  =  async(data)=>{
    const result  =  await Item.create(data)
    return result
}


const getAllItems  = async(query)=>{
    const result =  await Item.find(query)
return result
}


const getSingleItems  =  async(id)=>{
    const result  =  await Item.findById(id)
    return result
}


const updateItem  = async(id,itemData)=>{
    const result  =  await Item.findByIdAndUpdate(id,itemData,{new:true})
    return result
}



//  get single
// get all
// update Item
// delete item




 const itemServices  ={
    insertItemIntoDb,
    getAllItems,
    getSingleItems,
    updateItem
}

export default itemServices
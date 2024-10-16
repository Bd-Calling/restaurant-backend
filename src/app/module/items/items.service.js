import Item from "./items.model.js"

const insertItemIntoDb  =  async(data)=>{
    const result  =  await Item.create(data)
    return result
}



//  get single
// get all
// update Item
// delete item




 const itemServices  ={
    insertItemIntoDb
}

export default itemServices
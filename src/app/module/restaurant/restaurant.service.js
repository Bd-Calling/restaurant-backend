import Restaurant from "./restaurant.model.js"

const insertRestaurantIntoDb  = async (data)=>{
    const result  = await Restaurant.create(data)
    return result
}









const restaurantServices  ={
    insertRestaurantIntoDb
}

export default restaurantServices
import restaurantServices from "./restaurant.service.js"

const insertRestaurantIntoDb  =  async(req,res,next)=>{
    try {
        const result  =  await restaurantServices.insertRestaurantIntoDb(req.body)
        res.status(200).json({
            success:true,
            message:"Restaurant data inserted successfully",
            data:result
        })
    } catch (error) {
        next(error)
    }
}













const  restaurantController  ={
    insertRestaurantIntoDb
}

export default restaurantController
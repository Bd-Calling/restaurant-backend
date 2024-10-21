import express  from "express";
import restaurantController from "./restaurant.controller.js";
const router  =  express.Router()
router.post("/restaurant",restaurantController.insertRestaurantIntoDb)

const restaurantRoutes  =  router

export default restaurantRoutes
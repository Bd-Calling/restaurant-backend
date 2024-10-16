import express  from "express";
import itemController from "./items.controller.js";
const router  =  express.Router()

router.post("/items",itemController.insertItemIntoDb)
router.get("/items",itemController.getAllItems)
router.get("/items/:id",itemController.getSingleItem)
router.patch("/items/:id",itemController.updateItem)



const itemRoutes  =  router

export default itemRoutes
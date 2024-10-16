import express  from "express";
import itemController from "./items.controller.js";
const router  =  express.Router()

router.post("/items",itemController.insertItemIntoDb)



const itemRoutes  =  router

export default itemRoutes
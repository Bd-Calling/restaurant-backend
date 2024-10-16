import express  from "express";
import userController from "./user.controller.js";

const router  =  express.Router()


router.post("/users",userController.insertUserIntoDB)
router.post("/users/login",userController.loginUser)
router.get("/users/:id",userController.getSingleUser)


const userRoutes  =  router

export default userRoutes
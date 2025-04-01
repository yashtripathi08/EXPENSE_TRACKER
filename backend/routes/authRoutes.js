const express =require("express");


const{
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");

const routes = express.Router();

routes.post("/register", registerUser);

routes.post("/login", loginUser);

routes.get("/getuser", protect, getUserInfo);

module.exports = routes;

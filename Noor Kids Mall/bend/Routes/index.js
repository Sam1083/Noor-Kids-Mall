const express = require("express");
const router = express.Router();
const userDataRoute=require("../Routes/userData.route")




router.use("/userData",userDataRoute)


module.exports=router;
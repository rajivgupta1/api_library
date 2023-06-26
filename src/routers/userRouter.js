import  express  from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashpassword } from "../utils/bcrypt.js";

const router = express.Router()

router.get("/", (req, res) =>{
    try{
        res.json({
            status:  "success",
            message: "Here are the user informations"
        });
    }catch (error){

        res.json({
            statu: "error",
            message: error.message,
          });
        }
});


router.post("/", async (req, res) =>{
    try{
        const { password } = req.body
        req.body.password = hashpassword(password);


        const user = await insertUser(req.body);
        user?. _id
        ? res.json({
            status:  "success",
            message: "New user has been created successfully",
        })

        :res.json({
            status:  "error",
            message: "Unable to create user, try again later",
        });

    }catch (error){

        let msg = error.message
        if(msg.includes("E1100 duplicate key error")){
            msg = " There is another user who uses this email in the system.";
        }
        res.json({
            statu: "error",
            message: msg,
          });
        }
});


export default router;


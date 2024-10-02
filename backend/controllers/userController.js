import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user

const loginUser = async (req, res) => {};

// register user
const registerUser = async (req, res) => {
    const {name,passowrd,email}=req.body;
    try {
        
    } catch (error) {
        
    }
};

export { loginUser, registerUser };

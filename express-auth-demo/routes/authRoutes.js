const express = require("express");
const { body } = require("express-validator");

const { registerUser } = require("../controllers/auth/registerController");
const { loginUser } = require("../controllers/auth/loginController");
const { protect } = require("../middleware/authMiddleware");
const { getUserProfile } = require("../controllers/user/getUserController");

const router = express.Router();

// REGISTER
router.post(
    "/register",
    [
        body("name").notEmpty(),
        body("email").isEmail(),
        body("password").isLength({ min: 6 })
    ],
    registerUser
);

// LOGIN
router.post(
    "/login",
    [
        body("email").isEmail(),
        body("password").notEmpty()
    ],
    loginUser
);

// PROTECTED USER PROFILE
router.get("/me", protect, getUserProfile);

module.exports = router;

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../../models/User");

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.json({ message: "User registered successfully" });
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

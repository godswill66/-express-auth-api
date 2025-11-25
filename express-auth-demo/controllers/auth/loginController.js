const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../../models/User");
const generateToken = require("../../utils/generateToken");

exports.loginUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ error: "Invalid credentials" });

        const token = generateToken(user._id);

        res.json({ token });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

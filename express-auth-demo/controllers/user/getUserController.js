exports.getUserProfile = async (req, res) => {
    res.json({ message: "User profile accessed", user: req.user });
};

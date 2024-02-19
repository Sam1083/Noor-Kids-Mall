const userData = require("../Model/userData.model"); // Make sure the file name and path are correct
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.store = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userData.create({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            confirmPassword
        });

        res.status(201).json({ message: "User Created Successfully", success: true, userData: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userData.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
            return res.status(200).json({ success: true, message: 'Password matches', token });
        } else {
            return res.status(400).json({ success: false, message: 'Password does not match' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};

exports.index = async (req, res) => {
    try {
        const users = await userData.find();
        res.status(200).json({ message: "Users Fetched Successfully", success: true, users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};

exports.get = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userData.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        res.status(200).json({ message: "User Fetched Successfully", success: true, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};

exports.destroy = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userData.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        res.status(200).json({ message: "User Deleted Successfully", success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};

exports.update = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;
        const updatedUser = await userData.findByIdAndUpdate(userId, updatedUserData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        res.status(200).json({ message: "User Updated Successfully", success: true, user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};

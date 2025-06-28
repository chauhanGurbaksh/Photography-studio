const User = require("../models/user.model"); // Assuming your User model is in 'models/User.js'

// Register User
let Insertregister = async (req, res) => {
  try {
      let { name, email, password } = req.body;

      let registerInfo = new User({
          name,
          email,
          password
      });

      await registerInfo.save();
      res.status(201).json({ message: "Data inserted successfully", data: registerInfo, email:registerInfo.email });
  } catch (error) {
      res.status(500).json({ message: "Server error", error });
  }
};

// User Login
let userLogin = async(req, res) => {
  try {
      let { email, password } = req.body;
      let user = await User.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      let match = await password == user.password;
      if (!match) {
          return res.status(400).json({ message: "Invalid credentials" });
      }

      res.status(200).json({
          message: "Login successful",
          user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (error) {
      res.status(500).json({ message: "Server error", error });
  }
};
module.exports = { userLogin,Insertregister}
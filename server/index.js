const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const TravelPlace = require("./models/TravelPlace");
const reviewRoutes = require('./routes/reviews');



const app = express();
app.use(express.json());
app.use(cors());

app.use("/reviews", reviewRoutes);

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB connection failed:", err));

// ✅ Define User Schema with Role
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: { type: String, default: "user" } // default role is 'user'
});
const User = mongoose.model("User", UserSchema);

// ✅ Register Route
app.post("/register", async (req, res) => {
  const { name, email, password, role = "user" } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();
    res.status(201).json({ message: "✅ User Registered Successfully" });
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ error: "❌ Registration Failed" });
  }
});

// ✅ Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    res.status(200).json({
      message: "✅ Login successful",
      role: user.role // return role to frontend
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ error: "❌ Login failed" });
  }
});

// ✅ Start server
app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});

// ✅ Travel Routes

// GET all travel places
app.get("/travel", async (req, res) => {
  try {
    const places = await TravelPlace.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch travel places" });
  }
});

// POST create new travel place
app.post("/travel", async (req, res) => {
  const { name, description, views, distance, date, image } = req.body;
  try {
    const newPlace = new TravelPlace({
      name,
      description,
      views,
      distance,
      date,
      image
    });
    await newPlace.save();
    res.status(201).json({ message: "Travel place added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add travel place" });
  }
});

// GET travel place by ID
app.get("/travel/:id", async (req, res) => {
  try {
    const place = await TravelPlace.findById(req.params.id);
    if (!place) return res.status(404).json({ error: "Place not found" });
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch travel place" });
  }
});

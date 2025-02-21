import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to database & cloudinary
connectDb();
connectCloudinary();

// ✅ Fix CORS: Explicitly allow your frontend URL
app.use(
  cors({
    origin: [
      "https://prescripto-frontend-rj4l.onrender.com",
      "https://prescripto-admin-53x1.onrender.com",
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow cookies and headers
  })
);

// Middlewares
app.use(express.json());

// API endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, this is the API server!");
});

// Start server
app.listen(port, () => console.log("✅ Server started on port", port));

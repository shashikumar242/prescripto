import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
      serverSelectionTimeoutMS: 10000, // Timeout after 10s instead of waiting forever
    });

    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Error:", error.message);
    process.exit(1); // Exit the process on failure
  }

  mongoose.connection.on("disconnected", () => {
    console.log("⚠️ MongoDB Disconnected. Retrying...");
  });
};

export default connectDb;

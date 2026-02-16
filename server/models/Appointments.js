import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  problem: String,

  dateRequested: Date,

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },

  appointmentDate: Date,  
  appointmentTime: String  
});

export default mongoose.model("Appointment", appointmentSchema);

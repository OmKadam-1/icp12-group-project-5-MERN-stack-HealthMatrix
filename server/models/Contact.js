import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: String,
    message: { type: String, required: true },

    dateRequested: { type: Date, default: Date.now },

}, { timestamps: true });


const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
import React, { useState } from "react"
import axios from "axios"
import Input from "./Input"

function Contact() {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        service: "",
        message: ""
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:5173/", data)
        alert("Message Sent Successfully")
    }
    return (
        <div className="min-h-screen flex flex-col items-center p-10">
            <h1 className="text-4xl font-bold text-green-700 mb-10">
                Contact To Our Clinic
            </h1>

            <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">

                <div className="bg-white shadow-lg rounded-2xl p-6 w-full border-2 border-solid border-green-500 hover:shadoow-xl/30 hover:shadow-green-600 duration-400">
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <Input
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                        />

                        <Input
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleChange}
                            type="email"
                        />

                        <Input
                            name="phone"
                            placeholder="Enter Phone"
                            onChange={handleChange}
                            type="tel"
                        />

                        <select
                            name="department"
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >
                            <option>Select Department</option>
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Orthopedic</option>
                        </select>

                        <select
                            name="service"
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >
                            <option>Select Service</option>
                            <option>Appointment</option>
                            <option>Emergency</option>
                            <option>Consultation</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Enter Message"
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-green-600 text-white w-full py-2 rounded-xl hover:bg-green-700"
                        >
                            Send Message
                        </button>

                    </form>


                </div>
            </div>
        </div>
    )
}
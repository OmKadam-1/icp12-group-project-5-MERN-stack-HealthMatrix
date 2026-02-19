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
}
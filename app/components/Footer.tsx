'use client'

import React, { useState, type ChangeEvent } from "react"

const Footer = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState("")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("Sending...")

    try {
      // contoh submit
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("Message sent!")
    } catch {
      setStatus("Failed to send message")
    }
  }

  return (
    <footer className="w-full py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Send
        </button>

        {status && <p>{status}</p>}

      </form>
    </footer>
  )
}

export default Footer
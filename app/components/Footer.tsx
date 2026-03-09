"use client";

import React, { useState, type ChangeEvent } from "react";
import { FiSend, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message");
    }
  };

  return (
    <footer className="w-full py-16 border-t border-white/10 bg-black/50 backdrop-blur-md">

      <div className="container mx-auto px-6 md:px-12">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h2 className="text-4xl font-bold text-white">
              Let's <span className="text-[#06D001]">Connect</span>
            </h2>

            <p className="text-gray-400 max-w-md">
              Punya ide menarik atau ingin berkolaborasi? Kirimkan pesan dan
              saya akan membalasnya sesegera mungkin.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 text-xl text-white">

              <a
                href="#"
                className="p-3 border border-white/10 rounded-lg hover:border-[#06D001] hover:text-[#06D001] transition"
              >
                <FiGithub />
              </a>

              <a
                href="#"
                className="p-3 border border-white/10 rounded-lg hover:border-[#06D001] hover:text-[#06D001] transition"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="p-3 border border-white/10 rounded-lg hover:border-[#06D001] hover:text-[#06D001] transition"
              >
                <FiLinkedin />
              </a>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-xl"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 p-3 rounded-lg text-white focus:outline-none focus:border-[#06D001] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 p-3 rounded-lg text-white focus:outline-none focus:border-[#06D001] transition"
              />

            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 p-3 rounded-lg text-white focus:outline-none focus:border-[#06D001] transition"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#06D001] text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_#06D001] transition-all disabled:opacity-50"
              disabled={status === "Sending..."}
            >
              <FiSend />
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-sm ${
                  status.includes("success")
                    ? "text-[#06D001]"
                    : "text-gray-400"
                }`}
              >
                {status}
              </p>
            )}

          </form>

        </div>


        {/* COPYRIGHT */}
        <div className="mt-16 pt-6 border-t border-white/5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} M. Fadh Khulloh — Built with Next.js & Tailwind
        </div>

      </div>
    </footer>
  );
};

export default Footer;
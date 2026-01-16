"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch soon!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#213d65] mb-8 text-center">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-[#213d65]">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#eaeaea] rounded focus:outline-none focus:border-[#00a1e5]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-[#213d65]">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#eaeaea] rounded focus:outline-none focus:border-[#00a1e5]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-[#213d65]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#eaeaea] rounded focus:outline-none focus:border-[#00a1e5]"
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium text-[#213d65]">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#eaeaea] rounded focus:outline-none focus:border-[#00a1e5]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-[#213d65]">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-[#eaeaea] rounded focus:outline-none focus:border-[#00a1e5] resize-vertical"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-[#00a1e5] text-white font-semibold rounded hover:bg-[#213d65] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

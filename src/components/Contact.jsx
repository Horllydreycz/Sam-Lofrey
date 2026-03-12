import React from "react";
import logo from "../assets/sam_lofrey_logo.jpg";
function Contact() {
  return (
    <div className="w-full border border-amber-50 rounded-2xl bg-cover bg-center bg-no-repeat min-h-screen bg-[#0A1F44]">
      <div className="min-h-screen w-full">
        <div className="bg-[#B7950B] border rounded-t-2xl border-amber-50 flex justify-center py-3 sm:py-5 font-bold text-base sm:text-xl text-white">
          GET 10% OFF
        </div>
        <div className="md:hidden px-4 py-4 bg-transparent text-white">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Search</span>
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <div className="flex items-center gap-1.5 font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.16.12-.33.12-.5 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span>0</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-5 text-sm font-semibold">
            <nav>Home</nav>
            <nav>Shop</nav>
            <nav>News</nav>
            <nav>Contact</nav>
          </div>
        </div>

        <div className="hidden md:flex py-5 justify-between items-center px-8 bg-transparent relative">
          <div className="flex gap-6 font-semibold text-white">
            <nav>Home</nav>
            <nav>Shop</nav>
            <nav>News</nav>
            <nav>Contact</nav>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>
          <div className="flex gap-6 items-center font-semibold text-white">
            <span>Search</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.16.12-.33.12-.5 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span>0</span>
          </div>
        </div>
        <div className="text-white flex justify-center text-4xl sm:text-5xl md:text-7xl px-4 py-10 sm:p-16 font-extrabold text-center leading-tight">
          GET IN TOUCH
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 text-white">
          <form className="border border-white/30 bg-black/30 rounded-md p-4 sm:p-6 space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 outline-none focus:border-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@gmail.com"
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="123-456-7890"
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 outline-none focus:border-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Enter subject"
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 outline-none focus:border-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Enter message"
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 outline-none focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

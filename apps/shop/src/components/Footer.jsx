import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaApple } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Subscribed with: ${email}`)
      setEmail('')
    }
  }

  return (
    <footer className="w-full relative bg-[#F0F0F0] text-black font-sans mt-32 sm:mt-40 md:mt-48 overflow-x-clip">
      {/* Top Newsletter Card (Floating Overlap using relative positioning & negative offset) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-1/2 mb-0">
        <div className="bg-black text-white rounded-[20px] px-5 sm:px-10 py-7 md:py-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl w-full box-border relative z-10">
          <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black uppercase tracking-tight leading-tight max-w-xl text-center md:text-left wrap-break-word w-full md:w-auto">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <form onSubmit={handleSubscribe} className="w-full md:w-[350px] lg:w-[380px] flex flex-col gap-3.5 shrink-0">
            {/* Email Input */}
            <div className="relative flex items-center bg-white rounded-full px-4 py-3 text-gray-800 focus-within:ring-2 focus-within:ring-white/50 transition-all w-full min-w-0">
              <FiMail className="text-gray-400 text-xl shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full min-w-0 bg-transparent border-none outline-none pl-3 text-xs sm:text-sm text-gray-900 font-normal"
              />
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-black font-medium text-xs sm:text-sm rounded-full py-3 transition-colors cursor-pointer shadow-xs active:scale-[0.99] font-sans"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-20 md:-mt-18 pb-8 relative z-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-10 border-b border-black/10">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="sm:col-span-2 lg:col-span-1 pr-0 lg:pr-4">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black uppercase mb-4">
              SHOP.CO
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs mb-6 font-normal">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center text-xs shadow-2xs shrink-0"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white hover:bg-gray-800 transition-all flex items-center justify-center text-xs shadow-2xs shrink-0"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center text-xs shadow-2xs shrink-0"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white text-black hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center text-xs shadow-2xs shrink-0"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-black uppercase mb-4 sm:mb-5">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-gray-600 font-normal">
              <li><Link to="/about" className="hover:text-black transition-colors">About</Link></li>
              <li><Link to="/features" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link to="/works" className="hover:text-black transition-colors">Works</Link></li>
              <li><Link to="/career" className="hover:text-black transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-black uppercase mb-4 sm:mb-5">
              HELP
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-gray-600 font-normal">
              <li><Link to="/support" className="hover:text-black transition-colors">Customer Support</Link></li>
              <li><Link to="/delivery" className="hover:text-black transition-colors">Delivery Details</Link></li>
              <li><Link to="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: FAQ */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-black uppercase mb-4 sm:mb-5">
              FAQ
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-gray-600 font-normal">
              <li><Link to="/account" className="hover:text-black transition-colors">Account</Link></li>
              <li><Link to="/manage-deliveries" className="hover:text-black transition-colors">Manage Deliveries</Link></li>
              <li><Link to="/orders" className="hover:text-black transition-colors">Orders</Link></li>
              <li><Link to="/payments" className="hover:text-black transition-colors">Payments</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-xs sm:text-sm text-gray-500 gap-4">
          <p className="font-normal text-center sm:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
            {/* Visa */}
            <div className="bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs flex items-center justify-center h-7 sm:h-8 w-11 sm:w-12 shrink-0">
              <svg className="h-3 sm:h-3.5 w-auto" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 1.2L9.5 11.5H6.5L3.9 2.5C3.7 1.8 3.5 1.5 2.9 1.2C2 0.7 0.9 0.3 0 0.1L0.1 0.7H4.7C5.3 0.7 5.8 1.1 6 1.7L7.2 8L10.3 0.7H14.5ZM26.9 8.2C26.9 5.1 22.5 4.9 22.5 3.5C22.5 3.1 22.9 2.6 23.9 2.5C24.4 2.4 25.8 2.3 27.3 3L27.9 0.4C27.1 0.1 26 0 24.7 0C21.7 0 19.6 1.6 19.6 3.8C19.6 5.5 21.1 6.5 22.2 7.1C23.4 7.7 23.8 8.1 23.8 8.6C23.8 9.4 22.9 9.8 21.9 9.8C20.4 9.8 19.5 9.4 18.8 9.1L18.2 11.8C19 12.2 20.4 12.5 21.9 12.5C25.2 12.5 27.3 10.9 26.9 8.2ZM35.3 11.5H38.9L35.8 0.7H32.6C31.9 0.7 31.3 1.1 31.1 1.7L26.6 11.5H30L30.7 9.6H34.8L35.3 11.5ZM31.6 7L33.3 2.4L34.3 7H31.6ZM18.7 0.7L15.3 11.5H12L15.4 0.7H18.7Z" fill="#1434CB"/>
              </svg>
            </div>

            {/* Mastercard */}
            <div className="bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs flex items-center justify-center h-7 sm:h-8 w-11 sm:w-12 shrink-0">
              <svg className="h-4 sm:h-5 w-auto" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#EB001B"/>
                <circle cx="22" cy="10" r="10" fill="#F79E1B" fillOpacity="0.8"/>
              </svg>
            </div>

            {/* PayPal */}
            <div className="bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs flex items-center justify-center h-7 sm:h-8 w-11 sm:w-12 shrink-0">
              <svg className="h-3.5 sm:h-4 w-auto" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2H20C23 2 24.5 3.5 24 6.5C23.4 10.5 20.5 12 17 12H13.5L12 20H7.5L11 2Z" fill="#003087"/>
                <path d="M14.5 6H22.5C25 6 26.5 7.2 26 10C25.3 14 22.5 15.5 19 15.5H15.5L14.2 22.5H10.5L14.5 6Z" fill="#0079C1" opacity="0.8"/>
              </svg>
            </div>

            {/* Apple Pay */}
            <div className="bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs flex items-center justify-center h-7 sm:h-8 w-11 sm:w-12 shrink-0">
              <span className="font-bold text-[10px] sm:text-xs text-black tracking-tighter flex items-center gap-0.5">
                <FaApple className="text-[13px] text-black shrink-0 -mt-0.5" />
                <span>Pay</span>
              </span>
            </div>

            {/* Google Pay */}
            <div className="bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs flex items-center justify-center h-7 sm:h-8 w-11 sm:w-12 shrink-0">
              <span className="font-bold text-[10px] sm:text-xs text-gray-800 tracking-tighter flex items-center gap-0.5">
                <span className="text-[#4285F4]">G</span>
                <span>Pay</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


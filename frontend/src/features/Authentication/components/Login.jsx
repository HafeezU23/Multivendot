import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const Login = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="min-h-screen bg-[#F5F5F7] flex flex-col font-sans">
            <Navbar />

            {/* Main Content */}
            {/* flex-1 ensures it takes the rest of the height. py-6 ensures some padding on top/bottom so it doesn't touch the edges */}
            <div className="flex-1 flex justify-center items-center p-4 sm:p-6 lg:p-8">
                
                {/* Fixed height container to prevent layout shifting and ensure flip absolute children have space */}
                <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex h-[620px]">

                    {/* Left: Flip Container (Forms) */}
                    <div className="w-full md:w-1/2 h-full p-8 sm:p-12 lg:p-14 [perspective:1500px]">
                        <div
                            className={`relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                        >

                            {/* ====================================================
                                FRONT: SIGN IN FORM
                                ==================================================== */}
                            <div className="absolute inset-0 w-full h-full flex flex-col justify-center [backface-visibility:hidden]">
                                
                                <div className="text-center md:text-left mb-8">
                                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Welcome back</h2>
                                    <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Password</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 font-medium"
                                        />
                                    </div>

                                    <div className="flex justify-end pt-1">
                                        <a href="#" className="text-sm font-bold text-gray-500 hover:text-black transition-colors">Forgot password?</a>
                                    </div>

                                    <button className="w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 mt-2">
                                        Sign In
                                    </button>
                                </form>

                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                        <FcGoogle className="text-xl" />
                                        Google
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                        <FaApple className="text-xl" />
                                        Apple
                                    </button>
                                </div>

                                <p className="mt-8 text-center text-gray-500 font-medium text-sm sm:text-base">
                                    Don't have an account?{' '}
                                    <button
                                        onClick={() => setIsFlipped(true)}
                                        className="text-black font-bold hover:underline"
                                    >
                                        Create one now
                                    </button>
                                </p>
                            </div>


                            {/* ====================================================
                                BACK: SIGN UP FORM
                                ==================================================== */}
                            <div className="absolute inset-0 w-full h-full flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                
                                <div className="text-center md:text-left mb-6">
                                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Join us today</h2>
                                    <p className="text-gray-500 font-medium">Create an account to start shopping.</p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Password</label>
                                        <input
                                            type="password"
                                            placeholder="Create a password"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 font-medium"
                                        />
                                    </div>

                                    <button className="w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 mt-4">
                                        Create Account
                                    </button>
                                </form>

                                <div className="mt-6">
                                    <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                        <FcGoogle className="text-xl" />
                                        Sign up with Google
                                    </button>
                                </div>

                                <p className="mt-8 text-center text-gray-500 font-medium text-sm sm:text-base">
                                    Already have an account?{' '}
                                    <button
                                        onClick={() => setIsFlipped(false)}
                                        className="text-black font-bold hover:underline"
                                    >
                                        Sign In
                                    </button>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right: Image Section */}
                    <div className="hidden md:block w-1/2 h-full relative bg-gray-100 overflow-hidden">
                        {/* Gradient overlay for a premium look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                        
                        <img
                            // A vibrant, premium retail store aesthetic showing clothes and lifestyle products
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Premium Multivendor Products"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        />
                        
                        {/* Text overlay */}
                        <div className="absolute bottom-14 left-12 right-12 z-20 text-white">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                Premium Collection
                            </span>
                            <h3 className="text-4xl font-extrabold mb-3 leading-tight text-white drop-shadow-md">
                                Discover the extraordinary.
                            </h3>
                            <p className="text-lg font-medium text-gray-200 drop-shadow-sm max-w-sm">
                                Access thousands of premium products from top vendors globally, all in one place.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;

'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCamera } from 'react-icons/ai';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    nickName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [profilePic, setProfilePic] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  const handleGoogleRegister = () => {
    setIsLoading(true);
    // Simulate Google registration process
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen max-h-screen h-screen w-full overflow-hidden flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dvytvjplt/image/upload/v1753687838/Gemini_Generated_Image_uxev1nuxev1nuxev_apciia.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Enhanced Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/30 to-pink-900/40"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating elements for decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-center p-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full h-full items-center">
          
          {/* Left Side - Welcome Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-col justify-center items-start text-white px-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                  Welcome to Our Community
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-xl text-gray-200 leading-relaxed">
                  Join thousands of users who have already discovered the magic of our platform. 
                  Create your account and start your journey today.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-sm font-medium">Join 10,000+ happy users</p>
                  <p className="text-xs text-gray-300">★★★★★ 4.9/5 rating</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Registration Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-full"
          >
            <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              {/* Header */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <AiOutlineUser className="w-6 h-6 text-pink-500" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Create Account</h2>
                  <p className="text-pink-100">Join our amazing community</p>
                </motion.div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Profile Picture Upload */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center mb-4"
                  >
                    <div className="relative mb-2">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 overflow-hidden border-4 border-gradient-to-r from-pink-300 to-purple-300 shadow-lg">
                        {profilePic ? (
                          <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-pink-400">
                            <AiOutlineUser className="w-10 h-10" />
                          </div>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-full hover:shadow-lg transition-all duration-300"
                      >
                        <AiOutlineCamera className="w-3 h-3" />
                      </motion.button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Upload profile picture</p>
                  </motion.div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 gap-3">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AiOutlineUser className="h-4 w-4 text-pink-400" />
                        </div>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl bg-white/80 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300 text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Nickname */}
                    <div>
                      <label htmlFor="nickName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nickname
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AiOutlineUser className="h-4 w-4 text-pink-400" />
                        </div>
                        <input
                          id="nickName"
                          name="nickName"
                          type="text"
                          required
                          value={formData.nickName}
                          onChange={handleChange}
                          className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl bg-white/80 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300 text-sm"
                          placeholder="johndoe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AiOutlineMail className="h-4 w-4 text-pink-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl bg-white/80 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300 text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AiOutlineLock className="h-4 w-4 text-pink-400" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="block w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-xl bg-white/80 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300 text-sm"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <AiOutlineEyeInvisible className="h-4 w-4 text-pink-400 hover:text-pink-600" />
                          ) : (
                            <AiOutlineEye className="h-4 w-4 text-pink-400 hover:text-pink-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AiOutlineLock className="h-4 w-4 text-pink-400" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="block w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-xl bg-white/80 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300 text-sm"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <AiOutlineEyeInvisible className="h-4 w-4 text-pink-400 hover:text-pink-600" />
                          ) : (
                            <AiOutlineEye className="h-4 w-4 text-pink-400 hover:text-pink-600" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-white text-sm ${
                      isLoading
                        ? 'bg-pink-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-lg'
                    } transition-all duration-300 flex items-center justify-center mt-4`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </motion.button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-3 text-gray-400 text-xs">or</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Google Sign In */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleRegister}
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 text-sm"
                >
                  <FcGoogle className="w-4 h-4 mr-2" />
                  Continue with Google
                </motion.button>

                {/* Login Link */}
                <div className="text-center mt-4">
                  <p className="text-gray-600 text-sm">
                    Already have an account?{' '}
                    <a href="/login" className="text-pink-600 font-medium hover:text-pink-800 transition-colors">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
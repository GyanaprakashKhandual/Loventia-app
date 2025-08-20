'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  AiOutlineMail, AiOutlineLock, AiOutlineUser, 
  AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMessage 
} from 'react-icons/ai';

export default function RegisterPage() {
  const [step, setStep] = useState(1); // 1: Basic info, 2: OTP verification
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill all fields');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    
    return true;
  };

  const handleSendOTP = async () => {
    if (!validateStep1()) return;
    
    setIsSendingOtp(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success('OTP sent to your email');
        setStep(2);
      } else {
        toast.error(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error('Failed to send OTP');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!formData.otp) {
      toast.error('Please enter the OTP');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          otp: formData.otp
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success('Registration successful!');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed');
    } finally {
      setIsLoading(false);
    }
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
                  Welcome to Loventia
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-xl text-gray-200 leading-relaxed">
                  Join our community to share skills, learn from others, and grow together. 
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
                  <p className="text-sm font-medium">Join 10,000+ skilled users</p>
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
                  <h2 className="text-2xl font-bold text-white">
                    {step === 1 ? 'Create Account' : 'Verify Email'}
                  </h2>
                  <p className="text-pink-100">
                    {step === 1 ? 'Join our amazing community' : 'Enter the OTP sent to your email'}
                  </p>
                </motion.div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                {step === 1 ? (
                  <form className="space-y-4">
                    {/* Form Fields */}
                    <div className="grid grid-cols-1 gap-3">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AiOutlineUser className="h-4 w-4 text-pink-400" />
                          </div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl bg-white/80 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300 text-sm"
                            placeholder="John Doe"
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

                    {/* Send OTP Button */}
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSendOTP}
                      disabled={isSendingOtp}
                      className={`w-full py-3 px-4 rounded-xl font-semibold text-white text-sm ${
                        isSendingOtp
                          ? 'bg-pink-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-lg'
                      } transition-all duration-300 flex items-center justify-center mt-4`}
                    >
                      {isSendingOtp ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending OTP...
                        </>
                      ) : (
                        'Send Verification Code'
                      )}
                    </motion.button>
                  </form>
                ) : (
                  // OTP Verification Step
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="text-center mb-4">
                      <p className="text-gray-600 text-sm">
                        We've sent a 6-digit verification code to <span className="font-medium">{formData.email}</span>
                      </p>
                    </div>

                    <div>
                      <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                        Verification Code
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AiOutlineMessage className="h-4 w-4 text-pink-400" />
                        </div>
                        <input
                          id="otp"
                          name="otp"
                          type="text"
                          required
                          value={formData.otp}
                          onChange={handleChange}
                          className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl bg-white/80 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 focus:outline-none transition-all duration-300 text-sm"
                          placeholder="Enter 6-digit code"
                          maxLength="6"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep(1)}
                        className="flex-1 py-3 px-4 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-sm"
                      >
                        Back
                      </motion.button>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold text-white text-sm ${
                          isLoading
                            ? 'bg-pink-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-lg'
                        } transition-all duration-300 flex items-center justify-center`}
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
                    </div>

                    <div className="text-center mt-4">
                      <button
                        type="button"
                        onClick={handleSendOTP}
                        disabled={isSendingOtp}
                        className="text-pink-600 text-sm font-medium hover:text-pink-800 transition-colors"
                      >
                        {isSendingOtp ? 'Resending...' : 'Resend code'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Divider - Only show in step 1 */}
                {step === 1 && (
                  <>
                    <div className="flex items-center my-4">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="flex-shrink mx-3 text-gray-400 text-xs">or</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                    </div>
                  </>
                )}

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
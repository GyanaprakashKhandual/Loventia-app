'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaCheckCircle, FaExclamationTriangle, FaBook, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    // Clear form when switching between login/register
    if (isLogin) {
      setFormData(prev => ({ ...prev, name: '' }));
      setErrors({});
      setMessage({ text: '', type: '' });
    }
  }, [isLogin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setMessage({ text: '', type: '' });
    
    try {
      const url = isLogin 
        ? 'http://localhost:5000/api/v1/auth/login'
        : 'http://localhost:5000/api/v1/auth/register';
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        if (isLogin) {
          // Store token in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          
          setMessage({ 
            text: 'Login successful! Redirecting...', 
            type: 'success' 
          });
          
          // Redirect to home page after successful login
          setTimeout(() => {
            router.push('/');
          }, 1500);
        } else {
          setMessage({ 
            text: 'Registration successful! Please check your email to verify your account.', 
            type: 'success' 
          });
          
          // Reset form after successful registration
          setFormData({
            name: '',
            email: '',
            password: ''
          });
        }
      } else {
        setMessage({ 
          text: data.message || 'An error occurred', 
          type: 'error' 
        });
        
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (error) {
      setMessage({ 
        text: 'Network error. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[radial-gradient(circle_at_top,_#22d3ee,_#fef3c7,_#fbbf24)]">
      {/* Decorative SVG elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-1/3 opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0891b2" // cyan
            d="M50,-50C64.5,-36.1,75.2,-18,74.3,-0.9C73.4,16.2,60.9,32.4,46.4,45.1C32,57.8,15.6,67,-3.4,70.4C-22.3,73.8,-44.7,71.4,-58.1,58.7C-71.6,46,-76.2,23,-74.5,1.5C-72.8,-20.1,-64.7,-40.1,-51.3,-54C-37.8,-67.9,-18.9,-75.6,0.3,-75.9C19.5,-76.2,39,-69.1,50,-50Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-1/4 opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f59e0b" // amber
            d="M42.4,-56.9C55.3,-47.9,66.5,-35.8,71.1,-21.5C75.7,-7.2,73.6,9.3,66.2,23.8C58.8,38.3,46.1,50.8,31.2,60.1C16.3,69.4,-0.8,75.6,-16.3,71.8C-31.8,68,-45.6,54.3,-56.1,38.9C-66.6,23.5,-73.8,6.5,-72.1,-10.9C-70.3,-28.2,-59.5,-45.9,-44.5,-54.6C-29.5,-63.3,-10.3,-63.1,5.5,-68.9C21.3,-74.7,42.6,-86.5,42.4,-56.9Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
      </div>

      {/* Left Sidebar - Welcome Content */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="flex flex-col justify-center items-center w-full p-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            {/* Logo Section */}
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <div className="p-6 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <FaGraduationCap className="text-5xl text-cyan-700" />
                </div>
              </motion.div>
              <h1 className="text-5xl font-bold text-cyan-800 mb-4">Loventia</h1>
              <p className="text-xl text-cyan-700 leading-relaxed">
                Transform your learning journey with our innovative skill-sharing platform
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start space-x-4 bg-white/15 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              >
                <div className="p-3 bg-cyan-100 rounded-full">
                  <FaBook className="text-cyan-600 text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-cyan-800">Learn Anything</h3>
                  <p className="text-cyan-700">Discover new skills from expert instructors worldwide</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-start space-x-4 bg-white/15 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              >
                <div className="p-3 bg-emerald-100 rounded-full">
                  <FaLightbulb className="text-emerald-600 text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-cyan-800">Teach Anything</h3>
                  <p className="text-cyan-700">Teach what you know and earn while helping others</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="flex items-start space-x-4 bg-white/15 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              >
                <div className="p-3 bg-purple-100 rounded-full">
                  <FaRocket className="text-purple-600 text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-cyan-800">Accelerate Growth</h3>
                  <p className="text-cyan-700">Fast-track your career with practical, real-world skills</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-amber-500 p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <div className="p-3 bg-white rounded-full">
                  <FaGraduationCap className="text-3xl text-cyan-600" />
                </div>
              </motion.div>
              <h2 className="text-2xl font-bold text-white">
                {isLogin ? 'Welcome Back!' : 'Join Loventia'}
              </h2>
              <p className="text-cyan-100 mt-2">
                {isLogin 
                  ? 'Sign in to continue your learning journey' 
                  : 'Start your learning adventure today'
                }
              </p>
            </div>

            {/* Message Alert */}
            {message.text && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mx-6 mt-6 p-3 rounded-lg flex items-center ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {message.type === 'success' ? (
                  <FaCheckCircle className="mr-2" />
                ) : (
                  <FaExclamationTriangle className="mr-2" />
                )}
                <span className="text-sm">{message.text}</span>
              </motion.div>
            )}

            {/* Toggle between Login and Register */}
            <div className="flex border-b border-gray-200 mt-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 font-medium text-center transition-colors ${
                  isLogin 
                    ? 'text-cyan-600 border-b-2 border-cyan-600 bg-cyan-50/50' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 font-medium text-center transition-colors ${
                  !isLogin 
                    ? 'text-cyan-600 border-b-2 border-cyan-600 bg-cyan-50/50' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } bg-white/70`}
                        placeholder="Full Name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } bg-white/70`}
                  placeholder="Email Address"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } bg-white/70`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 to-amber-500 text-white py-3 rounded-lg font-medium flex items-center justify-center disabled:opacity-70 hover:shadow-lg transition-all"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : isLogin ? (
                  'Sign In to Loventia'
                ) : (
                  'Create Your Account'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Mobile Welcome Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 lg:hidden text-center text-white"
          >
            <p className="text-lg font-medium">Welcome to Loventia</p>
            <p className="text-sm opacity-90 mt-1">Your gateway to endless learning possibilities</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
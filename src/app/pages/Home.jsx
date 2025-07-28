'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, MessageCircle, Share2, Shield, Sparkles, ChevronRight, Menu, X } from 'lucide-react';

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const router = useRouter();

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Connect with Love",
      description: "Build meaningful relationships and share moments that matter"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "Join millions of users creating authentic connections worldwide"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your privacy and security are our top priorities"
    }
  ];

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignUp = () => {
    router.push('/register');
  };

  return (
    <div className="min-h-screen min-w-full max-h-screen max-w-full overflow-hidden bg-gradient-to-br from-pink-100 via-white to-red-50 text-gray-800 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
            Loventia
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#features"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Features
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#about"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            About
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignUp}
            className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded-full font-semibold text-white hover:shadow-lg transition-all"
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-lg z-40 p-6 shadow-lg border-b border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
              <button onClick={handleLogin} className="text-left text-gray-600 hover:text-gray-800">Login</button>
              <button
                onClick={handleSignUp}
                className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded-full font-semibold text-white text-left"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
              Loventia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Where hearts connect, stories unfold, and friendships bloom in a space designed for authentic human connection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSignUp}
              className="bg-gradient-to-r from-pink-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold text-white flex items-center justify-center space-x-2 hover:shadow-2xl transition-all"
            >
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
              className="border-2 border-pink-400 px-8 py-4 rounded-full text-lg font-semibold text-pink-600 hover:bg-pink-50 transition-all"
            >
              Sign In
            </motion.button>
          </motion.div>

          {/* Floating Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`p-6 rounded-2xl backdrop-blur-lg transition-all duration-500 cursor-pointer border ${
                    activeFeature === index
                      ? 'bg-white bg-opacity-60 border-pink-300 shadow-lg'
                      : 'bg-white bg-opacity-30 border-gray-200 hover:bg-opacity-50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      animate={activeFeature === index ? { rotate: 360 } : {}}
                      transition={{ duration: 0.8 }}
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-4"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
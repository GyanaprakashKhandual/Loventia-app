'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Sparkles, 
  Shield, 
  Globe, 
  Zap,
  Camera,
  MessageCircle,
  Star,
  Award,
  ChevronDown,
  Play,
  Download,
  Mail
} from 'lucide-react';

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const features = [
    {
      icon: Heart,
      title: "Authentic Connections",
      description: "Build meaningful relationships through genuine interactions and shared experiences."
    },
    {
      icon: Camera,
      title: "Visual Storytelling",
      description: "Share your life's moments through stunning photos, reels, and creative content."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is protected with end-to-end encryption and advanced privacy controls."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with people worldwide and discover diverse cultures and perspectives."
    }
  ];

  const stats = [
    { number: "10M+", label: "Active Users" },
    { number: "50M+", label: "Posts Shared" },
    { number: "150+", label: "Countries" },
    { number: "99.9%", label: "Uptime" }
  ];

  const team = [
    { name: "Alex Rivera", role: "CEO & Founder", avatar: "AR" },
    { name: "Maya Chen", role: "CTO", avatar: "MC" },
    { name: "James Wilson", role: "Head of Design", avatar: "JW" },
    { name: "Sofia Kumar", role: "Community Lead", avatar: "SK" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"
        />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <Heart className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent"
          >
            Loventia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-700 mb-8 font-light"
          >
            Where Hearts Connect, Stories Unite
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover a new way to connect with friends, family, and communities around the world. 
            Share your passions, create memories, and build lasting relationships in a safe, 
            beautiful, and intuitive social space designed for the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-purple-500" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To create a social platform that prioritizes authentic human connections, 
              celebrates diversity, and empowers people to share their stories in a safe, 
              inclusive environment where everyone feels valued and heard.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <Sparkles className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Built for Connection</h3>
                <p className="text-gray-600 leading-relaxed">
                  In a world where digital interactions often feel shallow, Loventia brings back 
                  the warmth of genuine human connection. Our platform is designed to foster 
                  meaningful relationships that transcend the screen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-100">
                <Users className="w-12 h-12 text-pink-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Community First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every feature we build is guided by our commitment to creating positive, 
                  supportive communities where users can express themselves freely while 
                  feeling safe and respected.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Loventia?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl' 
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <feature.icon className={`w-12 h-12 mb-4 ${activeFeature === index ? 'text-white' : 'text-purple-500'}`} />
                <h3 className={`text-xl font-bold mb-3 ${activeFeature === index ? 'text-white' : 'text-gray-800'}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${activeFeature === index ? 'text-white/90' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Growing Together
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join millions of users who have already discovered the joy of authentic social connection
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Passionate individuals dedicated to building the future of social connection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl group-hover:shadow-2xl transition-shadow"
                  >
                    {member.avatar}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Connect?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the Loventia community today and discover a new way to connect, 
              share, and build meaningful relationships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold">Loventia</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 Loventia. All rights reserved. Built with ❤️ for authentic connections.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    ArrowRight,
    Users,
    BookOpen,
    Zap,
    Star,
    Menu,
    X,
    Heart,
    Sparkles,
    TrendingUp,
    Globe,
    Award,
    MessageCircle,
    UserPlus,
    Target,
    CheckCircle,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Github
} from 'lucide-react'

export default function LoventiaLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeFeature, setActiveFeature] = useState(0)
    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    const features = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Skill Matching",
            description: "Our AI-powered algorithm matches you with people who have complementary skills, creating perfect learning partnerships."
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Interactive Learning",
            description: "Engage in real-time video calls, share resources, and track your learning progress with built-in tools."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Instant Connections",
            description: "Connect instantly with skilled individuals around the world and start your learning journey immediately."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Skill Verification",
            description: "Earn verified badges and certificates as you master new skills and help others learn."
        }
    ]

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "UX Designer → Python Developer",
            content: "I taught design principles and learned Python programming. The skill swap was incredibly valuable for both of us!",
            avatar: "SC",
            rating: 5
        },
        {
            name: "Marcus Rodriguez",
            role: "Chef → Digital Marketer",
            content: "Exchanged cooking techniques for social media marketing skills. Now I run my own food blog successfully!",
            avatar: "MR",
            rating: 5
        },
        {
            name: "Emily Watson",
            role: "Musician → Web Developer",
            content: "Teaching guitar while learning React.js has been an amazing journey. The community is so supportive!",
            avatar: "EW",
            rating: 5
        }
    ]

    const stats = [
        { number: "50K+", label: "Active Users" },
        { number: "15K+", label: "Skills Swapped" },
        { number: "95%", label: "Success Rate" },
        { number: "100+", label: "Countries" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Loventia
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Blogs</a>
                            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">How it Works</a>
                            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Sign In</a>
                            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Help</a>
                            <motion.button
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white border-t border-purple-100"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="px-4 py-4 space-y-3">
                            <a href="#features" className="block text-gray-700 hover:text-purple-600">Features</a>
                            <a href="#how-it-works" className="block text-gray-700 hover:text-purple-600">How it Works</a>
                            <a href="#testimonials" className="block text-gray-700 hover:text-purple-600">Testimonials</a>
                            <a href="#pricing" className="block text-gray-700 hover:text-purple-600">Pricing</a>
                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Swap Skills,
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    {' '}Build Dreams
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Connect with people worldwide to exchange knowledge, learn new skills, and teach what you know.
                                Your expertise is someone else's dream - let's make it happen together.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center group">
                                Start Swapping Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-50 transition-all duration-300">
                                Watch Demo
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Powerful Features for
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Seamless Learning</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to connect, learn, and grow in one beautiful platform
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-purple-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-purple-600 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            How Loventia Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get started in just three simple steps and begin your skill-swapping journey today
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            {
                                step: "01",
                                icon: <UserPlus className="w-12 h-12" />,
                                title: "Create Your Profile",
                                description: "Sign up and list the skills you want to teach and learn. Our smart algorithm will find perfect matches."
                            },
                            {
                                step: "02",
                                icon: <MessageCircle className="w-12 h-12" />,
                                title: "Connect & Match",
                                description: "Browse potential skill partners, send messages, and schedule your first learning session."
                            },
                            {
                                step: "03",
                                icon: <Target className="w-12 h-12" />,
                                title: "Learn & Teach",
                                description: "Start exchanging knowledge through video calls, shared resources, and interactive sessions."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                        {item.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-white text-purple-600 font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center border-2 border-purple-600">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Hear from our community members who have transformed their lives through skill swapping
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section id="community" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Join Our Growing
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Community</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Connect with like-minded learners from around the world and be part of something amazing
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: <Globe className="w-12 h-12" />,
                                title: "Global Network",
                                description: "Connect with skilled individuals from over 100 countries worldwide",
                                stats: "100+ Countries"
                            },
                            {
                                icon: <Users className="w-12 h-12" />,
                                title: "Active Community",
                                description: "Join thousands of active members sharing knowledge daily",
                                stats: "50K+ Members"
                            },
                            {
                                icon: <BookOpen className="w-12 h-12" />,
                                title: "Diverse Skills",
                                description: "Explore over 500 different skills and subjects available for learning",
                                stats: "500+ Skills"
                            },
                            {
                                icon: <MessageCircle className="w-12 h-12" />,
                                title: "24/7 Support",
                                description: "Get help anytime with our round-the-clock community support",
                                stats: "24/7 Available"
                            },
                            {
                                icon: <Award className="w-12 h-12" />,
                                title: "Verified Learning",
                                description: "Earn certificates and badges to showcase your new skills",
                                stats: "1000+ Certificates"
                            },
                            {
                                icon: <TrendingUp className="w-12 h-12" />,
                                title: "Career Growth",
                                description: "95% of users report career advancement after skill swapping",
                                stats: "95% Success Rate"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-purple-100 group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                                <div className="text-purple-600 font-semibold">{item.stats}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Community Highlights */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    Real Stories, Real Impact
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Career Transitions</h4>
                                            <p className="text-gray-600">Over 10,000 successful career changes through skill swapping</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">New Friendships</h4>
                                            <p className="text-gray-600">Meaningful connections formed beyond just learning</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <TrendingUp className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Skill Mastery</h4>
                                            <p className="text-gray-600">Average time to learn a new skill reduced by 60%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                                    <div className="text-6xl font-bold text-purple-600 mb-2">92%</div>
                                    <div className="text-gray-700 font-medium mb-4">User Satisfaction Rate</div>
                                    <p className="text-gray-600 text-sm">
                                        "Best platform I've ever used for learning new skills and meeting amazing people!"
                                    </p>
                                    <div className="flex justify-center mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Transform Your Learning?
                        </h2>
                        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of learners and teachers who are already swapping skills and building amazing connections.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300">
                                Start Your Journey
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-5 gap-8 mb-8">
                        {/* Logo and Description */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold">Loventia</span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Connecting passionate learners and skilled teachers worldwide. Transform your life through the power of skill sharing and meaningful connections.
                            </p>
                            <div className="flex space-x-4">
                                {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Product</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Company</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Support</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-gray-800 pt-8 mb-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-purple-400" />
                                <span className="text-gray-400">hello@loventia.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-purple-400" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-purple-400" />
                                <span className="text-gray-400">San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Loventia. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
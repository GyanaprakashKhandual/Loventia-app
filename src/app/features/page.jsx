'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Heart, 
  Camera, 
  Video, 
  MessageCircle, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Sparkles, 
  Bell, 
  Search, 
  Share2, 
  Lock, 
  UserPlus, 
  Music, 
  Filter, 
  Bookmark, 
  Eye, 
  Award, 
  Clock, 
  Smile, 
  MapPin,
  ChevronRight,
  Play,
  Pause,
  Star
} from 'lucide-react';

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('social');
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const categories = [
    { id: 'social', label: 'Social Features', icon: Users, color: 'from-purple-500 to-pink-500' },
    { id: 'content', label: 'Content Creation', icon: Camera, color: 'from-blue-500 to-purple-500' },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield, color: 'from-green-500 to-blue-500' },
    { id: 'discovery', label: 'Discovery', icon: Search, color: 'from-orange-500 to-red-500' },
    { id: 'engagement', label: 'Engagement', icon: Heart, color: 'from-pink-500 to-red-500' }
  ];

  const features = {
    social: [
      {
        icon: MessageCircle,
        title: "Real-time Messaging",
        description: "Connect instantly with friends through our lightning-fast messaging system with read receipts, typing indicators, and emoji reactions.",
        highlights: ["End-to-end encryption", "Group chats up to 200 people", "Voice & video calls", "Message reactions"]
      },
      {
        icon: Users,
        title: "Communities & Groups",
        description: "Join or create communities around your interests. Build meaningful connections with like-minded people worldwide.",
        highlights: ["Public & private groups", "Event planning", "Group video calls", "Shared photo albums"]
      },
      {
        icon: UserPlus,
        title: "Smart Friend Suggestions",
        description: "Discover new friends through our AI-powered recommendation system based on mutual interests and connections.",
        highlights: ["Interest-based matching", "Location proximity", "Mutual friend suggestions", "Activity-based recommendations"]
      },
      {
        icon: Bell,
        title: "Smart Notifications",
        description: "Stay connected without being overwhelmed. Our intelligent notification system learns your preferences.",
        highlights: ["Customizable alerts", "Do not disturb modes", "Priority contacts", "Smart batching"]
      }
    ],
    content: [
      {
        icon: Camera,
        title: "Advanced Photo Editor",
        description: "Transform your photos with professional-grade editing tools, filters, and AI-enhanced features.",
        highlights: ["50+ premium filters", "AI background removal", "HDR enhancement", "Batch editing"]
      },
      {
        icon: Video,
        title: "Reels & Stories",
        description: "Create engaging short-form videos and stories with our intuitive editing suite and trending effects.",
        highlights: ["15-60 second videos", "Trending music library", "AR effects & filters", "Story highlights"]
      },
      {
        icon: Music,
        title: "Music Integration",
        description: "Add the perfect soundtrack to your content with our extensive music library and audio editing tools.",
        highlights: ["Licensed music library", "Audio mixing tools", "Podcast integration", "Sound effects"]
      },
      {
        icon: Filter,
        title: "AI-Powered Filters",
        description: "Experience next-generation AR filters that adapt to your environment and facial features in real-time.",
        highlights: ["Face tracking", "Environment mapping", "Custom filter creation", "Brand partnerships"]
      }
    ],
    privacy: [
      {
        icon: Shield,
        title: "Advanced Privacy Controls",
        description: "Take complete control of your digital footprint with granular privacy settings and data management tools.",
        highlights: ["Granular privacy settings", "Data export tools", "Account deletion", "Anonymous browsing"]
      },
      {
        icon: Lock,
        title: "End-to-End Encryption",
        description: "Your messages, calls, and shared content are protected with military-grade encryption technology.",
        highlights: ["256-bit encryption", "Zero-knowledge architecture", "Secure key exchange", "Perfect forward secrecy"]
      },
      {
        icon: Eye,
        title: "Content Moderation",
        description: "AI-powered content moderation keeps your feed safe while preserving freedom of expression.",
        highlights: ["Real-time scanning", "Community reporting", "Appeal process", "Customizable filters"]
      },
      {
        icon: Bookmark,
        title: "Digital Wellbeing",
        description: "Monitor and manage your social media usage with comprehensive wellbeing tools and insights.",
        highlights: ["Usage tracking", "Break reminders", "Focus modes", "Mental health resources"]
      }
    ],
    discovery: [
      {
        icon: Search,
        title: "Intelligent Search",
        description: "Find exactly what you're looking for with our AI-powered search that understands context and intent.",
        highlights: ["Visual search", "Voice commands", "Trending topics", "Personalized results"]
      },
      {
        icon: Zap,
        title: "Trending Content",
        description: "Stay ahead of the curve with real-time trending topics, hashtags, and viral content discovery.",
        highlights: ["Location-based trends", "Interest categories", "Trending predictions", "Creator spotlights"]
      },
      {
        icon: MapPin,
        title: "Location Discovery",
        description: "Explore nearby events, places, and people. Connect with your local community and discover hidden gems.",
        highlights: ["Nearby events", "Local businesses", "Check-in features", "Location-based recommendations"]
      },
      {
        icon: Globe,
        title: "Global Explore",
        description: "Discover content and creators from around the world with our curated global feed and cultural insights.",
        highlights: ["Cultural discovery", "Language translation", "Global events", "Cross-cultural connections"]
      }
    ],
    engagement: [
      {
        icon: Heart,
        title: "Reaction System",
        description: "Express yourself beyond likes with our comprehensive reaction system and emotional responses.",
        highlights: ["7 reaction types", "Custom reactions", "Reaction analytics", "Mood tracking"]
      },
      {
        icon: Share2,
        title: "Advanced Sharing",
        description: "Share content seamlessly across platforms and within Loventia with powerful sharing tools.",
        highlights: ["Cross-platform sharing", "Story resharing", "Collaborative posts", "Share tracking"]
      },
      {
        icon: Award,
        title: "Creator Rewards",
        description: "Recognize and reward amazing creators with our built-in tipping system and achievement badges.",
        highlights: ["Creator tipping", "Achievement system", "Monthly challenges", "Creator fund program"]
      },
      {
        icon: Sparkles,
        title: "Interactive Elements",
        description: "Engage your audience with polls, quizzes, Q&As, and other interactive content formats.",
        highlights: ["Live polls", "Quiz creation", "Q&A sessions", "Interactive stories"]
      }
    ]
  };

  const FeatureCard = ({ feature, index, category }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
        onHoverStart={() => setHoveredFeature(`${category}-${index}`)}
        onHoverEnd={() => setHoveredFeature(null)}
        className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 group"
      >
        <div className="flex items-start gap-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${categories.find(c => c.id === category)?.color} flex items-center justify-center shadow-lg`}
          >
            <feature.icon className="w-8 h-8 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {feature.description}
            </p>
            
            <div className="space-y-2">
              {feature.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={hoveredFeature === `${category}-${index}` ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6 origin-left"
        />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              <Sparkles className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent"
          >
            Powerful Features
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-700 mb-8 font-light"
          >
            Everything You Need to Connect & Create
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the innovative features that make Loventia the most advanced 
            social platform for authentic connections, creative expression, and meaningful engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                {categories.find(c => c.id === activeCategory)?.label}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                {activeCategory === 'social' && "Connect with friends and build communities that matter"}
                {activeCategory === 'content' && "Create stunning content with professional-grade tools"}
                {activeCategory === 'privacy' && "Stay safe with industry-leading privacy and security"}
                {activeCategory === 'discovery' && "Explore and discover amazing content and creators"}
                {activeCategory === 'engagement' && "Engage authentically with meaningful interactions"}
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {features[activeCategory]?.map((feature, index) => (
                <FeatureCard 
                  key={`${activeCategory}-${index}`}
                  feature={feature}
                  index={index}
                  category={activeCategory}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Why Loventia Stands Out
            </h2>
            <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
              We're not just another social platform. We're building the future of authentic digital connections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Optimized for speed with sub-second load times" },
              { icon: Shield, title: "Privacy First", description: "Your data belongs to you, always encrypted and secure" },
              { icon: Heart, title: "Human-Centered", description: "Designed to foster genuine connections, not addiction" }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <highlight.icon className="w-16 h-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                <p className="text-white/80 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
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
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're constantly innovating. Here's what's next on our roadmap.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Smile, title: "AI Mood Detection", description: "Smart content recommendations based on your emotional state" },
              { icon: Clock, title: "Time Capsule Posts", description: "Schedule posts to be revealed in the future" },
              { icon: Star, title: "Creator Studio Pro", description: "Advanced analytics and monetization tools for creators" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-dashed border-purple-200 text-center group hover:border-purple-400 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="mt-6 flex items-center justify-center gap-2 text-purple-600 font-medium">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Coming Q3 2025</span>
                </div>
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
              Experience the Future
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't just read about these amazing features – experience them yourself. 
              Join Loventia today and discover what makes us different.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl shadow-xl flex items-center justify-center gap-3 mx-auto group"
            >
              Try All Features Free
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
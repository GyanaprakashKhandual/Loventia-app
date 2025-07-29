'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  BookOpen, 
  Video, 
  Users, 
  Shield, 
  Settings, 
  Camera, 
  Bell, 
  Lock, 
  Eye, 
  Heart, 
  User, 
  Smartphone, 
  Monitor, 
  Globe, 
  Download, 
  Upload, 
  Trash2, 
  Edit, 
  Share2, 
  Flag, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Send,
  Bot,
  Headphones,
  FileText
} from 'lucide-react';

export default function LoventiaHelp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState('chat');

  const categories = [
    { id: 'getting-started', label: 'Getting Started', icon: BookOpen, color: 'from-blue-500 to-purple-500' },
    { id: 'account', label: 'Account & Profile', icon: User, color: 'from-purple-500 to-pink-500' },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield, color: 'from-green-500 to-blue-500' },
    { id: 'content', label: 'Posts & Content', icon: Camera, color: 'from-orange-500 to-red-500' },
    { id: 'messaging', label: 'Messages & Chat', icon: MessageCircle, color: 'from-pink-500 to-red-500' },
    { id: 'technical', label: 'Technical Issues', icon: Settings, color: 'from-gray-500 to-blue-500' }
  ];

  const helpContent = {
    'getting-started': [
      {
        question: "How do I create a Loventia account?",
        answer: "Creating an account is easy! Download the Loventia app or visit our website, tap 'Sign Up', enter your email or phone number, create a secure password, and verify your account through the confirmation link or SMS code we'll send you.",
        tags: ["signup", "account", "registration"]
      },
      {
        question: "How do I set up my profile?",
        answer: "After creating your account, tap on your profile picture placeholder, add a photo, write a bio that represents you, add your interests and hobbies, and connect with friends by importing contacts or searching for people you know.",
        tags: ["profile", "setup", "bio"]
      },
      {
        question: "What makes Loventia different from other social platforms?",
        answer: "Loventia focuses on authentic connections with features like mood-based content curation, privacy-first design, meaningful engagement tools, and community-driven content moderation. We prioritize quality interactions over viral content.",
        tags: ["features", "unique", "difference"]
      },
      {
        question: "How do I find and add friends?",
        answer: "Use our smart search feature, import contacts from your phone, browse friend suggestions based on mutual connections, join communities related to your interests, or use the 'People Nearby' feature if you've enabled location services.",
        tags: ["friends", "connections", "search"]
      }
    ],
    'account': [
      {
        question: "How do I change my password?",
        answer: "Go to Settings > Security > Change Password. Enter your current password, create a new strong password, and confirm it. We recommend using a mix of letters, numbers, and symbols for better security.",
        tags: ["password", "security", "change"]
      },
      {
        question: "How can I delete my account?",
        answer: "We're sad to see you go! Go to Settings > Account > Delete Account. You'll have a 30-day grace period to reactivate. After 30 days, your account and all associated data will be permanently deleted.",
        tags: ["delete", "account", "removal"]
      },
      {
        question: "How do I update my profile information?",
        answer: "Tap on your profile, select 'Edit Profile', update your bio, profile picture, cover photo, or personal information, and tap 'Save Changes'. Changes are reflected immediately across the platform.",
        tags: ["edit", "profile", "update"]
      },
      {
        question: "Can I have multiple accounts?",
        answer: "Yes! You can create up to 3 accounts per email address. Switch between accounts by tapping your profile picture and selecting 'Switch Account'. This is great for personal, business, or creative accounts.",
        tags: ["multiple", "accounts", "switch"]
      }
    ],
    'privacy': [
      {
        question: "How do I control who can see my posts?",
        answer: "When creating a post, tap the audience selector (globe icon) and choose from Public, Friends, Close Friends, or Custom. You can also set default privacy settings in Settings > Privacy > Default Post Audience.",
        tags: ["privacy", "posts", "audience"]
      },
      {
        question: "How does Loventia protect my data?",
        answer: "We use end-to-end encryption for messages, store data in secure servers with 256-bit encryption, never sell your personal information, and give you full control over data sharing and deletion.",
        tags: ["data", "protection", "encryption"]
      },
      {
        question: "How do I block or report someone?",
        answer: "Go to their profile, tap the three dots menu, select 'Block' or 'Report'. Blocking prevents them from seeing your content or contacting you. Reporting helps our team address policy violations.",
        tags: ["block", "report", "safety"]
      },
      {
        question: "Can I control what notifications I receive?",
        answer: "Yes! Go to Settings > Notifications to customize push notifications, email alerts, and SMS notifications. You can set different preferences for likes, comments, messages, and friend requests.",
        tags: ["notifications", "control", "settings"]
      }
    ],
    'content': [
      {
        question: "How do I create and share posts?",
        answer: "Tap the '+' button, choose your content type (photo, video, text, or reel), add your content, write a caption, add hashtags if desired, select your audience, and tap 'Share' to publish.",
        tags: ["create", "post", "share"]
      },
      {
        question: "What are Loventia Reels and how do I make them?",
        answer: "Reels are short, engaging videos up to 60 seconds. Tap '+' > 'Reel', record or upload video clips, add music from our library, apply filters and effects, and share with your audience.",
        tags: ["reels", "video", "create"]
      },
      {
        question: "How do I edit or delete a post after publishing?",
        answer: "Find your post, tap the three dots menu, select 'Edit' to modify the caption or audience, or 'Delete' to remove it permanently. Note: You can't edit the actual media content after posting.",
        tags: ["edit", "delete", "post"]
      },
      {
        question: "Why was my content removed?",
        answer: "Content may be removed for violating our Community Guidelines, including hate speech, harassment, spam, or inappropriate content. You'll receive a notification explaining the reason and can appeal the decision.",
        tags: ["removed", "content", "guidelines"]
      }
    ],
    'messaging': [
      {
        question: "How do messaging and chat work?",
        answer: "Tap the message icon, select a contact or start a new chat, type your message, and send. Messages are end-to-end encrypted and support text, photos, videos, voice messages, and reactions.",
        tags: ["messaging", "chat", "send"]
      },
      {
        question: "How do I create group chats?",
        answer: "In messages, tap 'New Group', add participants (up to 200 people), set a group name and photo, customize group settings, and start chatting. You can add or remove members anytime.",
        tags: ["group", "chat", "create"]
      },
      {
        question: "Can I make voice and video calls?",
        answer: "Yes! In any chat, tap the phone icon for voice calls or video icon for video calls. Group calls support up to 8 people for video and 32 for voice calls.",
        tags: ["calls", "voice", "video"]
      },
      {
        question: "How do I manage message requests?",
        answer: "Messages from people you don't follow go to Message Requests. Check them in Messages > Requests. You can accept, decline, or ignore requests. Accepted requests move to your main inbox.",
        tags: ["requests", "messages", "manage"]
      }
    ],
    'technical': [
      {
        question: "The app is running slowly or crashing. What should I do?",
        answer: "Try these steps: close and restart the app, restart your device, check for app updates in your app store, clear the app cache (Android: Settings > Apps > Loventia > Storage > Clear Cache), or reinstall the app.",
        tags: ["slow", "crash", "performance"]
      },
      {
        question: "I can't upload photos or videos. How do I fix this?",
        answer: "Check your internet connection, ensure you have enough storage space, verify app permissions for camera and photos, try uploading smaller files, or switch between WiFi and mobile data.",
        tags: ["upload", "photos", "videos"]
      },
      {
        question: "How do I recover a forgotten password?",
        answer: "On the login screen, tap 'Forgot Password', enter your email or phone number, check for a reset link or code, follow the instructions to create a new password. The reset link expires in 24 hours.",
        tags: ["password", "forgot", "reset"]
      },
      {
        question: "The app won't load or shows connection errors.",
        answer: "Check your internet connection, try switching between WiFi and mobile data, check if Loventia servers are down (we'll post updates on our status page), or try accessing through our website instead.",
        tags: ["connection", "loading", "errors"]
      }
    ]
  };

  const contactMethods = [
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Usually within 5 minutes',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us detailed questions',
      icon: Mail,
      availability: 'Always open',
      responseTime: 'Within 24 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with our team',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'community',
      title: 'Community Forum',
      description: 'Get help from other users',
      icon: Users,
      availability: '24/7',
      responseTime: 'Varies',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredContent = searchQuery.length > 0 
    ? Object.values(helpContent).flat().filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : helpContent[activeCategory] || [];

  const FAQItem = ({ item, index, isSearchResult = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isExpanded = expandedFAQ === `${isSearchResult ? 'search' : activeCategory}-${index}`;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden"
      >
        <motion.button
          onClick={() => setExpandedFAQ(isExpanded ? null : `${isSearchResult ? 'search' : activeCategory}-${index}`)}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
          whileHover={{ backgroundColor: "rgba(147, 51, 234, 0.05)" }}
        >
          <h3 className="text-lg font-semibold text-gray-800 pr-4">{item.question}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-purple-500 flex-shrink-0" />
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-purple-100"
            >
              <div className="p-6 pt-4">
                <p className="text-gray-600 leading-relaxed mb-4">{item.answer}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <HelpCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
              How Can We Help?
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Find answers to common questions, get step-by-step guides, or contact our support team. 
              We're here to make your Loventia experience amazing.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative max-w-2xl mx-auto mb-12"
            >
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help topics, features, or issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 text-lg rounded-full border-2 border-purple-200 focus:border-purple-500 focus:outline-none bg-white shadow-lg"
              />
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      {!searchQuery && (
        <section className="px-6 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-200 shadow-md'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {searchQuery 
                ? `Search Results (${filteredContent.length})`
                : categories.find(c => c.id === activeCategory)?.label || 'Frequently Asked Questions'
              }
            </h2>
            {searchQuery && (
              <p className="text-gray-600">
                Showing results for "<span className="font-semibold text-purple-600">{searchQuery}</span>"
              </p>
            )}
          </motion.div>

          <div className="space-y-6">
            {filteredContent.length > 0 ? (
              filteredContent.map((item, index) => (
                <FAQItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  isSearchResult={!!searchQuery}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500">
                  Try different keywords or browse our categories above.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedContactMethod(method.id)}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 ${
                  selectedContactMethod === method.id
                    ? `bg-gradient-to-br ${method.color} text-white shadow-2xl`
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl border border-purple-100'
                }`}
              >
                <method.icon className={`w-12 h-12 mb-6 ${selectedContactMethod === method.id ? 'text-white' : 'text-purple-500'}`} />
                <h3 className={`text-xl font-bold mb-3 ${selectedContactMethod === method.id ? 'text-white' : 'text-gray-800'}`}>
                  {method.title}
                </h3>
                <p className={`mb-4 ${selectedContactMethod === method.id ? 'text-white/90' : 'text-gray-600'}`}>
                  {method.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className={`flex items-center gap-2 ${selectedContactMethod === method.id ? 'text-white/80' : 'text-gray-500'}`}>
                    <Clock className="w-4 h-4" />
                    {method.availability}
                  </div>
                  <div className={`flex items-center gap-2 ${selectedContactMethod === method.id ? 'text-white/80' : 'text-gray-500'}`}>
                    <CheckCircle className="w-4 h-4" />
                    {method.responseTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quick Resources
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Additional resources to help you make the most of Loventia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Video, title: "Video Tutorials", description: "Step-by-step video guides for all features" },
              { icon: FileText, title: "User Manual", description: "Complete documentation and feature guides" },
              { icon: Users, title: "Community Forum", description: "Connect with other users and share tips" },
              { icon: Bot, title: "AI Assistant", description: "Get instant answers with our AI helper" },
              { icon: Download, title: "Mobile App", description: "Download our apps for iOS and Android" },
              { icon: Globe, title: "Status Page", description: "Check system status and uptime" }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/20 transition-all cursor-pointer"
              >
                <resource.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-white/80 leading-relaxed">{resource.description}</p>
                <ChevronRight className="w-5 h-5 text-white/60 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-96 h-96 bg-white rounded-3xl shadow-2xl border border-purple-100 z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Loventia Support</h3>
                    <p className="text-sm text-white/80">We're here to help!</p>
                  </div>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto">
              <div className="bg-purple-50 rounded-2xl p-4 mb-4">
                <p className="text-gray-700">
                  Hi! I'm here to help you with any questions about Loventia. 
                  What can I assist you with today?
                </p>
              </div>
            </div>
            
            <div className="p-4 border-t border-purple-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-purple-200 rounded-full focus:outline-none focus:border-purple-500"
                />
                <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


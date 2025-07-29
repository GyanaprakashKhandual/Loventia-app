'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  UserPlus, 
  User, 
  Search, 
  Video, 
  Camera, 
  Users, 
  Users2, 
  MessageCircle, 
  Settings,
  Heart
} from 'lucide-react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('home');

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'follow', icon: UserPlus, label: 'Follow' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'reels', icon: Video, label: 'Reels' },
    { id: 'photos', icon: Camera, label: 'Photos' },
    { id: 'friends', icon: Users, label: 'Friends' },
    { id: 'groups', icon: Users2, label: 'Groups' },
    { id: 'community', icon: MessageCircle, label: 'Community' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const sidebarVariants = {
    open: {
      width: 280,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    hover: {
      scale: 1.05,
      x: 8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Always Open Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="open"
        animate="open"
        className="bg-white border-r border-purple-100 flex flex-col sticky top-0 h-screen z-20"
      >
        {/* Logo Section */}
        <motion.div 
          className="p-5 border-b border-purple-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Heart className="w-6 h-6 text-white" />
            </motion.div>
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Loventia
            </motion.h1>
          </div>
        </motion.div>

        {/* Navigation Items */}
        <nav className="flex-1 py-6 px-4 space-y-2">
          {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <motion.button
                key={item.id}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white  ' 
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <IconComponent className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

       
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <motion.header 
          className="bg-white    border-b border-purple-100 p-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            {sidebarItems.find(item => item.id === activeItem)?.label || 'Home'}
          </h2>
        </motion.header>

        {/* Content Area */}
        <motion.main 
          className="flex-1 p-6 overflow-y-auto"
          key={activeItem}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl   p-8 border border-purple-100"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(sidebarItems.find(item => item.id === activeItem)?.icon || Home, { 
                    className: "w-10 h-10 text-purple-600" 
                  })}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {sidebarItems.find(item => item.id === activeItem)?.label || 'Home'}
                </h3>
                <p className="text-gray-600">
                  Welcome to the {sidebarItems.find(item => item.id === activeItem)?.label?.toLowerCase()} section of Loventia. 
                  This is where your {sidebarItems.find(item => item.id === activeItem)?.label?.toLowerCase()} content will be displayed.
                </p>
              </div>
              
              {/* Sample Content Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -5, shadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
                  >
                    <div className="w-full h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg mb-4"></div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sample Content {i}</h4>
                    <p className="text-sm text-gray-600">This is sample content for the {sidebarItems.find(item => item.id === activeItem)?.label?.toLowerCase()} section.</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
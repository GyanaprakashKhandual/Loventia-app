"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Users,
  MessageCircle,
  UserPlus,
  Settings,
  Workflow,
  MoreHorizontal,
} from "lucide-react";
import { FaBook, FaCoffee, FaList } from "react-icons/fa";

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Sidebar items
  const sidebarItems = [
    { id: "coffee", icon: FaCoffee, label: "Coffee", href: "/app/coffee" },
    { id: "home", icon: Home, label: "Home", href: "/app/home" },
    { id: "profile", icon: User, label: "Profile", href: "/app/profile" },
    { id: "community", icon: Users, label: "Community", href: "/app/community" },
    { id: "message", icon: MessageCircle, label: "Messages", href: "/app/messages" },
    { id: "friends", icon: UserPlus, label: "Friends", href: "/app/friends" },
    { id: "marketplace", icon: FaList, label: "Marketplace", href: "/app/marketplace" },
    { id: "swapspace", icon: Workflow, label: "Swapspace", href: "/app/swapspace" },
    { id: "resources", icon: FaBook, label: "Resources", href: "/app/resource" },
    { id: "more", icon: MoreHorizontal, label: "More from Image", href: "/app/about" },
    { id: "settings", icon: Settings, label: "Settings", href: "/app/settings" },
  ];

  return (
    <div className="relative">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-18 bg-gradient-to-b from-purple-100 via-sky-50 to-blue-50 border-r border-white/20 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center py-6 space-y-4">
          {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-center w-12 h-12 rounded-xl hover:shadow-sm transition-all duration-200 backdrop-blur-sm border border-white/30"
                  >
                    <IconComponent
                      size={20}
                      className="text-slate-600 group-hover:text-slate-800 transition-colors duration-200"
                    />
                  </Link>
                </motion.div>

                {/* Tooltip */}
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-16 top-1/2 transform -translate-y-1/2 z-60"
                  >
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/30 whitespace-nowrap shadow-md">
                      <span className="text-sm font-medium text-slate-700">
                        {item.label}
                      </span>
                      {/* Tooltip arrow */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                        <div className="w-2 h-2 bg-white/95 border-l border-b border-white/30 rotate-45"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, createContext, useContext } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

// Context for global access
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    let soundFile = "/info.mp3";
    if (type === "success") soundFile = "/success.mp3";
    if (type === "error") soundFile = "/error.mp3";
    if (type === "warning") soundFile = "/warning.mp3";

    // play sound
    const audio = new Audio(soundFile);
    audio.play();

    // set alert
    setAlert({ type, message });

    // auto-close after 3s
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Alert alert={alert} />
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);

const Alert = ({ alert }) => {
  if (!alert) return null;

  const styles = {
    success: {
      color: "bg-green-500 text-white",
      icon: <FaCheckCircle className="text-xl mr-2" />,
    },
    error: {
      color: "bg-red-500 text-white",
      icon: <FaExclamationCircle className="text-xl mr-2" />,
    },
    info: {
      color: "bg-blue-500 text-white",
      icon: <FaInfoCircle className="text-xl mr-2" />,
    },
    warning: {
      color: "bg-yellow-400 text-black",
      icon: <FaExclamationTriangle className="text-xl mr-2" />,
    },
  };

  const { color, icon } = styles[alert.type];

  return (
    <AnimatePresence>
      {alert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg flex items-center ${color}`}
        >
          {icon}
          <span>{alert.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
  
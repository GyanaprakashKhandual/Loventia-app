import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/assets/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loventia - Learn and Teach with Swapping",
  description: "This is the modern social media application for the learner and teacher where they will swap their skill",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}

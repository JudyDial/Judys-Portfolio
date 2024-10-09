import Image from 'next/image';
import profilePic from '../public/profile.png';
import Link from 'next/link';
import { IoMenu, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi'; // Icon for email

// Sidebar Props definition
interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

// Utility function to calculate age
const calculateAge = (birthDate: string) => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

export default function Sidebar({ isCollapsed, toggleCollapse }: SidebarProps) {
  const birthDate = "2002-01-17";
  const age = calculateAge(birthDate);

  return (
    <motion.div
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-blue-600 to-blue-900 text-white p-5 z-50 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      initial={{ width: isCollapsed ? "4rem" : "16rem" }}
      animate={{ width: isCollapsed ? "4rem" : "16rem" }}
      transition={{ duration: 0.4 }}
    >
      {/* Menu Toggle Button */}
      <button
        aria-label='menu'
        className="mb-5 text-white focus:outline-none"
        onClick={toggleCollapse}
      >
        <IoMenu size={30} />
      </button>

      {/* Content when Sidebar is expanded */}
      {!isCollapsed && (
        <div className="text-center">
          {/* Profile Section */}
          <Image
            src={profilePic}
            alt="Judy Mumbi Njenga"
            className="rounded-full mb-4 mx-auto"
            width={100}
            height={100}
            placeholder="blur"
          />
          <h2 className="text-xl font-semibold">Judy Mumbi Njenga</h2>
          <p className="text-gray-200 mt-1">Age: {age}</p>
          <p className="text-gray-300 mt-1">Full Stack Developer</p>
          <p className="text-gray-400 mt-1 text-sm">Kenya</p>

          {/* Short Bio or Tagline */}
          <p className="text-gray-400 mt-4 px-2">
            Passionate about building impactful software solutions and solving complex problems with elegant code.
          </p>

          {/* Contact Info */}
          <div className="mt-6">
            <Link href="mailto:judynjenga14@gmail.com" className="text-gray-300 hover:text-white flex items-center justify-center space-x-2">
              <HiOutlineMail size={18} />
              <span>judynjenga14@gmail.com</span>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center gap-4">
            <Link href="https://www.linkedin.com/in/judy-njenga" target="_blank">
              <IoLogoLinkedin size={24} className="text-white hover:text-gray-400 transition" />
            </Link>
            <Link href="https://github.com/Nrad8394" target="_blank">
              <IoLogoGithub size={24} className="text-white hover:text-gray-400 transition" />
            </Link>
          </div>

          {/* Resume Download Button */}
          <div className="mt-6">
            <Link href="/resume/Judy_Njenga.pdf" download className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition block text-center">
              Download Resume
            </Link>
          </div>

          {/* Availability Status */}
          <div className="mt-4 text-center">
            <p className="text-green-400">Available for Freelance</p>
            <p className="text-gray-300 text-sm">Currently taking new projects!</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

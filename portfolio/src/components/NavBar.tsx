import { motion } from "framer-motion";

interface NavBarProps {
  isCollapsed: boolean;
}

export default function NavBar({ isCollapsed }: NavBarProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 fixed top-0 right-0 z-40 ${
        isCollapsed ? 'left-16' : 'left-64'
      } transition-all duration-300`}
    >
      <ul className="flex justify-around">
        <li><button onClick={() => handleScroll("home")} className="hover:underline">Home</button></li>
        <li><button onClick={() => handleScroll("education")} className="hover:underline">Education</button></li>
        <li><button onClick={() => handleScroll("experience")} className="hover:underline">Experience</button></li>
        <li><button onClick={() => handleScroll("projects")} className="hover:underline">Projects</button></li>
        <li><button onClick={() => handleScroll("contact")} className="hover:underline">Contact</button></li>
      </ul>
    </motion.nav>
  );
}

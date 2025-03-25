import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  // auto-highlight active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.target)
      );
      const scrollY = window.scrollY + 150; // adjust offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollY >= sections[i]!.offsetTop) {
          setActiveTab(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm py-4"
    >
      <ul className="flex justify-center space-x-4 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.target}>
            <a
              href={`#${item.target}`}
              onClick={() => setActiveTab(item.target)}
              className={`px-4 py-2 rounded-full border transition-all duration-200
                ${
                  activeTab === item.target
                    ? "border-red-500 text-red-600 bg-red-50 shadow-sm"
                    : "border-gray-300 hover:border-gray-500 hover:bg-gray-100"
                }
              `}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

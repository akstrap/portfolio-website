import { motion } from "framer-motion";

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm py-4"
    >
      <ul className="flex justify-center space-x-8 text-lg font-medium">
        {navItems.map((item) => (
          <li key={item.target}>
            <a
              href={`#${item.target}`}
              className="hover:text-red-600 transition-colors duration-200"
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

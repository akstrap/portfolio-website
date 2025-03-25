import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-primary to-surface relative pt-[80px]"
    >
      {/* social icons on left side */}
      <div className="hidden md:flex flex-col gap-4 absolute left-8 top-1/3 text-accent text-xl">
        <a
          href="https://github.com/akstrap"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/akshit-thavanati"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* main text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-text mb-4">
          hey, i’m <span className="text-accent">akshit thavanati</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          building in full stack, machine learning, and data automation. student
          @ virginia tech.
        </p>

        {/* call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-button hover:bg-button-hover text-white rounded-lg text-sm transition-all"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent rounded-lg text-sm hover:bg-accent/10 transition-all"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

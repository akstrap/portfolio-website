import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      {/* intro text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        hey, i’m akshit thavanati
      </motion.h1>

      {/* subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-xl md:text-2xl text-gray-600 max-w-xl"
      >
        aspiring software engineer & economics enthusiast
      </motion.p>

      {/* buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#experience"
          className="rounded-lg bg-black text-white px-5 py-3 hover:bg-gray-800 transition-all"
        >
          view my work
        </a>
        <a
          href="#contact"
          className="rounded-lg border-2 border-black px-5 py-3 hover:bg-black hover:text-white transition-all"
        >
          get in touch
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

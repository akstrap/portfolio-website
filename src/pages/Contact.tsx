import AnimatedSection from "../components/AnimatedSection";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <AnimatedSection>
        <h2 className="text-4xl font-semibold mb-6 text-center">
          let’s get in touch
        </h2>
        <p className="text-lg text-center max-w-xl text-gray-600 mb-8">
          always down to chat about software, economics, or anything cool you're
          building. feel free to reach out!
        </p>

        <div className="flex gap-6 text-2xl text-gray-700">
          <a
            href="mailto:akshit.thavanati@gmail.com"
            className="hover:text-red-500 transition-colors"
            aria-label="email me"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/akshit-thavanati"
            target="_blank"
            className="hover:text-red-500 transition-colors"
            aria-label="linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;

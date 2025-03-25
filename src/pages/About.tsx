import AnimatedSection from "../components/AnimatedSection";
import profileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-primary">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* about box */}
          <div className="bg-surface shadow-lg rounded-xl p-8 md:w-1/2 border border-accent">
            <h1 className="text-3xl font-bold text-accent mb-2">
              Akshit Thavanati
            </h1>
            <p className="text-gray-700 text-sm mb-4">
              currently pursuing a Bachelor of Science in Computer Science &
              Bachelor of Arts in Economics at
            </p>
            <p className="text-highlight font-semibold text-lg mb-2">
              Virginia Tech
            </p>
            <p className="text-sm text-gray-700 mb-4">
              i am set to graduate in{" "}
              <span className="text-accent font-medium">May 2026</span>.
            </p>
            <p className="text-sm text-gray-700 mb-6">
              my academic and professional journey includes hands-on experience
              in full stack software development, data engineering, and machine
              learning. i love creating tools that feel useful and intentional.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-button hover:bg-button-hover text-white text-sm px-5 py-2 rounded-lg transition-all"
            >
              View Resume
            </a>
          </div>

          {/* profile image */}
          <div className="md:w-1/3 w-48 h-48 bg-accent/20 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;

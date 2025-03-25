import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <AnimatedSection>
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-semibold mb-4">about me</h2>
          <p className="text-lg text-gray-600">
            i’m a cs + econ student @ virginia tech. i love building,
            problem-solving, and creating things that are both useful and kinda
            cool.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;

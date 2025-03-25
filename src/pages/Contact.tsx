import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-primary text-text"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* left side */}
        <div>
          <h2 className="text-4xl font-semibold mb-12 text-highlight">
            contact me
          </h2>
          <p className="text-sm mb-4">
            i'm always open to conversations about dev work, internships,
            research, collaborations, or anything cool in tech.
          </p>
          <p className="text-sm mb-4">
            feel free to shoot me an email or reach out on my socials below.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="mailto:akshit.thavanati@gmail.com"
              className="w-full block px-6 py-4 rounded-xl bg-button text-white flex items-center gap-4 shadow hover:bg-button-hover transition-all"
            >
              <FaEnvelope className="text-xl" />
              akshit.thavanati@gmail.com
            </a>
            <a
              href="https://github.com/akstrap"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block px-6 py-4 rounded-xl bg-[#0d1117] text-white flex items-center gap-4 shadow hover:bg-black/80 transition-all"
            >
              <FaGithub className="text-xl" />
              github.com/akstrap
            </a>
            <a
              href="https://linkedin.com/in/akshit-thavanati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block px-6 py-4 rounded-xl bg-[#0077B5] text-white flex items-center gap-4 shadow hover:bg-[#005b8d] transition-all"
            >
              <FaLinkedin className="text-xl" />
              linkedin.com/in/akshit-thavanati
            </a>
          </div>
        </div>

        {/* right side form */}
        <form
          action="https://formspree.io/f/myzeperb" // form endpoint for form submission
          method="POST"
          className="bg-surface p-6 rounded-xl shadow border border-accent space-y-4"
        >
          {/* thank you redirect */}
          <input
            type="hidden"
            name="_redirect"
            value="https://akshitthavanati.com/thanks"
          />
          {/* form fields */}
          <div>
            <label className="text-sm mb-1 block">Name *</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full p-3 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              className="w-full p-3 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Message *</label>
            <textarea
              name="message"
              placeholder="I’m reaching out because..."
              required
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-accent resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-button hover:bg-button-hover text-white py-3 px-6 rounded-lg text-sm transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

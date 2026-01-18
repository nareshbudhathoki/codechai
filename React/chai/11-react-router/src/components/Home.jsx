import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate  = useNavigate();
  function moveAbout(){
    navigate("/about")
  }

  function moveContact(){
    navigate("/contact")
  }
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-center md:justify-between">
          {/* Text Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Jenith</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-lg mx-auto md:mx-0">
              I'm a passionate IT engineer who loves building modern, scalable,
              and high-performance web applications. I specialize in React,
              Next.js, Tailwind CSS, and full-stack development.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button
                onClick={moveAbout}
                className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              >
                About Me
              </button>
              <button
                onClick={moveContact}
                className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Hero Image / Profile */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-xl">
              <img
                src="https://plus.unsplash.com/premium_vector-1682304650336-edddf1a1e610?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

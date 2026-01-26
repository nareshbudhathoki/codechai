const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            YourName.dev
          </h2>
          <p className="mt-3 text-sm">
            Software Developer specializing in modern web applications,
            clean UI, and scalable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: your@email.com</li>
            <li>
              <a href="https://github.com/yourname" className="hover:text-blue-400">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourname" className="hover:text-blue-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

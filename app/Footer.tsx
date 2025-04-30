export default function Footer() {
  return (
    <footer className="bg-black py-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white">MK Land Survey</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} MK Land Survey. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-6">
            <a
              href="tel:+919605257629"
              className="hover:text-green-500 transition-colors duration-300"
            >
              Call Us
            </a>
            <a
              href="mailto:mklandsurvey599@gmail.com"
              className="hover:text-green-500 transition-colors duration-300"
            >
              Email Us
            </a>
            <a
              href="#services"
              className="hover:text-green-500 transition-colors duration-300"
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
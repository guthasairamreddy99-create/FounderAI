function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              FounderAI 🚀
            </h2>

            <p className="text-gray-400 mt-5">
              Helping entrepreneurs build successful businesses using AI.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-white font-bold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Business Plan</li>

              <li>Budget</li>

              <li>Interior Design</li>

              <li>Marketing</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white font-bold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>About</li>

              <li>Contact</li>

              <li>Privacy</li>

              <li>Terms</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white font-bold mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Email</li>

              <li>LinkedIn</li>

              <li>Twitter</li>

              <li>Instagram</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">

          © 2026 FounderAI. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
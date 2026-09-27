import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiInstagram,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-light tracking-wide">
              KO
            </h2>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#C6A77D]">
              Skin & Brows
            </p>

            <p className="mt-6 text-sm leading-7 text-white/70">
              Enhancing your natural beauty through
              professional skin and brow treatments.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-sm uppercase tracking-[0.2em] text-[#C6A77D]">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-3">

              <Link to="/" className="text-sm text-white/70 hover:text-white">
                Home
              </Link>

              <Link to="/about" className="text-sm text-white/70 hover:text-white">
                About
              </Link>

              <Link to="/services" className="text-sm text-white/70 hover:text-white">
                Services
              </Link>

              <Link to="/gallery" className="text-sm text-white/70 hover:text-white">
                Gallery
              </Link>

              <Link to="/reviews" className="text-sm text-white/70 hover:text-white">
                Reviews
              </Link>

              <Link to="/contact" className="text-sm text-white/70 hover:text-white">
                Contact & Book
              </Link>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-sm uppercase tracking-[0.2em] text-[#C6A77D]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">
                <FiMapPin className="mt-1 shrink-0 text-[#C6A77D]" />

                <p className="text-sm leading-6 text-white/70">
                  350 Warrigal Road
                  <br />
                  Oakleigh South, VIC 3167
                </p>
              </div>

              <a
                href="tel:0466881595"
                className="flex gap-3 text-sm text-white/70 hover:text-white"
              >
                <FiPhone className="shrink-0 text-[#C6A77D]" />
                0466 881 595
              </a>

              <a
                href="mailto:oukanika@gmail.com"
                className="flex gap-3 text-sm text-white/70 hover:text-white"
              >
                <FiMail className="shrink-0 text-[#C6A77D]" />
                oukanika@gmail.com
              </a>

            </div>

          </div>

          {/* HOURS */}
          <div>

            <h3 className="text-sm uppercase tracking-[0.2em] text-[#C6A77D]">
              Opening Hours
            </h3>

            <div className="mt-6 flex gap-3">

              <FiClock className="mt-1 shrink-0 text-[#C6A77D]" />

              <div className="text-sm leading-7 text-white/70">

                <p>
                  <span className="text-white">Monday</span>
                  <br />
                  9:00 AM – 6:00 PM
                </p>

                <p className="mt-3">
                  <span className="text-white">Saturday</span>
                  <br />
                  9:00 AM – 6:00 PM
                </p>

                <p className="mt-3">
                  Tuesday – Friday & Sunday
                  <br />
                  Closed
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} KO Skin & Brows. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              aria-label="Instagram"
              className="text-white/60 hover:text-white transition"
            >
              <FiInstagram />
            </a>

            <Link
              to="/contact"
              className="text-xs uppercase tracking-widest text-[#C6A77D] hover:text-white transition"
            >
              Book Appointment
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#F7F3EE]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-[0.3em] text-[#A67C52] mb-4">
              Premium Skin & Brow Studio
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Reveal Your Natural Beauty
            </h1>
            <p className="mt-8 text-lg text-gray-600">
              Professional skin and brow treatments designed to
              enhance your confidence and highlight your natural features.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#A67C52] text-white px-8 py-4 rounded-full hover:opacity-90 transition" >
                Book Appointment
              </Link>
              <Link to="/services" className="border border-[#A67C52] px-8 py-4 rounded-full hover:bg-white transition" >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#A67C52] uppercase tracking-widest">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-light mt-4">
              Beauty With Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 border rounded-3xl">
              <h3 className="text-xl mb-4">Expert Care</h3>
              <p className="text-gray-600">
                Personalized treatments tailored to your unique needs.
              </p>
            </div>
            <div className="p-8 border rounded-3xl">
              <h3 className="text-xl mb-4">Premium Products</h3>
              <p className="text-gray-600">
                High-quality products selected for outstanding results.
              </p>
            </div>
            <div className="p-8 border rounded-3xl">
              <h3 className="text-xl mb-4">Relaxing Experience</h3>
              <p className="text-gray-600">
                Comfortable and welcoming environment for every visit.
              </p>
            </div>
            <div className="p-8 border rounded-3xl">
              <h3 className="text-xl mb-4">Results Focused</h3>
              <p className="text-gray-600">
                Treatments designed to deliver visible improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#A67C52] uppercase tracking-widest">
              Featured Services
            </p>
            <h2 className="text-4xl font-light mt-4">
              Popular Treatments
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">Brow Sculpting</h3>
              <p className="text-gray-600">
                Precision shaping to enhance your natural brow structure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">Brow Tinting</h3>
              <p className="text-gray-600">
                Defined, fuller-looking brows with long-lasting tint.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">Skin Treatments</h3>
              <p className="text-gray-600">
                Professional treatments designed for healthy glowing skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#A67C52] uppercase tracking-widest">
              Before & After
            </p>
            <h2 className="text-4xl font-light mt-4">
              Real Results
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-200 h-80 rounded-3xl"></div>
            <div className="bg-gray-200 h-80 rounded-3xl"></div>
            <div className="bg-gray-200 h-80 rounded-3xl"></div>
            <div className="bg-gray-200 h-80 rounded-3xl"></div>
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="bg-[#A67C52] text-white px-8 py-4 rounded-full" >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#A67C52] uppercase tracking-widest">
              Testimonials
            </p>
            <h2 className="text-4xl font-light mt-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl">
              <p>"Amazing service and beautiful results."</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <p>"Professional, friendly and highly recommended."</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <p>"My brows have never looked better."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A67C52] py-24 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-light">
            Ready To Feel Your Best?
          </h2>
          <p className="mt-6 text-lg">
            Book your appointment today and experience premium skin and brow care.
          </p>
          <Link to="/contact" className="inline-block mt-10 bg-white text-[#A67C52] px-8 py-4 rounded-full" >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { serviceCategories } from "../data/services";

export default function Services() {
  return (
    <main className="bg-[#F7F3EE]">

      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-[#A67C52]">
              Our Services
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl font-light leading-tight">
              Treatments designed
              <span className="block text-[#A67C52]">
                around you.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
              Discover personalised skin and brow services created to
              complement your natural features and beauty goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.section
                key={category.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >

                {/* CATEGORY HEADER */}
                <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 mb-10">
                  <div>
                    <span className="text-sm text-[#A67C52]">
                      0{categoryIndex + 1}
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-light">
                      {category.name}
                    </h2>
                  </div>
                  <p className="max-w-xl text-gray-600 leading-7">
                    {category.description}
                  </p>
                </div>

                {/* SERVICE LIST */}
                <div className="border-t border-[#A67C52]/15">
                  {category.services.map((service) => (
                    <div key={service.name} className="group border-b border-[#A67C52]/15 py-8" >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* SERVICE INFO */}
                        <div className="max-w-2xl">
                          <h3 className="text-2xl font-light">
                            {service.name}
                          </h3>
                          <p className="mt-3 text-gray-600 leading-7">
                            {service.description}
                          </p>
                          <div className="mt-5 flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                              <FiClock className="text-[#A67C52]" />
                              {service.duration}
                            </span>
                            <span className="text-[#A67C52]">
                              {service.price}
                            </span>
                          </div>
                        </div>
                        <Link to="/contact" className="inline-flex items-center justify-center gap-2 self-start lg:self-center border border-[#A67C52] text-[#A67C52] px-6 py-3 rounded-full text-sm hover:bg-[#A67C52] hover:text-white transition-colors" >
                          Book
                          <FiArrowRight />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="bg-[#2A2A2A] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#C6A77D]">
            Not sure what you need?
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-light">
            Let's find the right treatment for you.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/65 leading-7">
            If you're unsure which service is right for you, get in touch
            with KO Skin & Brows to discuss your needs before booking.
          </p>
          <Link to="/contact" className="inline-block mt-10 bg-[#A67C52] text-white px-8 py-4 rounded-full hover:bg-[#8F6845] transition-colors" >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
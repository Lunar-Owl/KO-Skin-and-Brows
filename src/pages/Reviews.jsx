import { motion } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { testimonials } from "../data/testimonials";

function Stars({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <FiStar
          key={index}
          size={15}
          className={
            index < rating
              ? "fill-[#A67C52] text-[#A67C52]"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default function Reviews() {
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
              Client Reviews
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl font-light leading-tight">
              Words from our
              <span className="block text-[#A67C52]">
                clients.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
              Discover what clients have to say about their experience
              at KO Skin & Brows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REVIEW SUMMARY */}
      <section className="bg-white border-y border-[#A67C52]/10">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <p className="text-5xl font-light text-[#2A2A2A]">
                5.0
              </p>
              <div className="flex justify-center mt-3">
                <Stars rating={5} />
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Average Rating
              </p>
            </div>
            <div className="hidden md:block h-20 w-px bg-[#A67C52]/15 mx-auto" />
            <div>
              <p className="text-5xl font-light text-[#2A2A2A]">
                —
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Verified Reviews
              </p>
              <p className="mt-2 text-xs text-[#A67C52]">
                Review count to be added
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.25em] text-sm text-[#A67C52]">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              Client experiences
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="border border-[#A67C52]/15 rounded-3xl p-8 flex flex-col"
              >
                <Stars rating={testimonial.rating} />
                <p className="mt-7 text-gray-600 leading-7 flex-1">
                  “{testimonial.review}”
                </p>
                <div className="mt-8 pt-6 border-t border-[#A67C52]/10">
                  <p className="font-medium">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-[#A67C52]">
                    {testimonial.service}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-4xl p-10 md:p-14 text-center border border-[#A67C52]/10">
            <p className="uppercase tracking-[0.25em] text-sm text-[#A67C52]">
              Google Reviews
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-light">
              See more client experiences
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
              View the latest reviews and experiences from clients
              on Google.
            </p>
            {/* REAL GOOGLE REVIEW LINK WILL GO HERE */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 border border-[#A67C52] text-[#A67C52] px-7 py-3.5 rounded-full hover:bg-[#A67C52] hover:text-white transition-colors"
            >
              View Google Reviews
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A67C52] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-white/70">
            Your experience
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-light">
            Ready for your own KO experience?
          </h2>
          <p className="mt-6 text-white/75 leading-7">
            Explore our treatments and book your next appointment.
          </p>
          <Link to="/contact" className="inline-block mt-10 bg-white text-[#A67C52] px-8 py-4 rounded-full hover:bg-[#F7F3EE] transition-colors" >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
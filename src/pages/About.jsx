import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHeart, FiStar, FiUser, FiAward } from "react-icons/fi";

const values = [
  {
    icon: FiHeart,
    title: "Personalised Care",
    description:
      "Every appointment is approached with attention to your individual needs, preferences, and beauty goals.",
  },
  {
    icon: FiStar,
    title: "Natural Beauty",
    description:
      "Our approach is centred around enhancing your natural features and helping you feel confident in your own skin.",
  },
  {
    icon: FiUser,
    title: "Client Focused",
    description:
      "From your first consultation to your treatment experience, your comfort and satisfaction remain at the heart of what we do.",
  },
  {
    icon: FiAward,
    title: "Quality Experience",
    description:
      "We aim to provide a refined, welcoming experience where professional care and beautiful results come together.",
  },
];

export default function About() {
  return (
    <main className="bg-[#F7F3EE]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-[#A67C52]">
              About KO Skin & Brows
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl font-light leading-[1.05] text-[#2A2A2A]">
              Beauty is personal.
              <span className="block text-[#A67C52]">
                Your experience should be too.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              KO Skin & Brows is a beauty studio dedicated to creating
              personalised skin and brow experiences in Oakleigh South.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* IMAGE PLACEHOLDER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-4xl bg-[#E8DED2] overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#A67C52]">
                    Studio Image
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#A67C52] text-white rounded-2xl px-7 py-5">
                <p className="text-xs uppercase tracking-[0.2em]">
                  KO Skin & Brows
                </p>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="uppercase tracking-[0.25em] text-sm text-[#A67C52]">
                Our Story
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight">
                A space created to celebrate your natural beauty.
              </h2>

              <div className="mt-8 space-y-5 text-gray-600 leading-8">

                <p>
                  At KO Skin & Brows, beauty is about more than a treatment.
                  It is about taking time for yourself and leaving your
                  appointment feeling confident and cared for.
                </p>

                <p>
                  Our focus is on creating a refined and welcoming experience
                  while providing personalised skin and brow services suited
                  to each client.
                </p>

                <p>
                  Whether you are maintaining your everyday look or preparing
                  for something special, every visit is an opportunity to
                  enhance the features that make you uniquely you.
                </p>
              </div>
              <Link to="/services" className="inline-block mt-8 border border-[#A67C52] text-[#A67C52] px-7 py-3.5 rounded-full hover:bg-[#A67C52] hover:text-white transition-colors" >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#F7F3EE] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#A67C52]">
            Our Philosophy
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-light leading-tight">
            Enhance what makes
            <span className="block text-[#A67C52]">
              you uniquely you.
            </span>
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            We believe beauty should feel effortless, personal, and
            confidence-building. Our goal is to create treatments and
            experiences that complement your individual features rather
            than take away from what makes you unique.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-[#A67C52]">
              The KO Experience
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              What matters to us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="border border-[#A67C52]/15 rounded-3xl p-8"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F7F3EE] flex items-center justify-center">
                    <Icon className="text-[#A67C52] text-xl" />
                  </div>
                  <h3 className="mt-7 text-xl font-medium">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-[#A67C52]">
                Visit Us
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-light">
                Your beauty appointment starts here.
              </h2>
              <p className="mt-6 text-gray-600 leading-8">
                Find KO Skin & Brows at 350 Warrigal Road, Oakleigh South,
                Victoria.
              </p>
              <div className="mt-8">
                <p className="font-medium">
                  Opening Hours
                </p>
                <div className="mt-3 text-sm leading-7 text-gray-600">
                  <p>Monday — 9:00 AM – 6:00 PM</p>
                  <p>Saturday — 9:00 AM – 6:00 PM</p>
                  <p>Tuesday – Friday & Sunday — Closed</p>
                </div>
              </div>
              <Link to="/contact" className="inline-block mt-8 bg-[#A67C52] text-white px-8 py-4 rounded-full hover:bg-[#8F6845] transition-colors" >
                Book Your Appointment
              </Link>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="aspect-4/3 rounded-4xl bg-[#E8DED2] flex items-center justify-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#A67C52]">
                Google Maps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#A67C52] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-white/70">
            Your Time. Your Beauty.
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-light">
            Ready for your next appointment?
          </h2>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-[#A67C52] px-8 py-4 rounded-full hover:bg-[#F7F3EE] transition-colors"
          >
            Book Appointment
          </Link>

        </div>
      </section>

    </main>
  );
}
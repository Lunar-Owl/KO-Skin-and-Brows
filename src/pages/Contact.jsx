
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

const contactDetails = [
  {
    icon: FiPhone,
    title: "Phone",
    value: "0466 881 595",
    href: "tel:0466881595",
  },
  {
    icon: FiMail,
    title: "Email",
    value: "oukanika@gmail.com",
    href: "mailto:oukanika@gmail.com",
  },
  {
    icon: FiMapPin,
    title: "Studio",
    value: "350 Warrigal Road, Oakleigh South, VIC 3167",
    href: "https://www.google.com/maps/search/?api=1&query=350+Warrigal+Road+Oakleigh+South+VIC+3167",
  },
];

const openingHours = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "Closed" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function Contact() {
  return (
    <main className="bg-[#F7F3EE] text-[#2A2A2A]">
      {/* HERO */}
      <section className="px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#A67C52]">
              Contact & Book
            </p>

            <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Your beauty journey
              <span className="block text-[#A67C52]">
                starts here.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Get in touch with KO Skin & Brows to ask a question,
              enquire about treatments, or arrange your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Studio" ? "_blank" : undefined}
                rel={
                  item.title === "Studio"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-[#E5DED5] bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F3EE] text-[#A67C52]">
                  <Icon size={22} />
                </div>

                <h2 className="mb-2 text-lg font-medium">
                  {item.title}
                </h2>

                <p className="text-sm leading-6 text-gray-600 transition group-hover:text-[#A67C52]">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* BOOKING + ENQUIRY + HOURS */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ENQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 shadow-sm sm:p-10"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#A67C52]">
              Get In Touch
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Send an Enquiry
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600">
              Have a question about a treatment or would like to enquire
              about an appointment? Complete the form below and the KO Skin
              & Brows team can get back to you.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();

                const form = event.currentTarget;

                if (!form.checkValidity()) {
                  form.reportValidity();
                  return;
                }

                const formData = new FormData(form);

                console.log({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  service: formData.get("service"),
                  message: formData.get("message"),
                });
              }}
              className="mt-8 space-y-6"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#E5DED5] bg-[#F7F3EE] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C6A77D] focus:ring-1 focus:ring-[#C6A77D]"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#E5DED5] bg-[#F7F3EE] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C6A77D] focus:ring-1 focus:ring-[#C6A77D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-[#E5DED5] bg-[#F7F3EE] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C6A77D] focus:ring-1 focus:ring-[#C6A77D]"
                  />
                </div>

              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-[#E5DED5] bg-[#F7F3EE] px-4 py-3.5 text-sm outline-none transition focus:border-[#C6A77D] focus:ring-1 focus:ring-[#C6A77D]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="signature-glow-facial">
                    Signature Glow Facial
                  </option>

                  <option value="dermabrasion-facial">
                    Dermabrasion Facial
                  </option>

                  <option value="korean-glass-skin-facial">
                    Korean Glass Skin Facial
                  </option>

                  <option value="chemical-peel">
                    Chemical Peel
                  </option>

                  <option value="bb-glow">
                    BB Glow
                  </option>

                  <option value="microneedling">
                    Microneedling
                  </option>

                  <option value="brow-tattoo">
                    Brow Tattoo
                  </option>

                  <option value="general-enquiry">
                    General Enquiry
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-[#E5DED5] bg-[#F7F3EE] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C6A77D] focus:ring-1 focus:ring-[#C6A77D]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2A2A2A] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#A67C52]"
              >
                Send Enquiry
                <FiArrowRight size={17} />
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                By submitting this form, you are sending an enquiry to
                KO Skin & Brows. The form submission service will be
                connected before the website goes live.
              </p>
            </form>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">

            {/* BOOKING */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#2A2A2A] p-8 text-white sm:p-10"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6A77D] text-[#2A2A2A]">
                <FiCalendar size={23} />
              </div>

              <p className="text-sm uppercase tracking-[0.25em] text-[#C6A77D]">
                Appointments
              </p>

              <h2 className="mt-3 font-serif text-3xl">
                Ready to book?
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Contact KO Skin & Brows directly to enquire about
                appointments and available treatments.
              </p>

              <div className="mt-7 space-y-3">

                <a
                  href="tel:0466881595"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#C6A77D] px-6 py-3.5 text-sm font-medium text-[#2A2A2A] transition hover:bg-[#D5BA96]"
                >
                  <FiPhone size={16} />
                  Call to Book
                </a>

                <a
                  href="mailto:oukanika@gmail.com"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium transition hover:border-[#C6A77D] hover:text-[#C6A77D]"
                >
                  <FiMail size={16} />
                  Email Us
                </a>

              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Online Booking
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Booking platform to be added once confirmed by the client.
                </p>
              </div>
            </motion.div>

            {/* HOURS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[#E5DED5] bg-white p-8 sm:p-10"
            >
              <div className="mb-6 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F3EE] text-[#A67C52]">
                  <FiClock size={21} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#A67C52]">
                    Opening Hours
                  </p>

                  <h2 className="mt-1 font-serif text-2xl">
                    Studio Hours
                  </h2>
                </div>

              </div>

              <div className="space-y-4">

                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between border-b border-[#EEE8E1] pb-3 text-sm last:border-0"
                  >
                    <span className="font-medium">
                      {item.day}
                    </span>

                    <span
                      className={
                        item.hours === "Closed"
                          ? "text-gray-400"
                          : "text-gray-500"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#E5DED5] bg-white"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-[#A67C52]">
                Visit Us
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Find KO Skin & Brows
              </h2>

              <div className="mt-6 flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7F3EE] text-[#A67C52]">
                  <FiMapPin size={18} />
                </div>

                <p className="text-sm leading-7 text-gray-600">
                  350 Warrigal Road,
                  <br />
                  Oakleigh South, VIC 3167
                  <br />
                  Australia
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=350+Warrigal+Road+Oakleigh+South+VIC+3167"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#A67C52] transition hover:text-[#2A2A2A]"
              >
                Get Directions
                <FiArrowRight size={16} />
              </a>
            </div>
            <div className="min-h-87.5 overflow-hidden bg-[#EDE7DF] lg:min-h-full">
              <iframe
                title="KO Skin & Brows location"
                src="https://www.google.com/maps?q=350+Warrigal+Road,+Oakleigh+South,+VIC+3167,+Australia&output=embed"
                className="h-87.5 w-full border-0 lg:h-full lg:min-h-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl bg-[#C6A77D] px-8 py-14 text-center sm:px-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#2A2A2A]/70">
            KO Skin & Brows
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Let’s create your perfect beauty experience.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#2A2A2A]/70">
            Have a question or ready to make an appointment?
            Get in touch today.
          </p>

          <a
            href="tel:0466881595"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2A2A2A] px-8 py-4 text-sm font-medium text-white transition hover:bg-black"
          >
            Book Your Appointment
            <FiArrowRight size={17} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}

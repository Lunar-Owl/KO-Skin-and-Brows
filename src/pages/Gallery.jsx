import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, } from "react-icons/fi";

import { galleryItems } from "../data/gallery";

const categories = ["All", "Brows", "Skin"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const currentIndex = selectedImage
    ? filteredItems.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? filteredItems.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredItems[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === filteredItems.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex, filteredItems]);

  useEffect(() => {
    document.body.style.overflow = selectedImage
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

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
              Our Gallery
            </p>
            <h1 className="mt-5 text-5xl md:text-7xl font-light leading-tight">
              Real results.
              <span className="block text-[#A67C52]">
                Beautiful transformations.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
              Explore examples of our work and discover the attention
              to detail behind every treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="bg-white border-y border-[#A67C52]/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-[#A67C52] text-white"
                    : "border border-[#A67C52]/20 text-[#2A2A2A] hover:border-[#A67C52] hover:text-[#A67C52]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item)}
              >

                {/* BEFORE / AFTER */}
                <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-3xl">
                  <div className="relative aspect-3/4 bg-[#E8DED2]">
                    <img src={item.before} alt={`${item.title} before`} className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-3/4 bg-[#E8DED2]">
                    <img src={item.after} alt={`${item.title} after`} className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-[#A67C52]/90 text-white px-3 py-1 rounded-full text-xs">
                      After
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A67C52]">
                    {item.category}
                  </p>
                  <h2 className="mt-2 text-xl font-light">
                    {item.title}
                  </h2>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2A2A2A] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#C6A77D]">
            Your transformation
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-light">
            Ready to create your own results?
          </h2>
          <p className="mt-6 text-white/60 leading-7">
            Explore our services and find the treatment that's right
            for you.
          </p>
          <a
            href="/contact"
            className="inline-block mt-10 bg-[#A67C52] text-white px-8 py-4 rounded-full hover:bg-[#8F6845] transition-colors"
          >
            Book Appointment
          </a>

        </div>

      </section>

      {/* LIGHTBOX */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >

          {/* CLOSE */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            <FiX size={24} />
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            <FiChevronLeft size={26} />
          </button>

          {/* CONTENT */}
          <div
            className="max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <img
                  src={selectedImage.before}
                  alt={`${selectedImage.title} before`}
                  className="w-full max-h-[70vh] object-contain rounded-xl"
                />
                <span className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  Before
                </span>
              </div>
              <div className="relative">
                <img
                  src={selectedImage.after}
                  alt={`${selectedImage.title} after`}
                  className="w-full max-h-[70vh] object-contain rounded-xl"
                />
                <span className="absolute bottom-4 left-4 bg-[#A67C52] text-white px-4 py-2 rounded-full text-sm">
                  After
                </span>
              </div>
            </div>
            <div className="text-center mt-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C6A77D]">
                {selectedImage.category}
              </p>
              <h2 className="mt-2 text-2xl font-light">
                {selectedImage.title}
              </h2>
            </div>
          </div>
          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            <FiChevronRight size={26} />
          </button>
        </div>
      )}
    </main>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Error, Loading, Title } from "@/ui";
import Image from "next/image";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";
import { useCompaniesStore } from "@/store";

export function CompaniesCarousel() {
  const { companies, loading, error, getCompanies } = useCompaniesStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % companies.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + companies.length) % companies.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [companies.length]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error} />;
  }

  if (companies.length === 0) {
    return <Title size="4">No companies available</Title>;
  }

  return (
    <div className="relative w-full py-10 flex items-center justify-center bg-base-200 overflow-hidden">
      {/* Previous Button */}
      <button onClick={handlePrev} className="absolute left-4 z-10">
        <FaChevronLeft className="w-10 h-20" />
      </button>

      {/* Carousel Items */}
      <div className="w-4/5 h-80 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={companies[currentIndex]?.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-between w-full h-full bg-base-100 shadow-lg rounded-lg overflow-hidden"
          >
            {companies[currentIndex]?.logo ? (
              <Image
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  companies[currentIndex]?.logo
                }
                alt="Company Logo"
                width={448}
                height={40}
                className="object-cover max-w-md"
              />
            ) : (
              <div className="skeleton h-32 w-32"></div>
            )}

            <div className="w-1/2 p-8 flex flex-col items-center justify-center text-base-content">
              <Title size="3">{companies[currentIndex]?.name}</Title>
              <p className="text-lg font-semibold">
                {companies[currentIndex]?.city},{" "}
                {companies[currentIndex]?.country}
              </p>
              <p className="text-lg font-semibold ">
                {companies[currentIndex]?.rating}
              </p>
              <p className="">{companies[currentIndex]?.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button onClick={handleNext} className="absolute right-4 z-10">
        <FaAngleRight className="w-10 h-20" />
      </button>
    </div>
  );
}

export default CompaniesCarousel;

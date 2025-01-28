import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ErrorMessage, Loading, Title } from "@/ui";

type Company = {
  id: number;
  name: string;
  country: string;
  city: string;
  rating: number;
  logo: string;
  description: string;
  commentsIds: string[];
};

type CompaniesProps = {
  companies: Company[];
  loading: boolean;
  errorMessage: string | null;
};

export function CompaniesCarousel({
  companies,
  loading,
  errorMessage,
}: CompaniesProps) {
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

  if (errorMessage) {
    return <ErrorMessage text={errorMessage} />;
  }

  if (companies.length === 0) {
    return <Title size="4">No companies available</Title>;
  }

  return (
    <div className="relative w-full py-10 flex items-center justify-center bg-base-200 overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8592;
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
            <img
              src={companies[currentIndex]?.logo}
              alt={companies[currentIndex]?.name}
              className="object-cover max-w-md"
            />
            <div className="w-1/2 p-8 flex flex-col items-center justify-center text-base-content">
              <Title size="3">{companies[currentIndex].name}</Title>
              <p className="text-lg font-semibold">
                {companies[currentIndex]?.city},{" "}
                {companies[currentIndex]?.country}
              </p>
              <p className="text-lg font-semibold ">
                {companies[currentIndex]?.rating}
              </p>
              <p className="">
                {companies[currentIndex]?.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
}

export default CompaniesCarousel;

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Error, Title } from "@/ui";
import Image from "next/image";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";
import { useCompaniesStore } from "@/store";

export function GeneralCarousel() {
  const { loading, error, companiesNew, getCompaniesNew } = useCompaniesStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companiesNew.length);
  }, [companiesNew.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + companiesNew.length) % companiesNew.length,
    );
  }, [companiesNew.length]);

  useEffect(() => {
    getCompaniesNew();
  }, [getCompaniesNew]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [companiesNew.length, handleNext]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (error) {
    return <Error text={error} />;
  }

  if (companiesNew.length === 0) {
    return <Title size="4">Нет новых компаний.</Title>;
  }

  return (
    <div className="relative w-full py-10 flex items-center justify-center bg-base-200 overflow-hidden">
      {/* Previous Button */}
      <button onClick={handlePrev} className="absolute left-4 z-10">
        <FaChevronLeft className="w-10 h-20" />
      </button>

      {/* Carousel Items */}
      <div className="w-4/5 h-80 max-[1300px]:h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={companiesNew[currentIndex]?.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-between max-[1300px]:justify-center w-full h-full bg-base-100 shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={
                companiesNew[currentIndex]?.logo
                  ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${companiesNew[currentIndex]?.logo}`
                  : "/imgs/company-logo.jpg"
              }
              alt="Company Logo"
              width={448}
              height={0}
              className="object-contain max-w-md"
            />

            <div className="max-[1300px]:hidden w-1/2 p-8 flex flex-col items-center justify-center text-base-content">
              <Title size="3">{companiesNew[currentIndex]?.name}</Title>
              <p className="text-lg font-semibold ">
                {companiesNew[currentIndex]?.rating}
              </p>
              <p>{companiesNew[currentIndex]?.description}</p>
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

export default GeneralCarousel;

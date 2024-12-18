"use client";
import { motion } from "motion/react";


const HeroContent = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -10, scale: 0.5 }}
    animate={{ opacity: 1, y: 0 , scale: 1 }}
    transition={{ duration: 1.5, ease: "easeIn" , delay: 0.5, staggerChildren: 0.5}}
    className="text-center max-w-6xl mx-auto">
      <h1 className="text-[#EB0000] font-[family-name:var(--font-orbitron)] text-[34px] md:text-[85px] font-black mb-4 leading-120">
        Track Your Fitness Journey
      </h1>
      <p className="text-[#DCDCDC] font-[family-name:var(--font-space-grotesk)] text-[18px] font-medium leading-150 md:px-[200px]">
        Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count
        reps, and track calories burned. Stay motivated and achieve your goals with ease.
      </p>
    </motion.div>
  );
};

export default HeroContent;
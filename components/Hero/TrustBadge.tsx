"use client";

import Image from "next/image";
import { motion } from "motion/react";

const TrustBadge = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5}}
    className="flex items-center bg-[#18181A] backdrop-blur-sm pr-4 pl-[0.6rem] py-2 rounded-full border border-[#28282C]">
      <div 
      className="flex -space-x-2 mr-2">
        {[1, 2, 3].map((i) => (
          <Image
            key={i}
            src={`/assets/images/avatar${i}.png`}
            alt={`User${i}`}
            width={32}
            height={32}
            className="w-7 h-7 rounded-full"
          />
        ))}
      </div>
      <span className="text-white font-[family-name:var(--font-space-grotesk)] font-medium leading-150">Trusted by 3+ million users</span>
    </motion.div>
  );
};

export default TrustBadge;
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const VideoShowcase = () => {
  const [popup, setPopup] = useState(false);
  const popupRef = useRef(null); 


  const closePopup = () => {
    setPopup(false);
    };

  useEffect(() => {
    // Handler to detect clicks outside the popup
    const handleClickOutside = () => {
            closePopup();
    };

    // Add global click listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

  return (
    <div className="py-8">
      <div className="w-full flex justify-center">

        <div ref={popupRef} className="max-w-[820px] frame" onClick={() => setPopup(true)} style={{ 
                        visibility: `${popup ? "hidden" : "visible"}`}}>
          <div className="cover w-full">
            <Image
              src="/assets/images/asset7.png"
              alt="cover"
              width={200}
              height={100}
              className="w-full rounded-lg"
            />
          </div>

          <div className="overlay"></div>

          <div className="play_btn transition duration-2000 animate-pulse">
            <Image
              src="/assets/images/asset58.svg"
              alt="play"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
        </div>

                {popup && 
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <iframe width="960" height="540" src="https://www.youtube.com/embed/pznrAWMhahA?si=hZ7d-pGZ69c9CRvh&controls=0&modestbranding=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    
                </div>
                } 
      </div>

   

      
    </div>
  );
};

export default VideoShowcase;

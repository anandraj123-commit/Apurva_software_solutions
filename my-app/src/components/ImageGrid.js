import React from "react";
import { motion } from "framer-motion";

// 👉 Replace these with your actual image paths
const images = [
  "/img/allservices/aiautomatedwebapp.jpg",
  "/img/allservices/allmajortechnology.jpg",
  "/img/allservices/andoidapp.jpg",
  "/img/allservices/astrologyapp.jpg",
  "/img/allservices/awsdeployment.jpg",
  "/img/allservices/flutter.jpg",
  "/img/allservices/flutterjs.jpg",
  "/img/allservices/frontenddev.jpg",
  "/img/allservices/fullstackdev.jpg",
  "/img/allservices/htmlcss.jpg",
  "/img/allservices/iosapp.jpg",
  "/img/allservices/mernstack.jpg",
  "/img/allservices/mobileapp.jpg",
  "/img/allservices/nestjs.jpg",
  "/img/allservices/next.jpg",
  "/img/allservices/prix.jpg",
  "/img/allservices/prixjs.jpg",
  "/img/allservices/pythondevelopment.jpg",
  "/img/allservices/react.jpg",
  "/img/allservices/reactnative.jpg",
  "/img/allservices/webapp.jpg",
  "/img/allservices/webx.jpg",
];

// Random tilt generator (runs once per render)
const getRandomTilt = () => {
    const angles = [-6, -4, -2, 2, 4, 6];
    return angles[Math.floor(Math.random() * angles.length)];
};
  
  // Random hover animation
  const getRandomAnimation = () => {
    const animations = [
      { scale: 1.1, rotate: 0, y: -10 },
      { scale: 1.05, rotate: 2, x: 5 },
      { scale: 1.08, rotate: -2, y: -5 },
      { scale: 1.1, rotate: 0, x: -5 },
    ];
    return animations[Math.floor(Math.random() * animations.length)];
  };
  


  const ImageGrid = () => {
    return (
      <div className="py-16 px-4 bg-gray-50 w-full">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our <span className="text-[#ff4a17]">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-2">
            All Services We Offer
          </p>
        </div>
  
        {/* Irregular Masonry Grid */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-6 space-y-6 mx-auto">
          
          {images.map((src, index) => {
            const tilt = getRandomTilt();
  
            return (
                <motion.div
                key={index}
                initial={{ rotate: tilt }}
                whileHover={{
                  ...getRandomAnimation(),
                  rotate: 0, // straighten on hover
                }}
                transition={{ duration: 0.4 }}
                className="relative break-inside-avoid cursor-pointer group"
              >
                {/* White Frame Card */}
                <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  
                  {/* Image */}
                  <img
                    src={src}
                    alt={`gallery-${index}`}
                    className="w-full h-auto object-cover rounded-md"
                  />
              
                </div>
              </motion.div>
            );
          })}
  
        </div>
      </div>
    );
  };

export default ImageGrid;
"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Download } from "lucide-react";

export function PrototypeCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #2F4F97 0%, #223B73 100%)',
        }}
      />

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #8099E7 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #557EE0 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-20">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{
              maxWidth: '680px',
              width: '100%',
            }}
          >
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glassmorphism Card */}
              <div 
                className="relative rounded-[2rem] p-12 text-center overflow-hidden"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 32px 64px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(128, 153, 231, 0.5) 0%, rgba(85, 126, 224, 0.5) 100%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 
                      className="mb-4"
                      style={{
                        fontSize: '42px',
                        fontWeight: 600,
                        color: 'white',
                        lineHeight: 1.3,
                      }}
                    >
                      Trải nghiệm ngay
                    </h2>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-10"
                    style={{
                      fontSize: '18px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.7,
                    }}
                  >
                    Khám phá prototype tương tác hoặc tải về ứng dụng để trải nghiệm đầy đủ các tính năng của VKUOne
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all"
                      style={{
                        backgroundColor: 'white',
                        color: '#2F4F97',
                        fontSize: '16px',
                        fontWeight: 600,
                        boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <ExternalLink size={20} />
                      View Figma Prototype
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 600,
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <Download size={20} />
                      Download APK
                    </motion.button>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
                  style={{
                    background: 'radial-gradient(circle, white 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <motion.div
                  className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-20"
                  style={{
                    background: 'radial-gradient(circle, white 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>

            {/* Shadow Enhancement */}
            <div 
              className="absolute -inset-4 rounded-[2.5rem] -z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(85, 126, 224, 0.3) 0%, rgba(47, 79, 151, 0.3) 100%)',
                filter: 'blur(30px)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

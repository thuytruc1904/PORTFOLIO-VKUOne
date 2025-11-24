"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Layout, Palette, PlayCircle } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description: "Nghiên cứu người dùng, phân tích pain points và định hình yêu cầu",
    color: "#557EE0",
  },
  {
    icon: Layout,
    title: "Wireframe",
    description: "Thiết kế khung sườn, xác định luồng người dùng và cấu trúc thông tin",
    color: "#8099E7",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Thiết kế giao diện chi tiết với hệ thống màu sắc và typography",
    color: "#ABB7EF",
  },
  {
    icon: PlayCircle,
    title: "Prototype",
    description: "Tạo prototype tương tác để test và thu thập feedback từ người dùng",
    color: "#2F4F97",
  },
];

export function DesignProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-24" style={{ backgroundColor: '#D3DAF6' }}>
      <div className="max-w-[1440px] mx-auto px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{
            fontSize: '40px',
            fontWeight: 600,
            color: '#223B73',
          }}
        >
          QUY TRÌNH THIẾT KẾ
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background Line */}
          <div 
            className="absolute top-20 left-0 right-0 h-1 hidden lg:block"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
          />

          {/* Animated Progress Line */}
          <motion.div 
            className="absolute top-20 left-0 h-1 hidden lg:block"
            style={{
              width: lineWidth,
              background: 'linear-gradient(to right, #557EE0, #8099E7, #ABB7EF, #2F4F97)',
            }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Number Badge */}
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center relative"
                    style={{
                      backgroundColor: step.color,
                      boxShadow: `0 8px 24px ${step.color}40`
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span 
                      style={{
                        fontSize: '24px',
                        fontWeight: 600,
                        color: 'white',
                      }}
                    >
                      {index + 1}
                    </span>
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: step.color,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                    />
                  </motion.div>
                </div>

                {/* Icon Circle */}
                <div className="flex justify-center mb-5">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: 'white',
                      boxShadow: '0 4px 20px rgba(34, 59, 115, 0.12)'
                    }}
                  >
                    <step.icon size={36} style={{ color: step.color }} />
                  </div>
                </div>

                {/* Content Card */}
                <div 
                  className="bg-white rounded-2xl p-6 text-center"
                  style={{
                    boxShadow: '0 4px 20px rgba(34, 59, 115, 0.1)',
                    minHeight: '180px'
                  }}
                >
                  <h3 
                    className="mb-3"
                    style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#223B73',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: '15px',
                      color: '#2F4F97',
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (Desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 right-0 translate-x-1/2 -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M5 12H19M19 12L12 5M19 12L12 19" 
                        stroke={step.color} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

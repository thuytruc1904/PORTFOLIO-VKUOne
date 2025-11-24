"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const colorPalette = [
  { name: "Primary Dark", color: "#223B73", textColor: "white" },
  { name: "Primary", color: "#2F4F97", textColor: "white" },
  { name: "Accent Blue", color: "#557EE0", textColor: "white" },
  { name: "Light Blue", color: "#8099E7", textColor: "white" },
  { name: "Soft Blue", color: "#ABB7EF", textColor: "#223B73" },
  { name: "Pale Blue", color: "#D3DAF6", textColor: "#223B73" },
  { name: "Background", color: "#EEF0FC", textColor: "#223B73" },
  { name: "Welcome Red", color: "#C81D31", textColor: "white" },
  { name: "Welcome Yellow", color: "#F2C94C", textColor: "#223B73" },
];

const typography = [
  { name: "H1", style: { fontSize: '48px', fontWeight: 600 } },
  { name: "H2", style: { fontSize: '36px', fontWeight: 600 } },
  { name: "H3", style: { fontSize: '24px', fontWeight: 600 } },
  { name: "Body", style: { fontSize: '16px', fontWeight: 400 } },
  { name: "Caption", style: { fontSize: '14px', fontWeight: 400 } },
  { name: "Button", style: { fontSize: '16px', fontWeight: 600 } },
];

export function DesignSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-[#EEF0FC]">
      <div className="max-w-[1440px] mx-auto px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{
            fontSize: '40px',
            fontWeight: 600,
            color: '#223B73',
          }}
        >
          Design System
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="mb-6"
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: '#2F4F97',
              }}
            >
              Color Palette
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {colorPalette.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center"
                >
                  <div 
                    className="w-full h-24 rounded-2xl mb-3 flex items-center justify-center"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: '0 4px 12px rgba(34, 59, 115, 0.15)'
                    }}
                  >
                    <span 
                      style={{
                        color: item.textColor,
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      {item.color}
                    </span>
                  </div>
                  <p 
                    style={{
                      fontSize: '13px',
                      color: '#2F4F97',
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="mb-6"
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: '#2F4F97',
              }}
            >
              Typography
            </h3>
            <div 
              className="bg-white rounded-3xl p-8"
              style={{
                border: '1px solid rgba(171, 183, 239, 0.3)',
                boxShadow: '0 4px 20px rgba(34, 59, 115, 0.08)'
              }}
            >
              <p 
                className="mb-6"
                style={{
                  fontSize: '16px',
                  color: '#2F4F97',
                  opacity: 0.85,
                }}
              >
                SF Pro Rounded – Modern & Academic
              </p>
              {typography.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="mb-5 pb-5"
                  style={{
                    borderBottom: index < typography.length - 1 ? '1px solid rgba(171, 183, 239, 0.2)' : 'none'
                  }}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span 
                      style={{
                        fontSize: '14px',
                        color: '#557EE0',
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </span>
                    <span 
                      style={{
                        fontSize: '12px',
                        color: '#ABB7EF',
                      }}
                    >
                      {item.style.fontSize} / {item.style.fontWeight}
                    </span>
                  </div>
                  <p 
                    style={{
                      ...item.style,
                      color: '#223B73',
                    }}
                  >
                    The quick brown fox
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Components Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h3 
            className="mb-6"
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#2F4F97',
            }}
          >
            Components
          </h3>
          <div 
            className="bg-white rounded-3xl p-10"
            style={{
              border: '1px solid rgba(171, 183, 239, 0.3)',
              boxShadow: '0 4px 20px rgba(34, 59, 115, 0.08)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary Button */}
              <div className="text-center">
                <button 
                  className="px-6 py-3 rounded-2xl w-full mb-2"
                  style={{
                    backgroundColor: '#C81D31',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  Primary
                </button>
                <p style={{ fontSize: '12px', color: '#ABB7EF' }}>Primary Button</p>
              </div>

              {/* Secondary Button */}
              <div className="text-center">
                <button 
                  className="px-6 py-3 rounded-2xl w-full mb-2 bg-white"
                  style={{
                    border: '2px solid #2F4F97',
                    color: '#2F4F97',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  Secondary
                </button>
                <p style={{ fontSize: '12px', color: '#ABB7EF' }}>Secondary Button</p>
              </div>

              {/* Tag */}
              <div className="text-center">
                <div className="inline-flex mb-2">
                  <span 
                    className="px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: 'rgba(85, 126, 224, 0.12)',
                      color: '#557EE0',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    Tag Label
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#ABB7EF' }}>Tag</p>
              </div>

              {/* Status Badge */}
              <div className="text-center">
                <div className="inline-flex mb-2">
                  <span 
                    className="px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: '#EEF0FC',
                      color: '#2F4F97',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    Active
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#ABB7EF' }}>Status Badge</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Layout & Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 
            className="mb-6"
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#2F4F97',
            }}
          >
            Layout & Spacing
          </h3>
          <div 
            className="bg-white rounded-3xl p-10"
            style={{
              border: '1px solid rgba(171, 183, 239, 0.3)',
              boxShadow: '0 4px 20px rgba(34, 59, 115, 0.08)'
            }}
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div 
                  className="mb-3 h-24 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#D3DAF6',
                  }}
                >
                  <span style={{ fontSize: '32px', fontWeight: 600, color: '#2F4F97' }}>12</span>
                </div>
                <p style={{ fontSize: '14px', color: '#223B73', fontWeight: 500 }}>Columns</p>
                <p style={{ fontSize: '12px', color: '#ABB7EF' }}>Grid System</p>
              </div>
              <div>
                <div 
                  className="mb-3 h-24 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#D3DAF6',
                  }}
                >
                  <span style={{ fontSize: '32px', fontWeight: 600, color: '#2F4F97' }}>80px</span>
                </div>
                <p style={{ fontSize: '14px', color: '#223B73', fontWeight: 500 }}>Margin</p>
                <p style={{ fontSize: '12px', color: '#ABB7EF' }}>Container Spacing</p>
              </div>
              <div>
                <div 
                  className="mb-3 h-24 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#D3DAF6',
                  }}
                >
                  <span style={{ fontSize: '32px', fontWeight: 600, color: '#2F4F97' }}>24px</span>
                </div>
                <p style={{ fontSize: '14px', color: '#223B73', fontWeight: 500 }}>Gutter</p>
                <p style={{ fontSize: '12px', color: '#ABB7EF' }}>Column Gap</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

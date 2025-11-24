"use client";

import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/d3b0febd5ca9fc2fef2d70d8b9ded9fd84dc7145.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Blur and Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="VKUOne App"
          className="w-full h-full object-cover"
          style={{ 
            filter: 'blur(0px)',
            // đẩy hình sang phải rõ rệt hơn
            objectPosition: '90% center',
            transform: 'translateX(100px)'
          }}
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #EEF0FC 5%, rgba(238, 240, 252, 0.85) 35%, rgba(238, 240, 252, 0.4) 55%, transparent 80%)'
          }}
        />
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#EEF0FC"
            fillOpacity="0.3"
          />
          <path
            d="M0,80L48,74.7C96,69,192,59,288,64C384,69,480,91,576,96C672,101,768,91,864,80C960,69,1056,59,1152,58.7C1248,59,1344,69,1392,74.7L1440,80L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#EEF0FC"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-20 pt-32 pb-40">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span 
              className="px-5 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                color: '#223B73',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}
            >
              MOBILE APP
            </span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
            style={{
              fontSize: '64px',
              fontWeight: 600,
              color: '#223B73',
              lineHeight: 1.2,
              letterSpacing: '-0.5px'
            }}
          >
            VKUOne
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4"
            style={{
              fontSize: '20px',
              color: '#2F4F97',
              fontWeight: 500,
              lineHeight: 1.5
            }}
          >
            Ứng dụng toàn diện dành cho sinh viên VKU.
          </motion.p>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-10"
            style={{
              fontSize: '18px',
              color: '#223B73',
              opacity: 0.8,
              lineHeight: 1.7,
              maxWidth: '560px'
            }}
          >
            Quản lý lịch học thông minh, nhận thông báo ưu tiên, đăng ký tín chỉ dễ dàng 
            và trợ lý AI học vụ - tất cả trong một ứng dụng.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#C81D31',
                color: 'white',
                fontSize: '16px',
                fontWeight: 600
              }}
            >
              Tải về ngay
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl transition-all bg-white shadow-md hover:shadow-lg"
              style={{
                border: '2px solid #2F4F97',
                color: '#2F4F97',
                fontSize: '16px',
                fontWeight: 600
              }}
            >
              Xem demo
            </motion.button>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
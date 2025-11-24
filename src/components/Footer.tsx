"use client";

import { motion } from "motion/react";
import { Github, Mail, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer 
      className="py-16"
      style={{
        backgroundColor: '#223B73',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="mb-6">
              <h3 
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '8px'
                }}
              >
                VKUOne
              </h3>
              <div 
                className="w-16 h-1 rounded-full"
                style={{
                  background: 'linear-gradient(to right, #557EE0, #8099E7)',
                }}
              />
            </div>

            <p 
              style={{
                fontSize: '16px',
                color: '#D3DAF6',
                lineHeight: 1.7,
                maxWidth: '400px'
              }}
            >
              UX/UI Portfolio – VKU
            </p>

            <p 
              className="mt-4"
              style={{
                fontSize: '14px',
                color: '#D3DAF6',
                opacity: 0.7,
              }}
            >
              Dự án thiết kế ứng dụng di động dành cho sinh viên Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn
            </p>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start md:items-end justify-center"
          >
            <h4 
              className="mb-6"
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: 'white',
              }}
            >
              Liên hệ
            </h4>

            <div className="flex gap-4">
              {/* Behance */}
              <motion.a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                style={{
                  backgroundColor: 'rgba(211, 218, 246, 0.1)',
                  border: '1px solid rgba(211, 218, 246, 0.2)',
                }}
              >
                <Dribbble 
                  size={20} 
                  style={{ 
                    color: '#D3DAF6',
                    opacity: 0.7,
                  }} 
                />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                style={{
                  backgroundColor: 'rgba(211, 218, 246, 0.1)',
                  border: '1px solid rgba(211, 218, 246, 0.2)',
                }}
              >
                <Github 
                  size={20} 
                  style={{ 
                    color: '#D3DAF6',
                    opacity: 0.7,
                  }} 
                />
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:hello@vkuone.edu.vn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                style={{
                  backgroundColor: 'rgba(211, 218, 246, 0.1)',
                  border: '1px solid rgba(211, 218, 246, 0.2)',
                }}
              >
                <Mail 
                  size={20} 
                  style={{ 
                    color: '#D3DAF6',
                    opacity: 0.7,
                  }} 
                />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8"
          style={{
            borderTop: '1px solid rgba(211, 218, 246, 0.2)',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              style={{
                fontSize: '14px',
                color: '#D3DAF6',
                opacity: 0.6,
              }}
            >
              © 2024 VKUOne. All rights reserved.
            </p>

            <p 
              style={{
                fontSize: '14px',
                color: '#D3DAF6',
                opacity: 0.6,
              }}
            >
              Designed with ❤️ for VKU students
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

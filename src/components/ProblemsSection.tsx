"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Bell, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Calendar,
    title: "Lịch học không tập trung",
    description: "Thông tin lịch học rời rạc trên nhiều nền tảng khác nhau, khó nhớ phòng học và thời gian.",
  },
  {
    icon: Bell,
    title: "Thông báo từ nhiều kênh",
    description: "Thông báo quan trọng đến từ email, Facebook, Zalo... dễ bỏ sót và không có ưu tiên rõ ràng.",
  },
  {
    icon: AlertTriangle,
    title: "Đăng ký tín chỉ phức tạp",
    description: "Không có công cụ kiểm tra trùng lịch, dẫn đến đăng ký sai môn hoặc xung đột thời khóa biểu.",
  },
];

export function ProblemsSection() {
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
          Những thách thức
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl p-8 transition-all duration-300"
              style={{
                border: '1px solid rgba(171, 183, 239, 0.4)',
                boxShadow: '0 4px 20px rgba(34, 59, 115, 0.08)',
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: 'rgba(128, 153, 231, 0.15)',
                }}
              >
                <problem.icon 
                  size={32} 
                  style={{ color: '#8099E7' }}
                />
              </div>

              {/* Title */}
              <h3 
                className="mb-3"
                style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#223B73',
                }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontSize: '16px',
                  color: '#2F4F97',
                  opacity: 0.85,
                  lineHeight: 1.7,
                }}
              >
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

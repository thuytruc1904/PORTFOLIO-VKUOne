"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Bell, CheckCircle, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Calendar,
    title: "Lịch học thông minh",
    description: "Tập trung toàn bộ lịch học vào một nơi, hiển thị thay đổi rõ ràng và gửi nhắc nhở kịp thời cho từng buổi học.",
  },
  {
    icon: Bell,
    title: "Thông báo ưu tiên",
    description: "Thông báo được phân loại theo mức độ quan trọng và hiển thị ngay lập tức, không cần đăng nhập lại như trên web.",
  },
  {
    icon: CheckCircle,
    title: "Trải nghiệm mobile tối ưu",
    description: "Giao diện học vụ được tối ưu cho điện thoại, thao tác nhanh, dễ dùng và thuận tiện hơn so với cổng web hiện tại.",
  },
  {
    icon: Sparkles,
    title: "Trợ lý AI học vụ",
    description: "AI hỗ trợ tra cứu học vụ, gợi ý tài liệu, giải đáp thắc mắc và phân tích kết quả học tập cho sinh viên 24/7.",
  },
];


export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24" style={{ backgroundColor: '#D3DAF6' }}>
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
          GIẢI PHÁP CỦA CHÚNG TÔI
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-8 bg-white rounded-2xl"
              style={{
                boxShadow: '0 4px 20px rgba(34, 59, 115, 0.08)',
              }}
            >
              {/* Icon */}
              <div 
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(85, 126, 224, 0.15)',
                }}
              >
                <solution.icon 
                  size={28} 
                  style={{ color: '#557EE0' }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 
                  className="mb-2"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#223B73',
                  }}
                >
                  {solution.title}
                </h3>
                <p 
                  style={{
                    fontSize: '15px',
                    color: '#2F4F97',
                    opacity: 0.85,
                    lineHeight: 1.7,
                  }}
                >
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, Bell, CheckCircle, Award, Sparkles, FileCheck } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Lịch học thông minh",
    description: "Tự động đồng bộ lịch học, nhắc nhở phòng học và thời gian với thông báo thông minh.",
  },
  {
    icon: Bell,
    title: "Thông báo ưu tiên",
    description: "Phân loại thông báo theo độ quan trọng, không bỏ sót thông tin học tập quan trọng.",
  },
  {
    icon: CheckCircle,
    title: "Đăng ký tín chỉ",
    description: "Kiểm tra trùng lịch tự động, gợi ý môn học và hỗ trợ đăng ký nhanh chóng.",
  },
  {
    icon: Award,
    title: "Xem điểm & GPA",
    description: "Theo dõi điểm số theo từng môn, tính toán GPA tự động và dự đoán kết quả học tập.",
  },
  {
    icon: Sparkles,
    title: "Trợ lý AI",
    description: "Chatbot thông minh trả lời mọi thắc mắc về học vụ, quy định và thông tin sinh viên.",
  },
  {
    icon: FileCheck,
    title: "Nộp & theo dõi đồ án",
    description: "Quản lý deadline, nộp bài trực tuyến và theo dõi tiến độ đồ án một cách dễ dàng.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white rounded-3xl p-8 cursor-pointer"
      style={{
        border: '1px solid rgba(171, 183, 239, 0.4)',
        boxShadow: '0 4px 20px rgba(34, 59, 115, 0.1)',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.2s ease-out, box-shadow 0.3s ease',
        minHeight: '260px'
      }}
    >
      {/* Icon */}
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{
          backgroundColor: 'rgba(85, 126, 224, 0.12)',
        }}
      >
        <feature.icon 
          size={32} 
          style={{ color: '#557EE0' }}
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
        {feature.title}
      </h3>

      {/* Description */}
      <p 
        style={{
          fontSize: '15px',
          color: '#2F4F97',
          opacity: 0.85,
          lineHeight: 1.7,
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

export function CoreFeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-[#EEF0FC]">
      <div className="max-w-[1440px] mx-auto px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
          style={{
            fontSize: '40px',
            fontWeight: 600,
            color: '#223B73',
          }}
        >
          TÍNH NĂNG NỔI BẬT
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16 max-w-2xl mx-auto"
          style={{
            fontSize: '18px',
            color: '#2F4F97',
            opacity: 0.85,
          }}
        >
          VKUOne mang đến trải nghiệm toàn diện với các tính năng được thiết kế đặc biệt cho sinh viên VKU
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

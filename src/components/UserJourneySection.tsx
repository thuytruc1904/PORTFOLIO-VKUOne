"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sunrise, BookOpen, Sun, Moon, SmilePlus, Smile, Meh } from "lucide-react";

const journeyStages = [
  {
    time: "Morning",
    timeIcon: Sunrise,
    title: "Kiểm tra lịch học",
    description: "Mở lịch → biết phòng học và thời gian chính xác",
    experience: "Tốt nhưng cần widget",
    emotion: SmilePlus,
    color: "#F2C94C"
  },
  {
    time: "In class",
    timeIcon: BookOpen,
    title: "Nhận thông báo đổi phòng",
    description: "Nhận thông báo đổi phòng học trong lúc học",
    experience: "Tốt nhưng cần phân loại thông báo",
    emotion: Smile,
    color: "#557EE0"
  },
  {
    time: "Afternoon",
    timeIcon: Sun,
    title: "Đăng ký tín chỉ",
    description: "Đăng ký tín chỉ → cảnh báo trùng lịch tự động",
    experience: "Hữu ích nhưng cần thông tin chi tiết môn học",
    emotion: Smile,
    color: "#8099E7"
  },
  {
    time: "Evening",
    timeIcon: Moon,
    title: "Hỏi AI học vụ",
    description: "Hỏi AI về quy định → nhận câu trả lời nhanh",
    experience: "Tốt nhưng cần lưu lịch sử chat",
    emotion: SmilePlus,
    color: "#2F4F97"
  }
];

export function UserJourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24" style={{ backgroundColor: '#D3DAF6' }}>
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
          HÀNH TRÌNH MỘT NGÀY
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
          Trải nghiệm của sinh viên với VKUOne từ sáng đến tối
        </motion.p>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div 
            className="absolute top-32 left-0 right-0 h-1 hidden lg:block"
            style={{
              background: 'linear-gradient(to right, #F2C94C, #557EE0, #8099E7, #2F4F97)',
              opacity: 0.3,
              zIndex: 0
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Time Badge */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="px-5 py-2 rounded-full flex items-center gap-2"
                    style={{
                      backgroundColor: 'white',
                      boxShadow: '0 4px 12px rgba(34, 59, 115, 0.1)'
                    }}
                  >
                    <stage.timeIcon size={18} style={{ color: stage.color }} />
                    <span 
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#223B73',
                      }}
                    >
                      {stage.time}
                    </span>
                  </div>
                </div>

                {/* Stage Number Circle */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: stage.color,
                      boxShadow: `0 4px 16px ${stage.color}40`
                    }}
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
                  </div>
                </div>

                {/* Content Card */}
                <div 
                  className="bg-white rounded-2xl p-6"
                  style={{
                    boxShadow: '0 4px 20px rgba(34, 59, 115, 0.1)',
                    minHeight: '220px'
                  }}
                >
                  <h3 
                    className="mb-3"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#223B73',
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p 
                    className="mb-4"
                    style={{
                      fontSize: '14px',
                      color: '#2F4F97',
                      lineHeight: 1.6,
                    }}
                  >
                    {stage.description}
                  </p>

                  {/* Experience Badge */}
                  <div 
                    className="flex items-start gap-2 p-3 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(85, 126, 224, 0.08)',
                    }}
                  >
                    <stage.emotion size={18} style={{ color: stage.color, flexShrink: 0, marginTop: '2px' }} />
                    <p 
                      style={{
                        fontSize: '13px',
                        color: '#223B73',
                        lineHeight: 1.5,
                        fontStyle: 'italic'
                      }}
                    >
                      {stage.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, AlertCircle, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import avaboy from "../assets/avaboy.jpg";
import avagirl from "../assets/avagirl.jpg";

const personas = [
  {
    name: "Nguyễn Minh Trung",
    major: "CNTT – Năm 3",
    image: avaboy,
    goals:
      "Theo dõi lịch học nhanh, kiểm tra điểm dễ dàng và cập nhật thông báo học vụ kịp thời trên điện thoại.",
    painPoints: [
      "Thông báo học vụ nằm rải rác và phải đăng nhập lại để xem",
      "Lịch học thay đổi nhưng không có nhắc nhở kịp thời",
      "Website trường không tối ưu trên mobile, thao tác khó khăn"
    ],
    insight:
      "Trung cần một ứng dụng học vụ tập trung, đồng bộ và tối ưu cho điện thoại để tiết kiệm thời gian kiểm tra thông tin."
  },
  {
    name: "Trần Thu Hà",
    major: "Thiết kế – Năm 2",
    image: avagirl,
    goals:
      "Quản lý deadline đồ án, tra cứu thông tin học vụ nhanh và biết rõ quy trình khi cần hỗ trợ.",
    painPoints: [
      "Dễ quên deadline vì không có hệ thống nhắc nhở",
      "Không biết hỏi ai khi cần giải đáp học vụ",
      "Tìm thông tin quy định và điều kiện tốt nghiệp mất thời gian"
    ],
    insight:
      "Hà cần trợ lý AI hỗ trợ trả lời học vụ, kèm hệ thống nhắc nhở linh hoạt để không bỏ lỡ deadline."
  }
];


export function PersonasSection() {
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
          NGƯỜI DÙNG MỤC TIÊU
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
              style={{
                border: '1px solid rgba(171, 183, 239, 0.3)',
              }}
            >
              {/* Header with Avatar */}
              <div className="flex items-start gap-5 mb-6 mt-2">
                <ImageWithFallback
                  src={persona.image}
                  alt={persona.name}
                  className="w-20 h-20 rounded-full object-cover"
                  style={{
                    border: '3px solid #557EE0',
                    objectPosition: 'center 20%',
                  }}
                />
                <div>
                  <h3 
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#223B73',
                      marginBottom: '4px'
                    }}
                  >
                    {persona.name}
                  </h3>
                  <p 
                    style={{
                      fontSize: '16px',
                      color: '#557EE0',
                      fontWeight: 500,
                    }}
                  >
                    {persona.major}
                  </p>
                </div>
              </div>

              {/* Goals */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={20} style={{ color: '#557EE0' }} />
                  <h4 
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#223B73',
                    }}
                  >
                    Mục tiêu
                  </h4>
                </div>
                <p 
                  style={{
                    fontSize: '15px',
                    color: '#2F4F97',
                    lineHeight: 1.7,
                    paddingLeft: '28px'
                  }}
                >
                  {persona.goals}
                </p>
              </div>

              {/* Pain Points */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={20} style={{ color: '#C81D31' }} />
                  <h4 
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#223B73',
                    }}
                  >
                    Pain Points
                  </h4>
                </div>
                <ul className="space-y-2" style={{ paddingLeft: '28px' }}>
                  {persona.painPoints.map((point, idx) => (
                    <li 
                      key={idx}
                      style={{
                        fontSize: '15px',
                        color: '#2F4F97',
                        lineHeight: 1.7,
                        listStyleType: 'disc',
                        marginLeft: '16px'
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insight */}
              <div 
                className="p-5 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(85, 126, 224, 0.08)',
                  border: '1px solid rgba(85, 126, 224, 0.2)',
                }}
              >
                <div className="flex items-start gap-2">
                  <Lightbulb size={20} style={{ color: '#F2C94C', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#557EE0',
                        marginBottom: '4px'
                      }}
                    >
                      Insight
                    </h4>
                    <p 
                      style={{
                        fontSize: '15px',
                        color: '#223B73',
                        lineHeight: 1.7,
                        fontStyle: 'italic'
                      }}
                    >
                      {persona.insight}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
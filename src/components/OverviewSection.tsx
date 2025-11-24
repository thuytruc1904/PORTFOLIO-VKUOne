"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function OverviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-[#EEF0FC]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#2F4F97',
              marginBottom: '24px',
              lineHeight: 1.3
            }}
          >
            Vì sao VKUOne ra đời?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto"
            style={{
              fontSize: '18px',
              color: '#223B73',
              opacity: 0.85,
              lineHeight: 1.8,
              maxWidth: '640px'
            }}
          >
            Sinh viên VKU gặp nhiều khó khăn trong việc quản lý học tập. 
            Từ lịch học rời rạc, thông báo không đồng bộ đến việc đăng ký tín chỉ phức tạp. 
            VKUOne được thiết kế để giải quyết toàn bộ những vấn đề này.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

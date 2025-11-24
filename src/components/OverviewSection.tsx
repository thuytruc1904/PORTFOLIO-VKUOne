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
        <div className="text-center max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#2F4F97',
              marginBottom: '22px',
              lineHeight: 1.3
            }}
          >
            VÌ SAO VKUOne RA ĐỜI?
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
              maxWidth: '880px',
              textAlign: 'justify', 
            }}
          >
            Hiện tại VKU chỉ có cổng web học vụ, chưa có ứng dụng mobile chính thức. Sinh viên phải truy cập bằng trình duyệt, đăng nhập lặp lại mỗi lần muốn xem thông báo, lịch học, điểm số hay đăng ký tín chỉ. 
            Việc này gây bất tiện, tốn thời gian và không mang lại trải nghiệm liền mạch.

            VKUOne được phát triển nhằm tạo ra một ứng dụng học vụ tập trung, đăng nhập một lần, dễ sử dụng và hỗ trợ AI — giúp sinh viên VKU theo dõi thông tin học tập nhanh hơn, chính xác hơn và thuận tiện hơn trên thiết bị di động
          </motion.p>
        </div>
      </div>
    </section>
  );
}

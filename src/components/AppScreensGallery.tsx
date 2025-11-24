"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import walkthroughImage from "../assets/walkthrough.png";
import mainImage from "../assets/main.png";
import featureImage from "../assets/feature.png";

const screenGroups = [
  {
    title: "Walkthrough screen",
    screens: [
      {
        name: "Onboarding 1",
        gradient: "from-[#557EE0] to-[#8099E7]",
        description: "Giới thiệu"
      },
      {
        name: "Onboarding 2",
        gradient: "from-[#8099E7] to-[#ABB7EF]",
        description: "Tính năng"
      },
      {
        name: "Onboarding 3",
        gradient: "from-[#ABB7EF] to-[#557EE0]",
        description: "Bắt đầu"
      }
    ]
  },
  {
    title: "Main screens",
    screens: [
      {
        name: "Home",
        gradient: "from-[#557EE0] to-[#8099E7]",
        description: "Trang chủ"
      },
      {
        name: "Schedule",
        gradient: "from-[#8099E7] to-[#ABB7EF]",
        description: "Lịch học"
      },
      {
        name: "Notifications",
        gradient: "from-[#2F4F97] to-[#557EE0]",
        description: "Thông báo"
      },
      {
        name: "Profile",
        gradient: "from-[#ABB7EF] to-[#557EE0]",
        description: "Cá nhân"
      }
    ]
  },
  {
    title: "Features screens",
    screens: [
      {
        name: "Register",
        gradient: "from-[#557EE0] to-[#2F4F97]",
        description: "Đăng ký TL"
      },
      {
        name: "GPA",
        gradient: "from-[#ABB7EF] to-[#557EE0]",
        description: "Xem điểm"
      },
      {
        name: "AI Chat",
        gradient: "from-[#223B73] to-[#2F4F97]",
        description: "Trợ lý AI"
      },
      {
        name: "Settings",
        gradient: "from-[#2F4F97] to-[#223B73]",
        description: "Cài đặt"
      }
    ]
  }
];

export function AppScreensGallery() {
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
          Giao diện ứng dụng
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
          Khám phá các màn hình chính của VKUOne
        </motion.p>

        {/* Screen Groups */}
        <div className="space-y-16">
          {screenGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
            >
              {/* Group Title */}
              <h3 
                className="mb-8"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#223B73',
                }}
              >
                {group.title}
              </h3>

              {/* Screens Row */}
              {group.title === "Walkthrough screen" ? (
                <div className="flex justify-center">
                  <div
                    className="rounded-[2rem] overflow-hidden"
                    style={{
                      maxWidth: "1300px", // phóng to ảnh lên một chút
                    }}
                  >
                    <ImageWithFallback
                      src={walkthroughImage}
                      alt="Walkthrough screens"
                      className="w-full h-auto object-contain bg-transparent"
                    />
                  </div>
                </div>
              ) : group.title === "Main screens" ? (
                <div className="flex justify-center">
                  <div
                    className="rounded-[2rem] overflow-hidden"
                    style={{
                      maxWidth: "1300px", // phóng to thêm cho phần main
                    }}
                  >
                    <ImageWithFallback
                      src={mainImage}
                      alt="Main app screens"
                      className="w-full h-auto object-contain bg-transparent"
                    />
                  </div>
                </div>
              ) : group.title === "Features screens" ? (
                <div className="flex justify-center">
                  <div
                    className="rounded-[2rem] overflow-hidden"
                    style={{
                      maxWidth: "1300px",
                    }}
                  >
                    <ImageWithFallback
                      src={featureImage}
                      alt="Features app screens"
                      className="w-full h-auto object-contain bg-transparent"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.screens.map((screen, screenIndex) => (
                    <motion.div
                      key={screenIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: groupIndex * 0.15 + screenIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      className="relative"
                    >
                      {/* Device Frame */}
                      <div
                        className="relative rounded-[2rem] overflow-hidden w-full"
                        style={{
                          border: "6px solid rgba(255, 255, 255, 0.9)",
                          boxShadow: "0 10px 30px rgba(34, 59, 115, 0.25)",
                          background: "white",
                        }}
                      >
                        {/* Notch */}
                        <div
                          className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-10"
                          style={{
                            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
                          }}
                        />

                        {/* Screen Content */}
                        <div
                          className={`w-full bg-gradient-to-br ${screen.gradient} flex items-center justify-center p-6`}
                          style={{ aspectRatio: "9/16" }}
                        >
                          <div className="text-center text-white">
                            <div
                              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center"
                              style={{
                                fontSize: "24px",
                                fontWeight: 600,
                              }}
                            >
                              {screen.name[0]}
                            </div>
                            <h4
                              style={{
                                fontSize: "18px",
                                fontWeight: 600,
                                marginBottom: "4px",
                              }}
                            >
                              {screen.name}
                            </h4>
                            <p
                              style={{
                                fontSize: "13px",
                                opacity: 0.9,
                              }}
                            >
                              {screen.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
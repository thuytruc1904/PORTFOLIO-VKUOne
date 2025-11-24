"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const colorPalette = [
  { 
    name: "Primary Dark",
    color: "#223B73",
    textColor: "white",
    usage: "Tiêu đề chính"
  },
  { 
    name: "Primary",
    color: "#2F4F97",
    textColor: "white",
    usage: "Navigation, text nổi bật"
  },
  { 
    name: "Accent Blue",
    color: "#557EE0",
    textColor: "white",
    usage: "Buttons, CTA"
  },
  { 
    name: "Light Blue",
    color: "#8099E7",
    textColor: "white",
    usage: "Icon, trạng thái hover"
  },
  { 
    name: "Soft Blue",
    color: "#ABB7EF",
    textColor: "#223B73",
    usage: "Border, divider"
  },
  { 
    name: "Pale Blue",
    color: "#D3DAF6",
    textColor: "#223B73",
    usage: "Section background"
  },
  { 
    name: "Background",
    color: "#EEF0FC",
    textColor: "#223B73",
    usage: "Nền chính"
  },
  { 
    name: "Welcome Red",
    color: "#C81D31",
    textColor: "white",
    usage: "CTA quan trọng"
  },
  { 
    name: "Welcome Yellow",
    color: "#F2C94C",
    textColor: "#223B73",
    usage: "Success / highlight"
  },
];

const typography = [
  { name: "H1", style: { fontSize: "48px", fontWeight: 600, lineHeight: "56px" } },
  { name: "H2", style: { fontSize: "36px", fontWeight: 600, lineHeight: "44px" } },
  { name: "H3", style: { fontSize: "24px", fontWeight: 600, lineHeight: "32px" } },
  { name: "Body", style: { fontSize: "16px", fontWeight: 400, lineHeight: "24px" } },
  { name: "Caption", style: { fontSize: "14px", fontWeight: 400, lineHeight: "20px" } },
  { name: "Button", style: { fontSize: "16px", fontWeight: 600, lineHeight: "24px" } },
];

export function DesignSystemSection() {
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
            fontSize: "40px",
            fontWeight: 600,
            color: "#223B73",
          }}
        >
          THIẾT KẾ HỆ THỐNG
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6">
              <span
                className="inline-flex items-center px-5 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  boxShadow: "0 10px 28px rgba(34, 59, 115, 0.16)",
                  border: "1px solid rgba(171,183,239,0.45)",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: "#2F4F97",
                  }}
                >
                  Color Palette
                </span>
              </span>
            </h3>
            <p
              className="mb-3"
              style={{
                fontSize: "18px",
                color: "#2F4F97",
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              Ice Blue Academic Palette dùng các sắc độ xanh lạnh làm nền, thêm đỏ và vàng làm điểm nhấn.
              Bảng màu mang lại cảm giác học thuật, tin cậy và nhẹ nhàng – đúng tinh thần một ứng dụng học vụ dành cho sinh viên.
            </p>
            <ul
              className="mb-4 list-disc list-inside"
              style={{
                fontSize: "18px",
                color: "#223B73",
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
            
            </ul>
            <p
              className="mb-2"
              style={{
                fontSize: "18px",
                color: "#223B73",
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              Trong case study, bảng màu này xuất hiện xuyên suốt: nền hero và các section, card lịch học – thông báo – dashboard,
              tới các màn hình AI Assistant và kết quả học tập. CTA như “Tải về ngay” dùng Welcome Red để nổi bật trên nền xanh.
            </p>
            <p
              className="mb-6"
              style={{
                fontSize: "18px",
                color: "#223B73",
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              Hệ màu được kiểm soát độ tương phản để chữ Primary Dark luôn dễ đọc trên nền xanh nhạt, giảm mỏi mắt khi xem trên mobile
              và giữ được sự tập trung cho các nội dung học vụ quan trọng.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {colorPalette.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-center"
                >
                  <div
                    className="w-full h-24 rounded-2xl mb-3 flex items-center justify-center"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: "0 4px 12px rgba(34, 59, 115, 0.15)",
                    }}
                  >
                    <span
                      style={{
                        color: item.textColor,
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      {item.color}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#2F4F97",
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#557EE0",
                      opacity: 0.9,
                    }}
                  >
                    {item.usage}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6">
              <span
                className="inline-flex items-center px-5 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  boxShadow: "0 10px 28px rgba(34, 59, 115, 0.16)",
                  border: "1px solid rgba(171,183,239,0.45)",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: "#2F4F97",
                  }}
                >
                  Typography
                </span>
              </span>
            </h3>
            <div
              className="bg-white rounded-3xl p-8"
              style={{
                border: "1px solid rgba(171, 183, 239, 0.3)",
                boxShadow: "0 4px 20px rgba(34, 59, 115, 0.08)",
              }}
            >
              <p
                className="mb-3"
                style={{
                  fontSize: "18px",
                  color: "#2F4F97",
                  opacity: 0.9,
                }}
              >
                <strong>SF Pro Rounded</strong> được chọn vì tính hiện đại, các góc bo tròn thân thiện và khả năng hiển thị tốt trên màn hình nhỏ.
                Font mang vibe công nghệ – học thuật, vừa đủ nghiêm túc cho nội dung học vụ, vừa gần gũi với sinh viên.
               </p>
              <p
                className="mb-3"
                style={{
                  fontSize: "18px",
                  color: "#223B73",
                  opacity: 0.85,
                  lineHeight: 1.7,
                }}
              >
               
              </p>
              <ul
                className="mb-6 list-disc list-inside"
                style={{
                  fontSize: "18px",
                  color: "#223B73",
                  opacity: 0.9,
                  lineHeight: 1.7,
                }}
              >
                <li>
                  <strong>H1</strong>: 48px / 600 / 56px – dùng cho tiêu đề hero và section chính.
                </li>
                <li>
                  <strong>H2</strong>: 36px / 600 / 44px – dùng cho heading các phần nội dung lớn.
                </li>
                <li>
                  <strong>H3</strong>: 24px / 600 / 32px – dùng cho tiêu đề card, block thông tin.
                </li>
                <li>
                  <strong>Body</strong>: 16px / 400 / 24px – nội dung chính, mô tả chi tiết.
                </li>
                <li>
                  <strong>Caption</strong>: 14px / 400 / 20px – label phụ, chú thích.
                </li>
                <li>
                  <strong>Button</strong>: 16px / 600 – chữ trong nút hành động, đảm bảo rõ ràng và dễ bấm.
                </li>
              </ul>
              {typography.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="mb-5 pb-5"
                  style={{
                    borderBottom:
                      index < typography.length - 1 ? "1px solid rgba(171, 183, 239, 0.2)" : "none",
                  }}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#557EE0",
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#ABB7EF",
                      }}
                    >
                      {item.style.fontSize} / {item.style.fontWeight}
                    </span>
                  </div>
                  <p
                    style={{
                      ...item.style,
                      color: "#223B73",
                    }}
                  >
                    The quick brown fox
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

       {/* Components */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-12"
>
  <h3 className="mb-6">
    <span
      className="inline-flex items-center px-5 py-2 rounded-full"
      style={{
        backgroundColor: "rgba(255,255,255,0.9)",
        boxShadow: "0 10px 28px rgba(34, 59, 115, 0.16)",
        border: "1px solid rgba(171,183,239,0.45)",
      }}
    >
      <span
        style={{
          fontSize: "18px",
          fontWeight: 600,
          letterSpacing: "0.02em",
          color: "#2F4F97",
        }}
      >
        Components
      </span>
    </span>
  </h3>

  <div
    className="bg-white rounded-3xl p-8 md:p-10"
    style={{
      border: "1px solid rgba(171, 183, 239, 0.3)",
      boxShadow: "0 4px 20px rgba(34, 59, 115, 0.08)",
    }}
  >
    {/* THU HẸP NỘI DUNG VỀ GIỐNG 1 THẺ MOBILE */}
    <div className="max-w-[520px] mx-auto space-y-8">
      {/* Buttons */}
      <div className="mb-8">
        <p
          className="uppercase tracking-wide mb-4"
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#557EE0",
          }}
        >
          Buttons
        </p>
        <div className="space-y-5">
          {/* Primary Action */}
          <button
            className="w-full h-12 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #557EE0 0%, #2F4F97 100%)",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              boxShadow: "0 6px 18px rgba(34,59,115,0.25)",
            }}
          >
            Primary Action
          </button>

          {/* Secondary Action */}
          <button
            className="w-full h-12 rounded-2xl bg-white"
            style={{
              border: "2px solid #557EE0",
              color: "#2F4F97",
              fontSize: "14px",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            Secondary Action
          </button>

          {/* Dark Action */}
          <button
            className="w-full h-12 rounded-2xl"
            style={{
              backgroundColor: "#223B73",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            Dark Action
          </button>
        </div>
      </div>

      {/* Badges & Status */}
      <div className="mt-6 mb-6">
        <p
          className="uppercase tracking-wide mb-3"
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#557EE0",
          }}
        >
          Badges & Status
        </p>
        <div className="flex flex-wrap gap-3">
          <span
            className="px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(85,126,224,0.18)",
              color: "#2F4F97",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Active
          </span>
          <span
            className="px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "#ABB7EF",
              color: "white",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Pending
          </span>
          <span
            className="px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Completed
          </span>
          <span
            className="px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "#D3DAF6",
              color: "#557EE0",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Disabled
          </span>
        </div>
      </div>

      {/* Iconography */}
      <div>
        <p
          className="uppercase tracking-wide mb-3"
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#557EE0",
          }}
        >
          Iconography
        </p>
        <div className="flex gap-4">
          {["✓", "📈", "🎓", "✨"].map((icon, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center rounded-2xl"
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "#EEF0FC",
                boxShadow: "0 4px 12px rgba(34,59,115,0.12)",
              }}
            >
              <span
                style={{
                  fontSize: "24px",
                  color: "#2F4F97",
                }}
              >
                {icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</motion.div>


      {/* Design Principles */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <h3 className="mb-6">
          <span
            className="inline-flex items-center px-5 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: "0 10px 28px rgba(34, 59, 115, 0.16)",
              border: "1px solid rgba(171,183,239,0.45)",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: "#2F4F97",
              }}
            >
              Design Principles
            </span>
          </span>
        </h3>

        <div
          className="bg-white rounded-3xl p-8 md:p-10"
          style={{
            border: "1px solid rgba(171, 183, 239, 0.3)",
            boxShadow: "0 4px 20px rgba(34, 59, 115, 0.08)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Mobile-First */}
            <div className="flex flex-col items-center">
              <div
                className="mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  width: "72px",
                  height: "72px",
                  background:
                    "linear-gradient(135deg, #557EE0 0%, #2F4F97 100%)",
                  boxShadow: "0 6px 16px rgba(34,59,115,0.25)",
                }}
              >
                <span style={{ fontSize: "30px", color: "white" }}>🎯</span>
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#223B73",
                }}
              >
                Mobile-First
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#2F4F97",
                  opacity: 0.9,
                  lineHeight: 1.7,
                }}
              >
                Tối ưu cho sinh viên sử dụng trên điện thoại, thao tác một tay
                và đọc nhanh các thông tin học vụ.
              </p>
            </div>

            {/* Modern & Clean */}
            <div className="flex flex-col items-center">
              <div
                className="mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  width: "72px",
                  height: "72px",
                  background:
                    "linear-gradient(135deg, #8099E7 0%, #557EE0 100%)",
                  boxShadow: "0 6px 16px rgba(34,59,115,0.25)",
                }}
              >
                <span style={{ fontSize: "30px", color: "white" }}>✨</span>
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#223B73",
                }}
              >
                Modern & Clean
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#2F4F97",
                  opacity: 0.9,
                  lineHeight: 1.7,
                }}
              >
                Gradient nhẹ, card bo góc lớn và animation mượt tạo cảm giác
                hiện đại nhưng vẫn học thuật.
              </p>
            </div>

            {/* Intuitive UX */}
            <div className="flex flex-col items-center">
              <div
                className="mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  width: "72px",
                  height: "72px",
                  backgroundColor: "#223B73",
                  boxShadow: "0 6px 16px rgba(34,59,115,0.25)",
                }}
              >
                <span style={{ fontSize: "30px", color: "white" }}>✅</span>
              </div>
              <h4
                className="mb-2"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#223B73",
                }}
              >
                Intuitive UX
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#2F4F97",
                  opacity: 0.9,
                  lineHeight: 1.7,
                }}
              >
                Điều hướng rõ ràng, kết hợp gợi ý từ AI giúp sinh viên dễ dàng
                tìm lịch học, tài liệu và thông tin học vụ.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
}

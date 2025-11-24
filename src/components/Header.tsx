"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import logoVKUOne from "../assets/logo-vkuone.png";

const navItems = [
  { name: "Trang chủ", href: "#home" },
  { name: "Vấn đề", href: "#problems" },
  { name: "Giải pháp", href: "#solutions" },
  { name: "Tính năng", href: "#features" },
  { name: "Giao diện", href: "#screens" },
  { name: "Thiết kế", href: "#design" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  // Transform values based on scroll
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(238, 240, 252, 0)", "rgba(238, 240, 252, 0.85)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(171, 183, 239, 0)", "rgba(171, 183, 239, 0.2)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBackground,
          borderBottomColor: headerBorder,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
            WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          }}
        />

        <div className="relative border-b" style={{ borderColor: isScrolled ? "rgba(171, 183, 239, 0.2)" : "transparent" }}>
          <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={logoVKUOne}
                  alt="VKUOne app icon"
                  className="h-12 w-auto block"
                />
                <div>
                  <h1
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#223B73",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    VKUOne
                  </h1>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#557EE0",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      marginTop: "-2px",
                    }}
                  >
                    STUDENT APP
                  </p>
                </div>
              </motion.a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="relative px-4 py-2 rounded-lg transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: activeSection === item.href.substring(1) ? "#223B73" : "#2F4F97",
                    }}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-lg -z-10"
                        style={{
                          backgroundColor: "rgba(85, 126, 224, 0.1)",
                          border: "1px solid rgba(85, 126, 224, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(200, 29, 49, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl flex items-center gap-2 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #C81D31 0%, #E02D42 100%)",
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 600,
                    boxShadow: "0 4px 12px rgba(200, 29, 49, 0.25)",
                  }}
                >
                  <Download size={18} />
                  Tải về
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(85, 126, 224, 0.1)",
                  border: "1px solid rgba(85, 126, 224, 0.2)",
                }}
              >
                {isMobileMenuOpen ? (
                  <X size={24} style={{ color: "#223B73" }} />
                ) : (
                  <Menu size={24} style={{ color: "#223B73" }} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Decorative gradient line */}
        <motion.div
          className="h-1"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #557EE0 20%, #8099E7 50%, #557EE0 80%, transparent 100%)",
            opacity: isScrolled ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 z-40 lg:hidden"
        style={{
          backgroundColor: "rgba(238, 240, 252, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(171, 183, 239, 0.3)",
          boxShadow: "0 10px 40px rgba(34, 59, 115, 0.1)",
        }}
      >
        <nav className="max-w-[1440px] mx-auto px-8 py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-3 rounded-lg transition-all cursor-pointer"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: activeSection === item.href.substring(1) ? "#223B73" : "#2F4F97",
                  backgroundColor: activeSection === item.href.substring(1) ? "rgba(85, 126, 224, 0.1)" : "transparent",
                  border: activeSection === item.href.substring(1) ? "1px solid rgba(85, 126, 224, 0.2)" : "1px solid transparent",
                }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: navItems.length * 0.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 rounded-xl flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #C81D31 0%, #E02D42 100%)",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(200, 29, 49, 0.25)",
              }}
            >
              <Download size={18} />
              Tải về
            </motion.button>
          </div>
        </nav>
      </motion.div>

      {/* Overlay for mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/20 z-30 lg:hidden"
        style={{ top: "calc(80px + 1px)" }}
      />
    </>
  );
}

"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import {
  Smartphone,
  Layers,
  Palette,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";



// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const features = [
  { icon: Smartphone, label: "Android & iOS Development" },
  { icon: Layers,     label: "Cross-platform (React Native / Flutter)" },
  { icon: Palette,    label: "UI/UX focused design" },
  { icon: Zap,        label: "Performance optimised apps" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function MobileDevelopment() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Mobile App Development"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #f8fafc 100%)",
      }}
    >
      {/* ── Subtle decorative blobs (no glow — just soft tinted shapes) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #86efac 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #FF832A 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Inner card ── */}
      <div className="relative mx-auto max-w-7xl">
        <div
          className="grid grid-cols-1 items-center gap-12 rounded-3xl bg-white/60 px-8 py-14 shadow-sm backdrop-blur-sm lg:grid-cols-2 lg:gap-20 lg:px-16"
          style={{ border: "1px solid rgba(134,239,172,0.35)" }}
        >
          {/* ════════════════════════════════════════
              LEFT — Text content
          ════════════════════════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(255,131,42,0.10)",
                  color: "#FF832A",
                  border: "1px solid rgba(255,131,42,0.25)",
                }}
              >
                <Smartphone size={13} strokeWidth={2.5} />
                Mobile Development
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              custom={0.05}
              className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-[2.6rem]"
            >
              We Build{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #16a34a, #FF832A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                High-Performance
              </span>{" "}
              Mobile Apps
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="max-w-lg text-base leading-relaxed text-gray-500"
            >
              From idea to launch, we design and develop fast, scalable, and
              user-focused mobile applications tailored to your business goals.
            </motion.p>

            {/* Feature bullets */}
            <motion.ul
              variants={staggerContainer}
              className="mt-2 flex flex-col gap-3"
            >
              {features.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(255,131,42,0.10)" }}
                  >
                    <Icon size={15} color="#FF832A" strokeWidth={2.2} />
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {label}
                  </span>
                  <CheckCircle2
                    size={15}
                    className="ml-auto shrink-0"
                    style={{ color: "#16a34a" }}
                  />
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={fadeUp} custom={0.35} className="mt-4">
              <button
                className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #FF832A 0%, #f97316 100%)",
                  boxShadow: "0 4px 20px rgba(255,131,42,0.28)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 28px rgba(255,131,42,0.40)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(255,131,42,0.28)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start Your App Project
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════
              RIGHT — Lottie animation
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex items-center justify-center"
          >
            {/* Soft card wrapper */}
            <div
              className="relative flex items-center justify-center rounded-3xl p-8 sm:p-12"
              style={{
                background:
                  "linear-gradient(145deg, rgba(220,252,231,0.60) 0%, rgba(255,131,42,0.06) 100%)",
                border: "1px solid rgba(134,239,172,0.30)",
                width: "100%",
                maxWidth: 460,
                minHeight: 320,
              }}
            >
              {/* Floating label chip */}
              <span
                className="absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(22,163,74,0.10)",
                  color: "#16a34a",
                  border: "1px solid rgba(22,163,74,0.20)",
                }}
              >
                Live Preview
              </span>

              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ width: "100%", maxWidth: 340 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

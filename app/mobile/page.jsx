"use client";

import Lottie from "lottie-react";
import animation2 from "@/components/lottie/animation2.json";

function Badge({ id }) {
  return (
    <div style={{
      width: 48,
      height: 48,
      borderRadius: "50%",
      border: "2px solid #f97316",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#f97316",
      fontWeight: 800,
      fontSize: 13,
      flexShrink: 0,
      background: "rgba(249,115,22,0.08)",
      fontFamily: "'Courier New', monospace",
      letterSpacing: 1,
    }}>
      {id}
    </div>
  );
}

export default function page() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0d0d14 0%, #111827 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "60px 40px",
      fontFamily: "'Segoe UI', sans-serif",
      boxSizing: "border-box",
    }}>
      <div style={{
        maxWidth: 1400,
        width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 24,
      }}>

        {/* ── LEFT TEXT BLOCK ── */}
        <div style={{ flex: "0 0 260px" }}>
          <p style={{ color: "#f97316", fontWeight: 700, fontSize: "1.35rem", margin: "0 0 4px" }}>
            Mobile Development
          </p>
          <h2 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "2rem", margin: "0 0 18px", lineHeight: 1.1 }}>
            redefined
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "0.93rem", lineHeight: 1.8, margin: "0 0 28px" }}>
            We build high-performance native and cross-platform mobile apps for
            iOS and Android, delivering seamless user experiences with Flutter,
            React Native, and Swift — from concept to App Store.
          </p>
          <a href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#ea580c", color: "#fff", fontWeight: 700,
              fontSize: "0.9rem", padding: "13px 24px", textDecoration: "none",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f97316"}
            onMouseLeave={e => e.currentTarget.style.background = "#ea580c"}
          >
            Explore Mobile Dev <span style={{ fontSize: "1.1rem" }}>→</span>
          </a>
        </div>

        {/* ── INFINITY + POINTS WRAPPER ── */}
        <div style={{ flex: 1, position: "relative" }}>

          {/* BIG LOTTIE */}
          <Lottie
            animationData={animation2}
            loop={true}
            autoplay={true}
            style={{ width: "100%", display: "block" }}
          />

          {/* ══════════════════════════════
              LEFT SIDE POINTS
              01 → top-left of left loop
              02 → middle-left of left loop
              03 → bottom-left of left loop
          ══════════════════════════════ */}

          {/* POINT 01 — top left */}
          <div style={{
            position: "absolute",
            top: "5%",
            left: "12%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexDirection: "row-reverse",
          }}>
            <Badge id="01" />
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#f97316", fontWeight: 700, fontSize: 13 }}>Strategy & Planning</div>
              <div style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 140 }}>
                Define your roadmap and align goals with your audience.
              </div>
            </div>
          </div>

          {/* POINT 02 — middle left */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexDirection: "row-reverse",
            transform: "translateY(-50%)",
          }}>
            <Badge id="02" />
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#f97316", fontWeight: 700, fontSize: 13 }}>UI/UX Design</div>
              <div style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 140 }}>
                Pixel-perfect interfaces for iOS and Android users.
              </div>
            </div>
          </div>

          {/* POINT 03 — bottom left */}
          <div style={{
            position: "absolute",
            bottom: "5%",
            left: "12%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexDirection: "row-reverse",
          }}>
            <Badge id="03" />
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#f97316", fontWeight: 700, fontSize: 13 }}>Development</div>
              <div style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 140 }}>
                Flutter, React Native, Swift and Kotlin apps built fast.
              </div>
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT SIDE POINTS
              04 → top-right of right loop
              05 → middle-right of right loop
              06 → bottom-right of right loop
          ══════════════════════════════ */}

          {/* POINT 04 — top right */}
          <div style={{
            position: "absolute",
            top: "5%",
            right: "12%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexDirection: "row",
          }}>
            <Badge id="04" />
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#f97316", fontWeight: 700, fontSize: 13 }}>Quality Assurance</div>
              <div style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 140 }}>
                Rigorous testing across devices for a flawless experience.
              </div>
            </div>
          </div>

          {/* POINT 05 — middle right */}
          <div style={{
            position: "absolute",
            top: "50%",
            right: "0%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexDirection: "row",
            transform: "translateY(-50%)",
          }}>
            <Badge id="05" />
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#f97316", fontWeight: 700, fontSize: 13 }}>Launch & Deploy</div>
              <div style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 140 }}>
                App Store and Play Store releases via smooth CI/CD pipelines.
              </div>
            </div>
          </div>

          {/* POINT 06 — bottom right */}
          <div style={{
            position: "absolute",
            bottom: "5%",
            right: "12%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexDirection: "row",
          }}>
            <Badge id="06" />
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#f97316", fontWeight: 700, fontSize: 13 }}>Support & Scale</div>
              <div style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 140 }}>
                Post-launch monitoring, optimization and feature iterations.
              </div>
            </div>
          </div>

        </div>
        {/* end infinity + points wrapper */}

      </div>
    </section>
  );
}
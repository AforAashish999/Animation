"use client";

import { useEffect, useRef } from "react";

export default function MobileAppSection() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll(".orbit-path");
    paths?.forEach((path, i) => {
      (path as SVGElement).style.animationDelay = `${i * 0.3}s`;
    });
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f1010 0%, #141816 50%, #0f1010 100%)",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        padding: "60px 80px",
        gap: "80px",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Left: Text Content */}
      <div style={{ flex: "0 0 420px", zIndex: 1 }}>
        <p
          style={{
            color: "#4ade80",
            fontWeight: 700,
            fontSize: "22px",
            margin: "0 0 4px",
            letterSpacing: "-0.3px",
          }}
        >
          Mobile app development
        </p>
        <h2
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "34px",
            margin: "0 0 24px",
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
          }}
        >
          simplified
        </h2>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "15.5px",
            lineHeight: 1.75,
            margin: "0 0 36px",
            maxWidth: "380px",
          }}
        >
          We help you ship beautiful, high-performance apps on iOS and Android.
          From design to deployment, streamline your entire mobile workflow with
          modern tooling and battle-tested architecture.
        </p>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#16a34a",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "14.5px",
            padding: "14px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            letterSpacing: "0.2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#15803d")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#16a34a")}
        >
          Explore Mobile Dev
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Right: Infinity Loop SVG */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <style>{`
          @keyframes dashFlow {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -200; }
          }
          @keyframes glowPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .orbit-path {
            animation: dashFlow 4s linear infinite;
          }
          .glow-dot {
            animation: glowPulse 2s ease-in-out infinite;
          }
        `}</style>

        <svg
          ref={svgRef}
          width="520"
          height="280"
          viewBox="0 0 520 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer dashed infinity loop (dotted green border) */}
          <path
            d="M 260 140
               C 260 80, 200 40, 140 40
               C 80 40, 20 80, 20 140
               C 20 200, 80 240, 140 240
               C 200 240, 260 200, 260 140
               C 260 80, 320 40, 380 40
               C 440 40, 500 80, 500 140
               C 500 200, 440 240, 380 240
               C 320 240, 260 200, 260 140 Z"
            stroke="#16a34a"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            fill="none"
            opacity="0.5"
          />

          {/* Inner dark filled loop */}
          <path
            d="M 260 140
               C 260 90, 208 55, 155 55
               C 102 55, 55 95, 55 140
               C 55 185, 102 225, 155 225
               C 208 225, 260 190, 260 140
               C 260 90, 312 55, 365 55
               C 418 55, 465 95, 465 140
               C 465 185, 418 225, 365 225
               C 312 225, 260 190, 260 140 Z"
            fill="#1a1f1c"
            stroke="#2d3830"
            strokeWidth="18"
          />

          {/* Animated green orbit line (left loop) */}
          <path
            className="orbit-path"
            d="M 260 140
               C 260 90, 208 55, 155 55
               C 102 55, 55 95, 55 140
               C 55 185, 102 225, 155 225
               C 208 225, 260 190, 260 140"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeDasharray="30 170"
            fill="none"
            strokeLinecap="round"
          />

          {/* Animated green orbit line (right loop) */}
          <path
            className="orbit-path"
            style={{ animationDelay: "2s" }}
            d="M 260 140
               C 260 90, 312 55, 365 55
               C 418 55, 465 95, 465 140
               C 465 185, 418 225, 365 225
               C 312 225, 260 190, 260 140"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeDasharray="30 170"
            fill="none"
            strokeLinecap="round"
          />

          {/* Crossover highlight line */}
          <line
            x1="245"
            y1="125"
            x2="275"
            y2="155"
            stroke="#4ade80"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="275"
            y1="125"
            x2="245"
            y2="155"
            stroke="#4ade80"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Left circle center labels */}
          <text
            x="155"
            y="147"
            textAnchor="middle"
            fill="#e5e7eb"
            fontSize="22"
            fontWeight="700"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="-0.5"
          >
            UI
          </text>

          {/* Right circle center labels */}
          <text
            x="365"
            y="147"
            textAnchor="middle"
            fill="#e5e7eb"
            fontSize="22"
            fontWeight="700"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="-0.5"
          >
            API
          </text>

          {/* Left loop labels — rotated around path */}
          {/* Top: DESIGN */}
          <text
            x="155"
            y="46"
            textAnchor="middle"
            fill="#4ade80"
            fontSize="10"
            fontWeight="700"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="1.5"
          >
            DESIGN
          </text>
          {/* Left: BUILD */}
          <text
            x="38"
            y="105"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9.5"
            fontWeight="600"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="1"
            transform="rotate(-90 38 140)"
          >
            BUILD
          </text>
          {/* Bottom: TEST */}
          <text
            x="155"
            y="243"
            textAnchor="middle"
            fill="#4ade80"
            fontSize="10"
            fontWeight="700"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="1.5"
          >
            TEST
          </text>

          {/* Right loop labels */}
          {/* Top: RELEASE */}
          <text
            x="310"
            y="46"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9.5"
            fontWeight="600"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="1"
          >
            RELEASE
          </text>
          {/* Top right: DEPLOY */}
          <text
            x="420"
            y="46"
            textAnchor="middle"
            fill="#4ade80"
            fontSize="10"
            fontWeight="700"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="1.5"
          >
            DEPLOY
          </text>
          {/* Right: MONITOR */}
          <text
            x="485"
            y="105"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9.5"
            fontWeight="600"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="1"
            transform="rotate(90 485 140)"
          >
            MONITOR
          </text>
          {/* Bottom right: ITERATE */}
          <text
            x="370"
            y="243"
            textAnchor="middle"
            fill="#4ade80"
            fontSize="10"
            fontWeight="700"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="1.5"
          >
            ITERATE
          </text>
          {/* Bottom left of right: OPTIMIZE */}
          <text
            x="295"
            y="243"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9"
            fontWeight="600"
            fontFamily="'DM Sans', sans-serif"
            letterSpacing="0.8"
          >
            OPTIMIZE
          </text>

          {/* Glow dots at key points */}
          <circle className="glow-dot" cx="155" cy="55" r="4" fill="#22c55e" />
          <circle
            className="glow-dot"
            style={{ animationDelay: "0.5s" }}
            cx="365"
            cy="55"
            r="4"
            fill="#22c55e"
          />
          <circle
            className="glow-dot"
            style={{ animationDelay: "1s" }}
            cx="155"
            cy="225"
            r="4"
            fill="#22c55e"
          />
          <circle
            className="glow-dot"
            style={{ animationDelay: "1.5s" }}
            cx="365"
            cy="225"
            r="4"
            fill="#22c55e"
          />
        </svg>
      </div>
    </section>
  );
}
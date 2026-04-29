
"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { label: "PLANNING", angle: -90 },
  { label: "REQUIREMENTS", angle: -30 },
  { label: "DESIGN", angle: 30 },
  { label: "DEVELOPMENT", angle: 90 },
  { label: "TESTING", angle: 150 },
  { label: "LAUNCH", angle: 210 },
];

function buildGearPath(cx, cy, outerR, innerR, toothW, numTeeth) {
  const points = [];
  for (let i = 0; i < numTeeth; i++) {
    const baseAngle = (i / numTeeth) * Math.PI * 2;
    const half = (Math.PI * toothW) / numTeeth;
    const a1 = baseAngle - half * 1.5;
    const a2 = baseAngle - half * 0.5;
    const a3 = baseAngle + half * 0.5;
    const a4 = baseAngle + half * 1.5;
    points.push([cx + innerR * Math.cos(a1), cy + innerR * Math.sin(a1)]);
    points.push([cx + outerR * Math.cos(a2), cy + outerR * Math.sin(a2)]);
    points.push([cx + outerR * Math.cos(a3), cy + outerR * Math.sin(a3)]);
    points.push([cx + innerR * Math.cos(a4), cy + innerR * Math.sin(a4)]);
  }
  return (
    "M " +
    points.map((p) => p[0].toFixed(2) + "," + p[1].toFixed(2)).join(" L ") +
    " Z"
  );
}

export default function SoftwareCycle() {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const activeRef = useRef(0);

  const cx = 200, cy = 200, outerR = 155, innerR = 130, numTeeth = 24;
  const gearPath = buildGearPath(cx, cy, outerR, innerR, 0.6, numTeeth);
  const dotR = 148;

  useEffect(() => {
    const interval = setInterval(() => {
      rotationRef.current += 60;
      setRotation(rotationRef.current);

      setTimeout(() => {
        activeRef.current = (activeRef.current + 1) % steps.length;
        setActive(activeRef.current);
      }, 350);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "80px",
          maxWidth: "1100px",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Left Text */}
        <div style={{ maxWidth: "300px" }}>
          <p
            style={{
              color: "#f97316",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            Software Dev
          </p>
          <h2
            style={{
              color: "#fff",
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            From <span style={{ color: "#f97316" }}>idea</span> to{" "}
            <span style={{ color: "#f97316" }}>launch</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px" }}>
            A proven 6-step process to build software that solves real problems
            and scales with your business.
          </p>
          <button
            style={{
              border: "1px solid #374151",
              background: "transparent",
              color: "#9ca3af",
              padding: "12px 24px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              letterSpacing: "1px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#f97316";
              e.target.style.color = "#f97316";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#374151";
              e.target.style.color = "#9ca3af";
            }}
          >
            Explore Services →
          </button>
        </div>

        {/* Gear SVG */}
        <div style={{ position: "relative", width: "520px", height: "480px" }}>
          <svg viewBox="0 0 400 400" width="520" height="480" style={{ overflow: "visible" }}>
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowStrong">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Rotating gear group */}
            <g
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <path d={gearPath} fill="none" stroke="#9a3412" strokeWidth="1.5" />
              <path d={gearPath} fill="rgba(154,52,18,0.15)" />

              <circle cx={cx} cy={cy} r={innerR - 5} fill="none" stroke="#9a3412" strokeWidth="1.5" />

              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * Math.PI * 2 - Math.PI / 2;
                const x1 = cx + (innerR - 10) * Math.cos(angle);
                const y1 = cy + (innerR - 10) * Math.sin(angle);
                const x2 = cx + (innerR - 18) * Math.cos(angle);
                const y2 = cy + (innerR - 18) * Math.sin(angle);
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c2410c" strokeWidth="1" opacity="0.6" />
                );
              })}
            </g>

            {/* Inner dark circle */}
            <circle cx={cx} cy={cy} r={105} fill="#1a0a00" />
            <circle cx={cx} cy={cy} r={105} fill="none" stroke="#9a3412" strokeWidth="1" opacity="0.5" />

            {/* Center text */}
            <text x={cx} y={cy - 12} textAnchor="middle" fill="#4b5563" fontSize="10" letterSpacing="2" fontFamily="Courier New">
              SOFTWARE
            </text>
            <text x={cx} y={cy + 8} textAnchor="middle" fill="#d1d5db" fontSize="15" fontWeight="700" letterSpacing="1" fontFamily="Courier New">
              DEVELOPMENT
            </text>
            <text x={cx} y={cy + 26} textAnchor="middle" fill="#4b5563" fontSize="10" letterSpacing="2" fontFamily="Courier New">
              LIFECYCLE
            </text>

            {/* Static dots and labels */}
            {steps.map((step, i) => {
              const rad = (step.angle * Math.PI) / 180;
              const dotX = cx + dotR * Math.cos(rad);
              const dotY = cy + dotR * Math.sin(rad);
              const isActive = i === active;
              const labelR = 195;
              const lx = cx + labelR * Math.cos(rad);
              const ly = cy + labelR * Math.sin(rad);

              return (
                <g key={i}>
                  <circle
                    cx={dotX} cy={dotY}
                    r={isActive ? 7 : 5}
                    fill={isActive ? "#f97316" : "#9a3412"}
                    filter={isActive ? "url(#glowStrong)" : undefined}
                    style={{ transition: "all 0.4s ease" }}
                  />
                  {isActive && (
                    <circle
                      cx={dotX} cy={dotY} r={12}
                      fill="none" stroke="#f97316" strokeWidth="1" opacity="0.4"
                      filter="url(#glow)"
                    />
                  )}
                  <text
                    x={lx} y={ly}
                    textAnchor="middle" dominantBaseline="middle"
                    fill={isActive ? "#f97316" : "#4b5563"}
                    fontSize="10"
                    fontWeight={isActive ? "700" : "400"}
                    letterSpacing="2"
                    fontFamily="Courier New"
                    filter={isActive ? "url(#glow)" : undefined}
                    style={{ transition: "all 0.4s ease" }}
                  >
                    {step.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";

const stages = [
    { label: "Awareness", desc: "Reach the right audience", color: "#22c55e", yTop: 40, wTop: 230, wBot: 180, h: 85 },
    { label: "Traffic", desc: "Draw them to your site", color: "#16a34a", yTop: 125, wTop: 178, wBot: 130, h: 85 },
    { label: "Leads", desc: "Convert visitors", color: "#15803d", yTop: 210, wTop: 128, wBot: 82, h: 85 },
    { label: "Conversions", desc: "Clients & revenue", color: "#166534", yTop: 295, wTop: 80, wBot: 40, h: 85 },
];

const CX = 160;
const LABEL_X = 245;

export default function SEOFunnel() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const ctx = cv.getContext("2d");
        const W = 380, H = 500;
        let t = 0;
        let rafId;

        const bubbles = Array.from({ length: 7 }, () => ({
            x: CX - 80 + Math.random() * 160,
            y: -30 - Math.random() * 60,
            r: 5 + Math.random() * 10,
            vy: 0.3 + Math.random() * 0.4,
            alpha: 0.5 + Math.random() * 0.5,
            phase: Math.random() * Math.PI * 2,
        }));

        const swirl = Array.from({ length: 40 }, () => ({
            angle: Math.random() * Math.PI * 2,
            radius: 10 + Math.random() * 45,
            speed: 0.015 + Math.random() * 0.025,
            y: 390 + Math.random() * 50,
            alpha: 0.2 + Math.random() * 0.5,
            r: 1 + Math.random() * 2,
        }));

        function drawFunnelSegment(s) {
            const { yTop, wTop, wBot, color, h } = s;
            const y1 = yTop + h;

            // Top ellipse
            ctx.beginPath();
            ctx.ellipse(CX, yTop, wTop / 2, wTop / 14, 0, 0, Math.PI * 2);
            ctx.fillStyle = color + "55";
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Trapezoid body
            ctx.beginPath();
            ctx.moveTo(CX - wTop / 2, yTop);
            ctx.lineTo(CX + wTop / 2, yTop);
            ctx.lineTo(CX + wBot / 2, y1);
            ctx.lineTo(CX - wBot / 2, y1);
            ctx.closePath();
            ctx.fillStyle = color + "30";
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Bottom ellipse
            ctx.beginPath();
            ctx.ellipse(CX, y1, wBot / 2, wBot / 14, 0, 0, Math.PI * 2);
            ctx.fillStyle = color + "40";
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Label inside segment
            ctx.fillStyle = color;
            ctx.font = "bold 11px monospace";
            ctx.textAlign = "center";
            ctx.fillText(s.label.toUpperCase(), CX, yTop + h / 2 + 4);

            // Dot + dotted line to right label
            const midY = yTop + h / 2;
            const dotX = CX + (wTop + wBot) / 4;

            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(dotX + 4, midY);
            ctx.lineTo(LABEL_X - 5, midY);
            ctx.strokeStyle = color + "88";
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.beginPath();
            ctx.arc(dotX, midY, 4, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            // Right-side label + desc
            ctx.fillStyle = color;
            ctx.font = "bold 11px monospace";
            ctx.textAlign = "left";
            ctx.fillText(s.label, LABEL_X, midY - 4);
            ctx.fillStyle = "#4b5563";
            ctx.font = "10px monospace";
            ctx.fillText(s.desc, LABEL_X, midY + 10);
        }

        function drawSwirl() {
            swirl.forEach((p) => {
                p.angle += p.speed;
                const r = p.radius * (1 - ((p.y - 390) / 80) * 0.5);
                const px = CX + Math.cos(p.angle) * r;
                ctx.beginPath();
                ctx.arc(px, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(34,197,94,${p.alpha * 0.6})`;
                ctx.fill();
            });

            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.ellipse(CX, 400 + i * 14, 45 - i * 12, 8 - i * 2, 0, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(34,197,94,${0.4 - i * 0.1})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        function drawBubbles() {
            bubbles.forEach((b) => {
                b.y += b.vy;
                b.x += Math.sin(t * 0.03 + b.phase) * 0.3;
                if (b.y > 60) b.y = -20 - Math.random() * 40;

                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(34,197,94,${b.alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(b.x, b.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(34,197,94,${b.alpha})`;
                ctx.fill();
            });
        }

        function drawOutput() {
            ctx.fillStyle = "#22c55e";
            ctx.font = "bold 11px monospace";
            ctx.textAlign = "center";
            ctx.fillText("▼  GROWTH", CX, 455);
            ctx.fillStyle = "#4b5563";
            ctx.font = "10px monospace";
            ctx.fillText("Qualified clients & revenue", CX, 472);
        }

        function frame() {
            ctx.clearRect(0, 0, W, H);
            t++;
            drawBubbles();
            stages.forEach((s) => drawFunnelSegment(s));
            drawSwirl();
            drawOutput();
            rafId = requestAnimationFrame(frame);
        }

        frame();
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <section
            style={{
                background: "#111",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 20px",
                fontFamily: "'Courier New', monospace",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    maxWidth: "1000px",
                    width: "100%",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {/* Left text */}
                <div style={{ maxWidth: "270px" }}>
                    <span
                        style={{
                            display: "block",
                            color: "#22c55e",
                            fontSize: "10px",
                            letterSpacing: "3px",
                            marginBottom: "12px",
                        }}
                    >
                        SEO
                    </span>
                    <h2
                        style={{
                            color: "#fff",
                            fontSize: "30px",
                            fontWeight: 800,
                            lineHeight: 1.25,
                            marginBottom: "14px",
                            fontFamily: "'Courier New', monospace",
                        }}
                    >
                        From{" "}
                        <span style={{ color: "#22c55e" }}>invisible</span>
                        <br />
                        to{" "}
                        <span style={{ color: "#22c55e" }}>unstoppable</span>
                    </h2>
                    <p
                        style={{
                            color: "#4b5563",
                            fontSize: "13px",
                            lineHeight: 1.8,
                            marginBottom: "28px",
                        }}
                    >
                        We turn search engines into your biggest growth channel — a proven
                        process that moves people from first discovery to loyal customer.
                    </p>
                    <button
                        style={{
                            background: "#22c55e",
                            color: "#000",
                            border: "none",
                            padding: "12px 24px",
                            fontSize: "13px",
                            fontWeight: 800,
                            fontFamily: "'Courier New', monospace",
                            letterSpacing: "1px",
                            cursor: "pointer",
                            borderRadius: "3px",
                        }}
                        onMouseEnter={(e) => (e.target.style.background = "#16a34a")}
                        onMouseLeave={(e) => (e.target.style.background = "#22c55e")}
                    >
                        Explore SEO Services →
                    </button>
                </div>

                {/* Canvas funnel */}
                <div
                    style={{
                        position: "relative",
                        width: "380px",
                        height: "500px",
                        flexShrink: 0,
                    }}
                >
                    <canvas ref={canvasRef} width={380} height={500} />
                </div>
            </div>
        </section>
    );
}
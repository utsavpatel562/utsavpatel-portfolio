"use client";
import GradientText from "@/components/GradientText";
import LaserFlow from "@/components/LaserFlow";
import LiquidEther from "@/components/LiquidEther";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage
<div
  style={{
    height: "500px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <LaserFlow />
</div>;

// Image Example Interactive Reveal Effect
function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);

  return (
    <div
      style={{
        height: "800px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#BF81FD"
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "86%",
          height: "60%",
          backgroundColor: "#060010",
          borderRadius: "20px",
          border: "2px solid #BF81FD",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          zIndex: 6,
        }}
      >
        {/* Your content here */}
        <LiquidEther />
        <div className="absolute">
          <div className="text-center md:p-0 p-2">
            <h2 className="md:text-4xl text-3xl font-semibold">
              Hi! I'm <span className="text-violet-300">Utsav</span> - AI
              Enthusiast and Full Stack Developer
            </h2>
            <h2 className="md:text-xl text-lg text-slate-300 md:mt-2 mt-3 font-light">
              A Computer Programmer who enjoys turning creative ideas into code.
            </h2>
          </div>
        </div>
        {/* End of the content here */}
      </div>

      <img
        ref={revealImgRef}
        src="/github_img.png"
        alt="Reveal effect"
        style={{
          position: "absolute",
          width: "100%",
          top: "-50%",
          zIndex: 5,
          mixBlendMode: "lighten",
          opacity: 0.3,
          pointerEvents: "none",
          "--mx": "-9999px",
          "--my": "-9999px",
          WebkitMaskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          maskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
export default LaserFlowBoxExample;

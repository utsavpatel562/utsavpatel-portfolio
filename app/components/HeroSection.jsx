"use client";
import LaserFlow from "@/components/LaserFlow";
import LiquidEther from "@/components/LiquidEther";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

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
            <h2 className="md:text-5xl text-3xl font-semibold select-none">
              Hi! I'm <span className="text-violet-300">Utsav</span> - AI
              Enthusiast and Full Stack Developer
            </h2>
            <h2 className="md:text-2xl text-lg text-slate-300 md:mt-2 mt-3 font-light select-none">
              A Computer Programmer who enjoys turning creative ideas into code.
            </h2>
            <div className="my-5 md:flex md:gap-2 justify-center">
              <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
                <span className="w-full text-xl h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                  Know More <FaArrowRight className="w-4 h-4" />
                </span>
              </button>
              <Link href={"/UTSAV_PATEL_CV.pdf"} target="_blank">
                <button className="relative md:mt-0 mt-2 cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#9e9d9f] to-[#f4dffe] active:scale-95">
                  <span className="w-full text-xl h-full flex items-center gap-2 px-8 py-3 bg-[#d6c7de] text-neutral-800 font-semibold rounded-[14px] bg-gradient-to-t from-[#e8e3eb] to-[#8f8e90]">
                    View Resume <IoDocumentText className="w-4 h-4" />
                  </span>
                </button>
              </Link>
            </div>
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

import "../app/globals.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#F0F2F0", "#65C7F7", "#EC6EAD", "#ff6a00"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`animated-gradient-text border border-slate-900 p-5 ${className}`}
    >
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content text-5xl" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}

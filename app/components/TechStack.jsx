import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  { src: "/nextjs2.png", alt: "", href: "" },
  { src: "/ts.png", alt: "", href: "" },
  { src: "/gcp.png", alt: "", href: "" },
  { src: "/js.png", alt: "", href: "" },
  { src: "/nodejs.png", alt: "", href: "" },
  { src: "/react.png", alt: "", href: "" },
  { src: "/npm.png", alt: "", href: "" },
  { src: "/prisma.png", alt: "", href: "" },
  { src: "/tailwind.png", alt: "", href: "" },
  { src: "/convex.png", alt: "", href: "" },
  { src: "/c++.png", alt: "", href: "" },
  { src: "/drizzle.png", alt: "", href: "" },
  { src: "/firebase.png", alt: "", href: "" },
  { src: "/arduino.png", alt: "", href: "" },
  { src: "/clerk.png", alt: "", href: "" },
  { src: "/git.png", alt: "", href: "" },
  { src: "/getstream.png", alt: "", href: "" },
];

function TechStack() {
  return (
    <div className="flex justify-center md:mb-10 select-none">
      <div
        style={{
          height: "auto",
          position: "relative",
          width: "95%",
        }}
        className="bg-neutral-950 py-5"
      >
        <h2 className="text-violet-300 text-center md:my-7 text-3xl my-7 md:text-5xl font-semibold">
          My Tech Stack
        </h2>
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={58}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0000"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}
export default TechStack;

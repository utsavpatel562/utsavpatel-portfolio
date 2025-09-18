import CardNav from "@/components/CardNav";

const Header = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", ariaLabel: "About Company" },
        { label: "My Certifications", ariaLabel: "Certifications" },
        { label: "View Resume", ariaLabel: "Resume" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Services", ariaLabel: "Services" },
        { label: "Featured Projects", ariaLabel: "Featured Projects" },
        { label: "Upcoming Projects", ariaLabel: "Upcoming Project" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
        { label: "GitHub", ariaLabel: "GitHub" },
      ],
    },
  ];

  return (
    <CardNav
      logo="/logo2.png"
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};
export default Header;

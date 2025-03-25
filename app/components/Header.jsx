"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink, Events, scroller } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Header = () => {
  const menuList = [
    { name: "Home", id: "home" },
    { name: "About me", id: "about" },
    { name: "My Expertise", id: "techstack" },
    { name: "Portfolio", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Connect", id: "contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + 100; 
      menuList.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="m-auto flex justify-center">
    <button className="flex md:hidden fixed top-5 left-5 z-60"
    onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
    {isMenuOpen ? (
          <ImCross size={25} className="text-[#f45050] bg-gray-300 rounded-full" />
        ) : (
          <TiThMenu size={25} className="text-[#f45050] bg-gray-300 rounded-full" /> 
        )}
    </button>
      <header
        className={`fixed top-0 rounded-lg md:rounded-full bg-white md:bg-gray-100 shadow-md z-50 transition-all duration-500 ease-in w-70 md:w-auto mt-0 md:mt-2  ${
          isScrolled ? "h-14 py-2" : "h-20 py-4"
        }
        ${isMenuOpen ? "opacity-100 w-full h-screen flex items-center justify-center bg-gray-200 md:bg-transparent rounded-lg" : "opacity-0 md:opacity-100 md:left-auto w-full flex justify-center items-center"}`}
      >
        <nav className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center py-3 px-3">
          {menuList.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={2000}
              offset={-50}
              className={`cursor-pointer hover:text-[#f45050] transition-colors text-2xl md:text-lg ${
                activeSection === item.id ? "text-[#f45050] font-semibold" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>
      </header>
    </section>
  );
};

export default Header;

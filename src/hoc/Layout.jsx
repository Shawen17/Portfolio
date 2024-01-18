import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar scrolled={scrolled} />
      {children}
    </>
  );
};

export default Layout;

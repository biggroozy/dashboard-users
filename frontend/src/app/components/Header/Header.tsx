import Link from "next/link";
import "./styles.css";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Header = () => {
  return (
    <header className="container-menu">
      <Link href="/">Biggroozy</Link>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;

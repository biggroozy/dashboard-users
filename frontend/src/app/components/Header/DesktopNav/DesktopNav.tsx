import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="desktop-menu">
      <ul>
        <li>
          <Link href="#features">Funkcje</Link>
        </li>
        <li>
          <Link href="#technologies">Technologie</Link>
        </li>
        <li>
          <Link href="/login">Logowanie</Link>
        </li>
        <li>
          <Link href="/register">Rejestracja</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;

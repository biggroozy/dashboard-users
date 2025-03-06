import React from "react";
import Image from "next/image";
const MobileNav = () => {
  return (
    <>
      <div className="mobile-nav-icon">
        <Image
          src="icons/mobilenav-icon.svg"
          alt="menu"
          width={45}
          height={45}
        />
      </div>
      {/* <div className="mobile-nav-asideMenu">

      </div> */}
    </>
  );
};

export default MobileNav;

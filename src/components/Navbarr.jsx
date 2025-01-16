import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Navbarr() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl py-1 px-4 lg:px-8 bg-primary lg:py-2">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* Logo */}
        <img
          src="logo.png"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          alt="Logo"
        />

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:gap-2">
          <Link to={"/"}>
            <Button variant="gradient" size="sm">
              عن الكنيسة
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button variant="gradient" size="sm">
              الخدمة
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation"
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <MobileNav open={openNav}>
        <div className="container mx-auto p-2">
          <Link to={"/"}>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>عن الكنيسة</span>
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>الخدمة</span>
            </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
}
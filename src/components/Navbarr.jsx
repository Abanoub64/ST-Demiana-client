import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
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

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/database" className="flex items-center">
          Database
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 bg-primary lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img
          src="logo.png"
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
          alt="Logo"
        />
        <div className="hidden lg:block">{navList}</div>
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
      <MobileNav open={openNav}>
        <div className="container mx-auto p-4">
          {navList}
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
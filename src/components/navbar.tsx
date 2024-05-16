import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "Contact Me",
    "href" : "https://www.linkedin.com/in/leechongkai/"
  }
];

function NavItem(props: any) {
  return (
    <li>
      <Typography
        as="a"
        href= {props.link}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
        placeholder={undefined} 
        >
        {props.children}
        </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0" 
      placeholder={undefined} 
      >
      <div className="container mx-auto flex items-center justify-between">
         <Typography
          as="a"
          href=""
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold"
          placeholder={undefined}   
          >
          About Me
        </Typography>

        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav, idx) => (
            <NavItem key= {idx} link={nav.href}>{nav.label}</NavItem>
          ))}
        </ul>
       
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder={undefined}        
          >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((nav, idx) => (
              <NavItem key={idx} link={nav.href}>{nav.label}</NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

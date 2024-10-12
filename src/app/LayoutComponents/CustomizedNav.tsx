import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
const CustomizedNav = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">JY Liang</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="https://www.linkedin.com/in/jyliang1013/">LinkedIn</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="https://github.com/AutomaticOrca">GitHub</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
export default CustomizedNav;

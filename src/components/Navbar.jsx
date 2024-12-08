"use client";
import React from "react";
import {
  Navbar as NavbarContainer,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About", "Services", "Learn"];

  return (
    <NavbarContainer
      maxWidth="lg"
      onMenuOpenChange={setIsMenuOpen}
      className="py-2 bg-[#D9D9D9]/10 px-12 rounded-[13px] max-w-4xl mx-auto text-slate-50"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-slate-100 "
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-10   h-[80%]" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={item - index}>
            <Link color="" className="text-slate-50" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="relative inline-flex h-12 bg-slate-50 text-neutral-900 rounded-2xloverflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-8 py-1 text-sm font-medium bg-slate-50 text-neutral-900 backdrop-blur-3xl">
              Contact Us
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
}

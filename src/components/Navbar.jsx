"use client";
import React, { useState } from "react";
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  const menuItems = ["About", "Learn", "Services"];

  return (
    <NavbarContainer
      maxWidth="lg"
      onMenuOpenChange={setIsMenuOpen}
      className="py-2 lg:px-12 mx-auto top-0"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-10 ml-[30%] h-[80%]"
        justify="end"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={item - index}>
            {item === "Learn" ? (
              <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                  <Link color="" className="cursor-pointer" href="#">
                    {item}
                  </Link>
                </PopoverTrigger>
                <PopoverContent className="p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
                  <div className="flex flex-col gap-2">
                    <Link
                      href="#"
                      className="text-sm text-gray-700 hover:text-purple-600"
                    >
                      Tax Filing(Coming soon)
                    </Link>
                    <Link
                      href="/gst"
                      className="text-sm text-gray-700 hover:text-purple-600"
                    >
                      GST
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-gray-700 hover:text-purple-600"
                    >
                      Tax Return(Coming soon)
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Link
                color=""
                className=""
                href={index < 2 ? `/#${item.toLowerCase()}` : `/services`}
              >
                {item}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="relative inline-flex lg:h-12 bg-[#8C249D] text-neutral-100 rounded-2xl overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 lg:px-8 lg:py-1 lg:text-sm text-xs font-medium bg-transparent text-neutral-100 backdrop-blur-3xl">
              Contact Us
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-20">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item === "Learn" ? (
              <Dropdown>
                <DropdownTrigger>
                  <Link
                    color="foreground"
                    className="w-full cursor-pointer"
                    onClick={() => setIsLearnOpen(!isLearnOpen)}
                  >
                    {item}
                  </Link>
                </DropdownTrigger>
                <DropdownMenu aria-label="Learn dropdown">
                  <DropdownItem key="tax-filing" href="/tax-filing">
                    Tax Filing
                  </DropdownItem>
                  <DropdownItem key="gst" href="/gst">
                    GST
                  </DropdownItem>
                  <DropdownItem key="tax-return" href="/tax-return">
                    Tax Return
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href={index < 2 ? `/#${item.toLowerCase()}` : `/services`}
                size="lg"
              >
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
}

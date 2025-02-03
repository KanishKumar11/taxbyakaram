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
} from "@nextui-org/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(""); // Controls "Services"
  const [activeTaxSubmenu, setActiveTaxSubmenu] = useState(false); // Controls "Tax Filing"
  const [activeOtherServicesSubmenu, setActiveOtherServicesSubmenu] =
    useState(false); // Controls "Other Services"

  const menuItems = ["About", "Learn", "Services"];

  const taxFilingOptions = [
    { name: "ITR-1", href: "/itr-1" },
    { name: "ITR-2", href: "/itr-2" },
    { name: "ITR-3", href: "/itr-3" },
    { name: "ITR-4", href: "/itr-4" },
  ];

  const serviceOptions = [
    {
      name: "Tax Filing",
      href: "#",
      subItems: taxFilingOptions,
    },
    { name: "GST", href: "/gst" },
    { name: "Tax Return (Coming Soon)", href: "#" },
    {
      name: "Other Services",
      href: "#",
      subItems: [
        { name: "Preparation of projections", href: "#" },
        { name: "Preparation of Financial statements", href: "#" },
        { name: "Book keeping", href: "#" },
        { name: "Registration of partnership firms", href: "#" },
        { name: "EPF and EPS registration", href: "#" },
      ],
    },
  ];

  const toggleSubmenu = (menu) => {
    if (menu === "services") {
      setActiveSubmenu(activeSubmenu === "services" ? "" : "services");
      setActiveTaxSubmenu(false); // Reset nested menus
      setActiveOtherServicesSubmenu(false);
    } else if (menu === "Tax Filing") {
      setActiveTaxSubmenu(!activeTaxSubmenu);
    } else if (menu === "Other Services") {
      setActiveOtherServicesSubmenu(!activeOtherServicesSubmenu);
    }
  };

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

      {/* Desktop Navigation */}
      <NavbarContent
        className="hidden md:flex gap-10 ml-[30%] h-[80%]"
        justify="end"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className="relative group">
            {item === "Services" ? (
              <div className="relative">
                <Link className="cursor-pointer" href="#">
                  {item}
                </Link>
                <div className="absolute left-0 hidden group-hover:block w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 z-50">
                  <div className="flex flex-col gap-2">
                    {serviceOptions.map((service) => (
                      <div
                        key={service.name}
                        className="relative group/service"
                      >
                        <Link
                          href={service.href}
                          className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer"
                        >
                          {service.name}
                        </Link>
                        {service.subItems && (
                          <div className="absolute left-[90%] top-0 hidden group-hover/service:block min-w-40 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-2 ml-2">
                            {service.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm text-gray-700 hover:text-purple-600 py-1"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link href={index < 2 ? `/#${item.toLowerCase()}` : `/services`}>
                {item}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Navigation */}
      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <div key={`${item}-${index}`}>
            {item === "Services" ? (
              <>
                {/* Services Main Toggle */}
                <NavbarMenuItem>
                  <div
                    className="w-full cursor-pointer"
                    onClick={() => toggleSubmenu("services")}
                  >
                    {item}
                  </div>
                </NavbarMenuItem>

                {/* Services Submenu */}
                {activeSubmenu === "services" && (
                  <div className="pl-4">
                    {serviceOptions.map((service) => (
                      <div key={service.name}>
                        <NavbarMenuItem>
                          {service.subItems ? (
                            <div
                              className="w-full cursor-pointer py-2"
                              onClick={() => toggleSubmenu(service.name)}
                            >
                              {service.name}
                            </div>
                          ) : (
                            <Link
                              href={service.href}
                              className="w-full block py-2"
                            >
                              {service.name}
                            </Link>
                          )}
                        </NavbarMenuItem>

                        {/* Tax Filing Submenu */}
                        {service.name === "Tax Filing" && activeTaxSubmenu && (
                          <div className="pl-4 w-full">
                            {service.subItems.map((subItem) => (
                              <NavbarMenuItem key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="w-full py-2 text-gray-700"
                                >
                                  {subItem.name}
                                </Link>
                              </NavbarMenuItem>
                            ))}
                          </div>
                        )}

                        {/* Other Services Submenu */}
                        {service.name === "Other Services" &&
                          activeOtherServicesSubmenu && (
                            <div className="pl-4 w-full">
                              {service.subItems.map((subItem) => (
                                <NavbarMenuItem key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    className="w-full py-2 text-gray-700"
                                  >
                                    {subItem.name}
                                  </Link>
                                </NavbarMenuItem>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavbarMenuItem>
                <Link
                  className="w-full"
                  href={index < 2 ? `/#${item.toLowerCase()}` : `/services`}
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            )}
          </div>
        ))}
      </NavbarMenu>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="relative inline-flex lg:h-12 bg-[#8C249D] text-neutral-100 rounded-2xl"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavbarContainer>
  );
}

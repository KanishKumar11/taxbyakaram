"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { account } from "@/lib/appwrite"; // Import Appwrite config
import { Avatar } from "@nextui-org/react";

export default function UserNav({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // Logout user from Appwrite
      onLogout(); // Callback to update UI
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  console.log(user);

  return (
    <div className="relative">
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        <Avatar
          src={user?.image}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full border-2 border-gray-200 object-cover transition-all hover:border-gray-300 md:h-10 md:w-10"
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="!absolute right-0 top-[calc(100%+8px)] w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all md:w-56"
        >
          <div className="px-4 py-2">
            <p className="truncate text-sm font-medium text-gray-900">
              {user?.name || "User Name"}
            </p>
            <p className="truncate text-sm text-gray-500">
              {user?.email || "user@example.com"}
            </p>
          </div>

          <div className="border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

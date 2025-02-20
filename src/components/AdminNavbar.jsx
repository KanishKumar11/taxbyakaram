"use client";
import { useEffect, useState } from "react";
import { Button, Link } from "@nextui-org/react";
import UserNav from "./NavAdmin/UserNav";
import { account } from "@/lib/appwrite"; // Import Appwrite config

const AdminNavbar = () => {
  const [user, setUser] = useState(null);

  // Fetch the authenticated user
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await account.get(); // Get user details
        setUser(response);
      } catch (error) {
        console.log("User not logged in", error);
      }
    };
    getUser();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // Logout user
      setUser(null); // Reset user state
      window.location.reload(); // Refresh page after logout
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <div className="flex justify-between items-center mt-[10px] mx-auto max-w-7xl">
      {/* Left Side - Brand Name */}
      <div className="text-2xl">
        <h1>TaxByAkaram</h1>
      </div>

      {/* Right Side - Navigation */}
      <div className="flex gap-3 items-center">
        <Link href="/">
          <h1>Home</h1>
        </Link>

        {user ? (
          <UserNav user={user} />
        ) : (
          <Button as={Link} href="/login" color="primary" variant="flat">
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;

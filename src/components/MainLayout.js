"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

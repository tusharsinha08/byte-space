// app/components/layout/LayoutShell.jsx
"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const HIDDEN_ON = ["/register", "/signin"];

export default function LayoutShell({ children }) {
    const pathname = usePathname();
    const hide = HIDDEN_ON.includes(pathname);

    return (
        <>
            {!hide && <Navbar />}
            {children}
            {!hide && <Footer />}
        </>
    );
}
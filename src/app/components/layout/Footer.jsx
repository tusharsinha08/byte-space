"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

const linkColumns = [
    [
        { label: "Featured Courses", href: "/courses" },
        { label: "Featured Categories", href: "/categories" },
        { label: "Business", href: "/categories/business" },
        { label: "IT", href: "/categories/it" },
        { label: "Design", href: "/categories/design" },
    ],
    [
        { label: "Development", href: "/categories/development" },
        { label: "Marketing", href: "/categories/marketing" },
        { label: "Photography", href: "/categories/photography" },
        { label: "Finance", href: "/categories/finance" },
        { label: "Sport", href: "/categories/sport" },
    ],
    [
        { label: "Become a Creator", href: "/creator" },
        { label: "Affiliate Program", href: "/affiliate" },
        { label: "Contact", href: "/contact" },
        { label: "Help", href: "/help" },
        { label: "About", href: "/about" },
    ],
];

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: call your newsletter API here
        console.log("Subscribe:", email);
        setEmail("");
    };

    return (
        <footer className="bg-white text-gray-900 ">
            <div className="mx-auto max-w-7xl px-6 pt-16 md:px-32">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left: brand + newsletter */}
                    <div className="max-w-xl">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl flex items-center gap-1 font-extrabold tracking-tight"
                        >
                            <img src="logo.png"
                                className="w-5"
                                alt="byte space logo" />
                            ByteSpace
                        </Link>

                        <p className="mt-4 text-[15px] text-gray-800">
                            Stay Up to date with our latest features and releases by joining
                            our newsletter.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                        >
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="h-14 w-full rounded-full border border-gray-300 px-6 text-base outline-none transition focus:border-gray-500 sm:max-w-[420px]"
                            />
                            <Button
                                type="submit"
                            >
                                Search
                            </Button>
                        </form>

                        <p className="mt-5 max-w-md text-xs leading-relaxed text-gray-700">
                            By subscribing, you agree to our Privacy Policy and consent to
                            receive updates from our company.
                        </p>
                    </div>

                    {/* Right: link columns */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:pl-10">
                        {linkColumns.map((column, i) => (
                            <ul key={i} className="flex flex-col gap-5">
                                {column.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[15px] text-gray-700 transition hover:text-black"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-8 text-sm text-gray-700 sm:flex-row">
                    <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

                    <ul className="flex flex-wrap items-center gap-6">
                        {legalLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="transition hover:text-black">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
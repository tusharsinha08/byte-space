"use client";

import Link from "next/link";
import { MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar fixed top-0 left-0 z-50 w-full bg-transparent text-white">
            <div className="mx-auto w-full lg:px-32 md:px-20 px-4">

                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-extrabold tracking-tight"
                    >
                        ByteSpace
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-10 md:flex">

                        <Link
                            href="/"
                            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                        >
                            Home
                        </Link>

                        <Link
                            href="/courses"
                            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                        >
                            Courses
                        </Link>

                        <Link
                            href="/creators"
                            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                        >
                            Creators
                        </Link>

                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-5 sm:flex">

                        <Link
                            href="/signin"
                            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/join"
                            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                        >
                            Join Us
                        </Link>

                        <Link
                            href="/store"
                            className="text-2xl text-slate-200 transition-colors hover:text-white"
                            aria-label="Store"
                        >
                            <MdOutlineShoppingBag />
                        </Link>

                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-4 md:hidden">

                        {/* Store */}
                        <Link
                            href="/store"
                            className="text-2xl text-slate-200 transition-colors hover:text-white"
                            aria-label="Store"
                        >
                            <MdOutlineShoppingBag />
                        </Link>

                        {/* Menu Button */}
                        <button
                            type="button"
                            className="btn btn-ghost btn-circle text-2xl text-white hover:bg-white/10"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <MdClose /> : <MdMenu />}
                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="border-t border-white/10 py-5">

                        <div className="flex flex-col gap-2">

                            <Link
                                href="/"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                Home
                            </Link>

                            <Link
                                href="/courses"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                Courses
                            </Link>

                            <Link
                                href="/creators"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                Creators
                            </Link>

                            <div className="my-2 border-t border-white/10" />

                            <Link
                                href="/signin"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/join"
                                onClick={() => setMenuOpen(false)}
                                className="btn btn-sm mt-2 border border-white/20 bg-transparent text-white shadow-none hover:bg-white/10"
                            >
                                Join Us
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </nav>
    );
};
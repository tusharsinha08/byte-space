"use client"

import { courses } from "@/data/courses";
import CourseCard from "../ui/CourseCard";
import { SectionTitle } from "../ui/SectionTitle"
import { useState } from "react";
import Link from "next/link";

export const Featured = () => {
    const categories = [
        "Featured",
        "Music",
        "Drawing & Painting",
        "Marketing",
        "Animation",
        "Social Media",
        "UI/UX Design",
        "Creative Marketing",
        "Digital Illustration",
        "Film & Video",
        "Crafts",
        "Freelance & Entrepreneurship",
        "Graphic Design",
        "Photography",
        "Productivity",
        "Web Development",
        "Data Science",
        "Cooking",
    ];

    const [active, setActive] = useState("Featured")


    const filtered = active === "Featured"
        ? courses
        : courses.filter((c) => c.category === active).slice(0, 6);
    const visibleCourses = filtered.slice(0, 6)

    return (
        <section className="mt-12 px-6 md:px-32">
            <SectionTitle
                title={"Discover Your Passion, Build Your Skills"}
                subTitle={"At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."}
            ></SectionTitle>

            <div className="flex flex-wrap gap-2 mt-8 justify-center">
                {
                    categories.map((category, i) =>
                        <button key={i}
                            onClick={() => setActive(category)}
                            className={`rounded-full text-black py-2 px-4  
                                ${active === category ? 'bg-lime-400' : 'bg-slate-100'}`}
                        > {category} </button>
                    )
                }
                <Link
                    href={"/categories"}
                    className="text-blue-700 py-2 px-4">+ More</Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                {visibleCourses.map(({ id, category, ...course }) => (
                    <CourseCard key={id} {...course} ></CourseCard>
                ))}
            </div>
        </section>
    )
}

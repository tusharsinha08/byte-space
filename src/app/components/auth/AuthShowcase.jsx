import CourseCard from "../ui/CourseCard";
import { courses } from "@/data/courses";
import StudentsCard from "../ui/StudentCard";

const avatars = [
    "/images/avatars/1.png",
    "/images/avatars/2.png",
    "/images/avatars/3.png",
    "/images/avatars/4.png",
];

const toCardProps = ({ id, category, featured, ...rest }) => rest;

export default function AuthShowcase() {
    const [front, back] = courses.slice(0, 2);

    return (
        <div className="relative hidden h-[470px] w-[400px] lg:block">
            {/* Back card */}
            <div className="absolute left-0 top-[90px] z-0 w-[350px]">
                <CourseCard {...toCardProps(back)} />
            </div>

            {/* Front card */}
            <div className="absolute -right-10 top-0 z-10 w-[350px] rounded-3xl">
                <CourseCard {...toCardProps(front)} />
            </div>

            <img
                src="/images/icons/cone5-lime.png"
                alt=""
                aria-hidden="true"
                className="absolute left-[20px] top-[20px] z-20 w-40"
            />

            <img
                src="/images/icons/cone4-lime.png"
                alt=""
                aria-hidden="true"
                className="absolute -left-5 -bottom-15 z-30 w-40"
            />

            <img
                src="/images/icons/cone3-white.png"
                alt=""
                aria-hidden="true"
                className="absolute bottom-[10px] -right-15 z-30 w-40"
            />

            <StudentsCard
                rating={4.5}
                reviews={240}
                avatars={avatars}
                extra="2K+"
                bgColor="#dbfc25"
                titleColor="#0f172a"
                subTextColor="#334155"
                starColor="#0037e6"
                badgeColor="#0f172a"
                badgeTextColor="#ffffff"
                className="absolute -bottom-10 -right-10 z-20 w-[300px]"
            />
        </div>
    );
}
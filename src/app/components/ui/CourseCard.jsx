import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
export default function CourseCard({
    slug,
    image,
    title,
    author,
    rating,
    lessons,
    duration,
    comments,
    level,
    students = [],
    extraStudents,
    price,
    priceLabel = "lifetime",
}) {
    return (
        <div className="w-full max-w-[420px] rounded-2xl border border-slate-300 bg-white p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Link href={`/course/${slug}`}>
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={350}
                        className="h-56 w-full rounded-2xl object-cover"
                    />
                </Link>

                <div className="absolute inset-x-1 bottom-3 flex items-center justify-between gap-2 text-xs text-white">
                    {[`${lessons} Lessons`, duration, `${comments} Comments`].map(
                        (item, idx) => (
                            <span
                                key={idx}
                                className="whitespace-nowrap rounded-full bg-white/30 px-1 text-xs py-1 backdrop-blur-sm text-black"
                            >
                                {item}
                            </span>
                        )
                    )}
                </div>
            </div>

            <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                    <Link href={`/course/${slug}`}>
                        <h3 className="text-lg font-bold leading-tight text-slate-900">
                            {title?.slice(0, 20)}...
                        </h3>
                    </Link>
                    <p className="mt-1 text-xs text-slate-600">
                        by <span className="text-blue-600">{author}</span>
                    </p>
                </div>

                <div className="flex items-center gap-1.5 pt-1 text-slate-500">
                    <span className="text-sm">{rating}</span>
                    <FaStar className="text-lg text-slate-300" />
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-700">
                    <IoStatsChart className="text-sm text-slate-500" />
                    {level}
                </span>

                <div className="flex items-center">
                    {students.map((src, i) => (
                        <Image
                            key={src + i}
                            src={src}
                            alt="Student"
                            width={36}
                            height={36}
                            className="-ml-4 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0"
                        />
                    ))}
                    {extraStudents && (
                        <span className="-ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-lime-300 text-xs font-bold text-slate-900">
                            {extraStudents}
                        </span>
                    )}
                </div>
            </div>

            {/* Price */}
            <div className="mt-3">
                <span className="text-xl font-bold text-blue-600">${price}</span>
                <span className="text-xs text-slate-600">/{priceLabel}</span>
            </div>
        </div>
    );
}
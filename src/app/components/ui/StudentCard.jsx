import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function StudentsCard({
    title = "Happy Students",
    rating,
    reviews,
    avatars = [],
    extra,
    bgColor = "#ffffff",
    titleColor = "#1e293b",
    subTextColor = "#64748b",
    starColor = "#c6f70b",
    badgeColor = "#c6f70b",
    badgeTextColor = "#1e293b",
    className = "",
}) {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className={`rounded-2xl p-4 shadow-sm ${className}`}
        >
            <h3 style={{ color: titleColor }} className="text-sm text-left">
                {title}
            </h3>

            <p
                style={{ color: subTextColor }}
                className="flex items-center gap-1 text-xs"
            >
                <span style={{ color: titleColor }}>{rating}</span>
                <span>({reviews})</span>
                <FaStar style={{ color: starColor }} className="text-base" />
            </p>

            <div className="flex items-center">
                {avatars.map((src, i) => (
                    <Image
                        key={src + i}
                        src={src}
                        alt="Student"
                        width={40}
                        height={40}
                        className="-ml-2 h-10 w-10 rounded-full border-2 border-white object-cover first:ml-0"
                    />
                ))}

                {extra && (
                    <span
                        style={{
                            backgroundColor: badgeColor,
                            color: badgeTextColor,
                        }}
                        className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-sm font-bold"
                    >
                        {extra}
                    </span>
                )}
            </div>
        </div>
    );
}
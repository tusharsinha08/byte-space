export default function InfoCard({
    title,
    courses,
    students,
    bgColor = "#ffffff",
    titleColor = "#1e293b",
    subTextColor = "#94a3b8",
    className = "",
}) {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className={`rounded-2xl px-4 py-2 shadow-sm ${className}`}
        >
            <h3
                style={{ color: titleColor }}
                className="text-lg font-medium text-left"
            >
                {title}
            </h3>

            <p
                style={{ color: subTextColor }}
                className="mt-1 flex items-center gap-2 text-sm"
            >
                <span>{courses} Courses</span>
                <span className="text-[8px]">●</span>
                <span>{students} Students</span>
            </p>
        </div>
    );
}
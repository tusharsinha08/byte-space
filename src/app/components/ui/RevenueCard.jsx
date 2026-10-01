export default function RevenueCard({
    title = "Total Revenue",
    period, // e.g. "July 1-28"
    amount, // e.g. "$120.29"
    progress = 0, // 0 - 100
    bgColor = "#0037e6",
    titleColor = "#ffffff",
    periodColor = "#c7d2fe",
    amountColor = "#ffffff",
    barColor = "#c6f70b",
    trackColor = "#ffffff",
    className = "",
}) {
    const value = Math.min(100, Math.max(0, progress));

    return (
        <div
            style={{ backgroundColor: bgColor }}
            className={`rounded-2xl p-4 shadow-sm ${className}`}
        >
            <h3 style={{ color: titleColor }} className="text-sm font-medium">
                {title}
            </h3>

            <p style={{ color: periodColor }} className="text-xs">
                {period}
            </p>

            <p
                style={{ color: amountColor }}
                className="mt-2 text-2xl font-bold"
            >
                {amount}
            </p>

            <div
                style={{ backgroundColor: trackColor }}
                className="mt-1 h-2 w-full overflow-hidden rounded-full"
            >
                <div
                    style={{ width: `${value}%`, backgroundColor: barColor }}
                    className="h-full rounded-full transition-all duration-500"
                />
            </div>
        </div>
    );
}
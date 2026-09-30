export default function ProgressCard({
    label = "Learning Progress",
    progress = 0,
    bgColor = "#ffffff",
    labelColor = "#334155",
    valueColor = "#1e2930",
    barColor = "#c6f70b",
    trackColor = "#f1f5f9",
    className = "",
}) {
    const value = Math.min(100, Math.max(0, progress));

    return (
        <div
            style={{ backgroundColor: bgColor }}
            className={`rounded-2xl text-left p-4 shadow-sm ${className}`}
        >
            <p style={{ color: labelColor }} className="text-sm">
                {label}
            </p>

            <p
                style={{ color: valueColor }}
                className="mt-2 text-4xl font-bold"
            >
                {value}%
            </p>

            <div
                style={{ backgroundColor: trackColor }}
                className="mt-2 h-2.5 w-full overflow-hidden rounded-full"
            >
                <div
                    style={{ width: `${value}%`, backgroundColor: barColor }}
                    className="h-full rounded-full transition-all duration-500"
                />
            </div>
        </div>
    );
}
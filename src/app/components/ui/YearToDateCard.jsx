export default function YearToDateCard({
    title = "Year to Date",
    year,
    amount,
    change,
    bgColor = "#0037e6",
    titleColor = "#ffffff",
    yearColor = "#c7d2fe",
    amountColor = "#ffffff",
    badgeColor = "#c6f70b",
    badgeTextColor = "#1e293b",
    className = "",
}) {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className={`rounded-2xl p-4 shadow-sm ${className}`}
        >
            <h3 style={{ color: titleColor }} className="text-sm">
                {title}
            </h3>

            <p style={{ color: yearColor }} className="text-xs">
                {year}
            </p>

            <p
                style={{ color: amountColor }}
                className="mt-1 text-2xl font-bold"
            >
                {amount}
            </p>

            {change && (
                <span
                    style={{
                        backgroundColor: badgeColor,
                        color: badgeTextColor,
                    }}
                    className="mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold"
                >
                    {change}
                </span>
            )}
        </div>
    );
}
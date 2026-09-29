
export const Button = ({
    children,
    type = "button",
    className = "",
    ...props }) => {
    return (
        <button type={type}
            className={`flex shrink-0 items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-lime-500 ${className}`}
            {...props} >
            {children}
        </button>
    )
}


export const Button = ({
    children,
    type = "button",
    className = "",
    ...props }) => {
    return (
        <button type={type}
            className={` items-center gap-2 rounded-full bg-[#dbfc25] px-6 py-3 text-black transition-colors hover:bg-[#dbfc25]/90 cursor-pointer ${className}`}
            {...props} >
            {children}
        </button>
    )
}

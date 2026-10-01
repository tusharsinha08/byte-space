
export const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center space-y-6 md:max-w-2xl mx-auto px-6 md:px-4">
            <h2 className="mx:6 md:mx-12 text-2xl md:text-5xl text-black">{title}</h2>
            <p className="text-xs text-slate-500">{subTitle}</p>
        </div>
    )
}

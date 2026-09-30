
export const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="mx-12 text-5xl text-black">{title}</h2>
            <p className="text-sm text-slate-500">{subTitle}</p>
        </div>
    )
}

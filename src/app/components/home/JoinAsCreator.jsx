import Link from "next/link"

export const JoinAsCreator = () => {
    return (
        <section
            className="relative px-6 md:px-32 max-w-7xl mx-auto max-h-[700px] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/home/grid_background.png')",
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Images */}
            {/* left 1 */}
            <img
                src="/images/icons/cone8-lime.png"
                alt=""
                className="absolute left-[-8%] top-[-10%] w-32 md:w-64 z-10"
            />

            <img
                src="/images/icons/cone3-white.png"
                alt=""
                className="absolute left-[15%] top-[8%] w-20 md:w-36 z-10"
            />

            <img
                src="/images/icons/cone5-lime.png"
                alt=""
                className="absolute left-[8%] bottom-[-10%] md:top-[60%] w-32  md:w-84 z-10"
            />

            <img
                src="/images/icons/cone7-white.png"
                alt=""
                className="absolute left-[0%] top-[70%] md:top-[48%] w-20 md:w-32 z-10"
            />

            {/* right 1 */}
            <img
                src="/images/icons/cone10-white-right.png"
                alt=""
                className="absolute right-[0%] top-[10%] w-20 md:w-42 z-10"
            />

            <img
                src="/images/icons/cone6-lime.png"
                alt=""
                className="absolute right-[8%] top-[80%] md:top-[60%] w-32 md:w-64 z-10"
            />

            <img
                src="/images/icons/cone4-lime.png"
                alt=""
                className="absolute right-[12%] top-[3%] md:top-[6%] w-20 md:w-48 z-10"
            />


            <div className="py-20 flex flex-col gap-12 justify-center text-center">
                <h2 className="text-white text-3xl md:text-4xl max-w-3xl mx-auto md:mx-32">Unlock Your Potential as a Creator with ByteSpace</h2>

                <p className="text-slate-300">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>


                <Link
                    href={'/join'}
                    className="self-center rounded-full bg-[#dbfc25] px-6 py-3 text-black transition-colors hover:bg-[#dbfc25]/90"
                >
                    Join as Creator
                </Link>
            </div>
        </section>
    )
}

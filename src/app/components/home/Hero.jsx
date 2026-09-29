import { MdSearch } from "react-icons/md";
import { Button } from "../ui/Button";

const Hero = () => {
    return (
        <section
            className="relative max-w-7xl mx-auto min-h-[calc(100vh-80px)] overflow-hidden bg-cover bg-center"
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
                className="absolute left-[-7%] top-[25%] w-32 md:w-80 z-10"
            />

            <img
                src="/images/icons/cone3-white.png"
                alt=""
                className="absolute left-[18%] top-[45%] w-20 md:w-36 z-10"
            />

            <img
                src="/images/icons/cone2-white.png"
                alt=""
                className="absolute left-[8%] top-[60%] w-20  md:w-84 z-10"
            />

            {/* right 1 */}
            <img
                src="/images/icons/cone9-lime-right.png"
                alt=""
                className="absolute right-[0%] top-[25%] w-20 md:w-42 z-10"
            />

            <img
                src="/images/icons/cone3-white.png"
                alt=""
                className="absolute right-[8%] top-[60%] w-20 md:w-64 z-10"
            />


            <img
                src="/images/icons/cone1-white.png"
                alt=""
                className="absolute right-[18%] top-[45%] w-20 md:w-36 z-10"
            />



            {/* Hero content */}
            <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col items-center px-6 text-center">

                {/* Heading */}
                <div className="pt-16 md:pt-32 lg:pt-36">
                    <h1 className="text-5xl font-bold text-slate-100 md:text-6xl lg:text-7xl">
                        Get Access to Hundreds Courses Available
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-slate-300">
                        Unlock your creativity, gain valuable knowledge, and grow your
                        business with our wide range of courses.
                    </p>
                </div>

                {/* Course search */}
                <form
                    action="/courses"
                    method="get"
                    role="search"
                    className="mt-12 flex w-full max-w-lg items-center gap-2"
                >
                    <div className="relative flex-1">
                        <MdSearch
                            aria-hidden="true"
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-500"
                        />

                        <input
                            id="course-search"
                            type="search"
                            name="q"
                            placeholder="Course, topic, creator"
                            className="w-full rounded-full border border-white/20 bg-slate-100 py-3 pl-12 pr-6 text-slate-900 outline-none placeholder:text-slate-500"
                        />
                    </div>

                    <Button type="submit">Search</Button>
                </form>

                {/* Bottom Image */}
                <div className="relative mx-auto mt-auto w-full max-w-lg">
                    <div className="absolute bottom-0 left-1/2 box-border aspect-[2/1] w-[150%] -translate-x-1/2 rounded-t-full border-[220px] border-b-0 border-lime-400"></div>

                    <img
                        src="/images/home/male.png"
                        alt=""
                        className="relative z-10 w-full"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;

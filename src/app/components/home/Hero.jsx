

const Hero = () => {
    return (
        <section
            className=" hero min-h-[120vh] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/home/grid_background.png')",
            }}
        >
            {/* Background overlay */}
            <div className="absolute min-h-[120vh] inset-0 bg-black/10" />

            {/* Hero content */}
            <div className="relative mx-auto flex min-h-full max-w-7xl items-center justify-center px-6 text-center">
                <div className="max-w-4xl">

                    <h1 className="text-5xl font-bold text-slate-100 md:text-6xl lg:text-7xl">
                        Get Access to Hundreds Courses Available
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-slate-300">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Hero;

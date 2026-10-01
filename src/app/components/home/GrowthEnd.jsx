import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import StudentsCard from '../ui/StudentCard'
import RevenueCard from '../ui/RevenueCard';
import YearToDateCard from '../ui/YearToDateCard';

const avatars = [
    "/images/avatars/1.png",
    "/images/avatars/2.png",
    "/images/avatars/3.png",
    "/images/avatars/4.png",
];

export const GrowthEnd = () => {
    return (
        <section
            className='
                relative overflow-hidden  
                pt-12 pb-20 px-6 md:px-32 flex flex-col-reverse md:flex-row gap-6
                bg-gradient-to-br from-slate-50 via-slate-50 to-indigo-50
            '
        >
            <div
                className='pointer-events-none absolute -bottom-10 left-[-10%] z-0 h-[360px] w-[360px] rounded-full bg-lime-300/70 blur-[100px]'
            ></div>

            <div className="relative z-10 md:w-1/2">
                <img
                    src="/images/home/female.png"
                    alt=""
                    className="relative bottom-0 w-full z-10 h-full"
                />

                <StudentsCard
                    title="Happy Students"
                    rating={240}
                    reviews={4.9}
                    avatars={avatars}
                    extra={'2k+'}
                    className="absolute z-10 bottom-[2%] right-[5%]"
                ></StudentsCard>

                <RevenueCard
                    period="July 1-28"
                    amount="$120.29"
                    progress={60}
                    className="absolute left-0 top-6 -z-20 w-64 "
                />

                <YearToDateCard
                    year="2023"
                    amount="$1,200.38"
                    change="+12$"
                    className="absolute left-0 top-44 -z-20 w-56"
                />
            </div>

            <img
                src="/images/icons/cone8-lime.png"
                alt=""
                className="absolute left-[32%] top-[20%] w-32 md:w-48 z-10"
            />

            <div className='relative py-12 z-10 md:w-1/2 flex flex-col gap-6 justify-center'>
                <h2 className='text-black text-3xl md:text-4xl font-bold'>Create & Manage Courses Easily.</h2>

                <p className='text-slate-500 text-lg'><span className='font-bold'>ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.</p>

                <ul className="flex flex-nowrap flex-col gap-2">
                    <li className="flex items-center gap-2 whitespace-nowrap">
                        <FaCheckCircle className="text-blue-700" />Share Your Expertise
                    </li>
                    <li className="flex items-center gap-2 ">
                        <FaCheckCircle className="text-blue-700" />Monetize Your Passion
                    </li>
                    <li className="flex items-center gap-2 whitespace-nowrap">
                        <FaCheckCircle className="text-blue-700" />Flexibility and Autonomy
                    </li>
                    <li className="flex items-center gap-2 whitespace-nowrap">
                        <FaCheckCircle className="text-blue-700" />Build a Community
                    </li>
                </ul>
            </div>

        </section>
    )
}

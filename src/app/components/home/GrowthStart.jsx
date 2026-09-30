import { courses } from '@/data/courses'
import React from 'react'
import CourseCard from '../ui/CourseCard'
import ProgressCard from '../ui/ProgressCard'

export const GrowthStart = () => {
    const highLightCourse = courses.slice(0, 1)

    return (
        <section
            className='
                relative overflow-hidden  
                mt-12 pt-16 px-6 md:px-32 flex flex-col-reverse md:flex-row gap-6
                bg-gradient-to-br from-white via-slate-50 to-indigo-50
            '
        >
            <div
                className='pointer-events-none absolute -top-30 left-[15%] z-0 h-[360px] w-[360px] rounded-full bg-lime-300/70 blur-[100px]'
            ></div>

            <div className='relative py-12 z-10 md:w-1/2 flex flex-col gap-6 justify-center'>
                <h2 className='text-black text-3xl font-bold'>Your Path to Professional Growth Starts Here!</h2>

                <p className='text-slate-500 text-lg'>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>

                <div className='flex gap-4'>
                    <div>
                        <p className='text-blue-700 font-bold text-2xl'>12K</p>
                        <p className='text-lg text-slate-500'>Students</p>
                    </div>

                    <div>
                        <p className='text-blue-700 font-bold text-2xl'>70+</p>
                        <p className='text-lg text-slate-500'>Courses</p>
                    </div>

                    <div>
                        <p className='text-blue-700 font-bold text-2xl'>16</p>
                        <p className='text-lg text-slate-500'>Creators</p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 md:w-1/2">
                <div className="absolute bottom-6 left-0 top-0 z-0 w-full max-w-[300px]">
                    <CourseCard {...highLightCourse[0]} />
                </div>

                <img
                    src="/images/home/male.png"
                    alt=""
                    className="relative bottom-0 w-full z-10 h-full"
                />

                <ProgressCard
                    label="Learning Progress"
                    progress={55}
                    className="absolute z-10 top-[40%] right-[2%] hidden md:block"
                ></ProgressCard>
            </div>

            <img
                src="/images/icons/cone6-lime.png"
                alt=""
                className="absolute right-[10%] top-[20%] w-32 md:w-48 z-10"
            />

        </section>
    )
}
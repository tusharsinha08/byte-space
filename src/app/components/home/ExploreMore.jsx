import React from 'react'
import { SectionTitle } from '../ui/SectionTitle'

export const ExploreMore = () => {
    const explorePaths = [
        { label: 'Design', logo: '/images/explore/design.png'},
        { label: 'Development', logo: '/images/explore/development.png'},
        { label: 'It & Software', logo: '/images/explore/it.png'},
        { label: 'Marketing', logo: '/images/explore/marketing.png'},
        { label: 'Photography', logo: '/images/explore/photography.png'},
    ]

    return (
        <section className='mt-12 px-6 md:px-32'>
            <SectionTitle
                title={"Explore Diverse Learning Paths at Bytespace"}
                subTitle={"At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone."}
            ></SectionTitle>

            <div className='flex flex-wrap justify-center gap-4 md:gap-6 mt-8'>
                {
                    explorePaths.map(e => 
                        <div key={e.label}
                            className='flex flex-col gap-4 border border-slate-300 p-2 rounded-2xl items-center w-32 md:w-40'
                        >
                            <img className='w-12' src={e.logo} alt="" />
                            <p className='text-sm'>{e.label}</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

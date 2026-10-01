import communityReviews from "@/data/communityReviews"
import CommunityReviewCard from "../ui/CommunityReviewCard";

export const Reviews = () => {
    const reviews = communityReviews;

    return (
        <section className='relative overflow-hidden px-6 pt-12'>
            <div className="max-w-7xl mx-auto md:px-32">
                <div
                    className='pointer-events-none absolute bottom-[-20%] left-[-10%] z-0 h-[500px] w-[500px] rounded-full bg-blue-500/40 blur-[100px]'
                ></div>

                <div
                    className='pointer-events-none absolute top-[10%] right-[40%] z-0 h-[360px] w-[360px] rounded-full bg-lime-300/70 blur-[100px]'
                ></div>

                <div
                    className='pointer-events-none absolute top-[30%] right-[-10%] z-0 h-[360px] w-[360px] rounded-full bg-lime-300/70 blur-[100px]'
                ></div>

                <div className='flex md:flex-row flex-col justify-between gap-6'>
                    <div className='md:w-1/2 pt-12 bottom-0'>
                        <h3 className='md:text-4xl font-semibold text-3xl'>Discover What Our Community Is Saying</h3>
                    </div>

                    <div className='md:w-1/2'>
                        <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 my-16">
                    {
                        reviews.map(review =>
                            <CommunityReviewCard key={review.id}
                                {...review}
                            ></CommunityReviewCard>
                        )
                    }
                </div>
            </div>

        </section>
    )
}

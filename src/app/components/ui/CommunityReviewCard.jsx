import Image from "next/image";

export default function CommunityReviewCard({ avatar, name, role, review }) {
    return (
        <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-sm z-10">
            {/* Avatar */}
            <Image
                src={avatar}
                alt={name}
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
            />

            {/* Name + role */}
            <h3 className="mt-5 text-xl font-bold text-black">{name}</h3>
            <p className="text-blue-700">{role}</p>

            {/* Review text */}
            <p className="mt-6 leading-relaxed text-slate-600">
                &quot;{review}&quot;
            </p>
        </div>
    );
}
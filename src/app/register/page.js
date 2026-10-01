import Image from "next/image";
import Link from "next/link";
import RegisterForm from "../components/auth/RegisterForm";
import AuthShowcase from "../components/auth/AuthShowcase";

export const metadata = {
    title: "Create an Account | ByteSpace",
};

export default function RegisterPage() {
    return (
        <main
            className="min-h-screen bg-[#0037e6] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home/grid_background.png')" }}
        >
            <div className="max-w-7xl px-6 md:px-32 mx-auto mt-12">
                <div>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="ByteSpace"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-10 py-10">
                    <div className="flex md:flex-col gap-6 lg:py-6 md:w-1/2">

                        <div className="max-w-sm text-white">
                            <h2 className="text-lg font-semibold">Sign up and come in</h2>
                            <p className="mt-3 text-slate-200">
                                The registration process is straightforward, uncomplicated,
                                and efficient, allowing users to sign up quickly, easily,
                                and at no cost
                            </p>
                        </div>

                        <AuthShowcase></AuthShowcase>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <RegisterForm></RegisterForm>
                    </div>
                </div>
            </div>
        </main>
    );
}
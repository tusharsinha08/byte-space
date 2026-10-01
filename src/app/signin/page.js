import Image from "next/image";
import Link from "next/link";
import AuthShowcase from "../components/auth/AuthShowcase";
import LoginForm from "../components/auth/LoginForm";

export const metadata = {
    title: "Sign In | ByteSpace",
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
                            <h2 className="text-lg font-semibold">Sign in with ease</h2>
                            <p className="mt-3 text-slate-200">
                                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
                            </p>
                        </div>

                        <AuthShowcase></AuthShowcase>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </main>
    );
}
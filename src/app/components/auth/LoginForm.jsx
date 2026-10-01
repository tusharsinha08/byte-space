"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import FormField from "../ui/FormField";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = async (data) => {
        try {
            // TODO: replace with your sign-in API call
            await new Promise((r) => setTimeout(r, 800));
        } catch (err) {
            setError("root", { message: "Invalid email or password." });
        }
    };

    return (
        <section className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-xl sm:p-10 lg:max-w-lg">
            <p className="text-sm text-blue-700">Sign In</p>
            <h1 className="mt-1 text-4xl font-bold leading-tight text-slate-900">
                Welcome back
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-10 flex flex-col gap-5"
            >

                {/* Email */}
                <FormField
                    label="Email"
                    placeholder="developer@example.com"
                    autoComplete="email"
                    error={errors.email}
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: EMAIL_PATTERN, message: "Enter a valid email" },
                    })}
                />

                {/* Password */}
                <FormField
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    error={errors.password}
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 8, message: "At least 8 characters" },
                    })}
                />

                {/* Server / general error */}
                {errors.root && (
                    <p role="alert" className="text-sm text-red-600">
                        {errors.root.message}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 self-end rounded-full bg-[#dbfc25] px-8 py-2.5 font-medium text-slate-900 transition hover:bg-[#dbfc25]/90 disabled:opacity-60"
                >
                    {isSubmitting ? "Please wait..." : "Sign In"}
                </button>
            </form>

            {/* Divider */}
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <span className="h-px flex-1 bg-slate-200" />
                or
                <span className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social buttons */}
            <div className="mt-6 flex justify-center gap-4">
                <button
                    type="button"
                    aria-label="Continue with Facebook"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 text-2xl text-black transition hover:bg-slate-50"
                >
                    <FaFacebook />
                </button>
                <button
                    type="button"
                    aria-label="Continue with Google"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 text-2xl text-black transition hover:bg-slate-50"
                >
                    <FaGoogle />
                </button>
            </div>


            <p className="mt-auto pt-10 text-center text-xs text-slate-700">
                New user?{" "}
                <Link href="/register" className="text-blue-700 hover:underline">
                    Create an account
                </Link>
            </p>
        </section>
    );
}
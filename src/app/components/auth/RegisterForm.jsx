"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import FormField from "../ui/FormField";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = (hasError) =>
    `h-12 w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 ${hasError ? "border-red-500" : "border-slate-200"
    }`;

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: { fullName: "", email: "", password: "" },
    });

    const onSubmit = async (data) => {
        try {
            // TODO: replace with your register API call
            await new Promise((r) => setTimeout(r, 800));
            reset();
        } catch (err) {
            setError("root", { message: "Something went wrong. Please try again." });
        }
    };

    return (
        <section className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-xl sm:p-10 lg:max-w-lg">
            <p className="text-sm text-blue-700">Create an Account</p>
            <h1 className="mt-1 text-4xl font-bold leading-tight text-slate-900">
                Welcome to <br /> ByteSpace
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-10 flex flex-col gap-5"
            >
                {/* Full name */}
                <FormField
                    label="Full Name"
                    placeholder="Jamie Davis"
                    autoComplete="name"
                    error={errors.fullName}
                    {...register("fullName", {
                        required: "Full name is required",
                        minLength: { value: 2, message: "Name is too short" },
                    })}
                />

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
                    {isSubmitting ? "Please wait..." : "Continue"}
                </button>
            </form>

            <p className="mt-auto pt-10 text-center text-xs text-slate-700">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-700 hover:underline">
                    Login
                </Link>
            </p>
        </section>
    );
}
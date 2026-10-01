import { forwardRef } from "react";

const FormField = forwardRef(function FormField(
    { label, name, error, ...props },
    ref
) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-xs text-slate-800">
                {label}
            </label>

            <input
                id={name}
                name={name}
                ref={ref}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
                className={`h-12 w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 ${
                    error ? "border-red-500" : "border-slate-200"
                }`}
                {...props}
            />

            {error && (
                <p id={`${name}-error`} role="alert" className="text-xs text-red-600">
                    {error.message}
                </p>
            )}
        </div>
    );
});

export default FormField;
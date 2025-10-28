'use client'

import React, {useState} from 'react'
import {useForm} from "react-hook-form";

type ContactFormData = {
    name: string
    email: string
    message: string
}

const Form = () => {
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>()

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const json = await res.json();

            if (json.error) {
                setError(json.error); // json.error is probably string
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError(String(e));
            }
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-9/12 md:w-2/3">

            <div className="flex flex-wrap items-center gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                        type="text"
                        id="name"
                        {...register("name", {required: "Name is required"})}
                        placeholder="Your Name"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#4A908A] focus:outline-0 focus:ring-0 border-none bg-[#4A908A]/15 focus:border-none h-14 placeholder:text-[#4A908A]/60 p-4 text-base font-normal leading-normal"
                    />
                </label>
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div className="flex flex-wrap items-center gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        placeholder="Your Email"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#4A908A] focus:outline-0 focus:ring-0 border-none bg-[#4A908A]/15 focus:border-none h-14 placeholder:text-[#4A908A]/60 p-4 text-base font-normal leading-normal"
                    />
                </label>
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div className="flex flex-wrap items-center gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                <textarea
                    id="message"
                    {...register("message", {required: "Message is required"})}
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#4A908A] focus:outline-0 focus:ring-0 border-none bg-[#4A908A]/15 focus:border-none min-h-36 placeholder:text-[#4A908A]/60 p-4 text-base font-normal leading-normal"
                ></textarea>
                </label>
            </div>

            <button
                type="submit"
                className="flex min-w-[84px] ml-8 mt-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4A908A] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >
                <span className="truncate">Send Message</span>
            </button>
            {error && (
                <div className="fade-in-10 text-red-400 mt-16">
                    {error}
                </div>
            )   }

        </form>
    )
}
export default Form

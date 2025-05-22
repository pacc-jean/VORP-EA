import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  EMAIL: string;
};

export default function NewsletterSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "submit", {
        event_category: "Newsletter",
        event_label: "Signup Form Submission",
      });
    }
    setSubmitted(true);
  };

  return (
    <section className="px-6 py-16 bg-[#032B41] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="md:max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            Stay <span className="text-orange-400 italic">Connected</span>
          </h2>
          <p className="text-lg text-gray-200">
            Get updates on community stories, peace efforts, and opportunities with our monthly Newsletter.
          </p>
        </div>

        {/* Right: Signup Form */}
        <form
          action="https://vorp-ea.us18.list-manage.com/subscribe/post?u=63ff4ba014726e6bf07578657&amp;id=ef17e3a9fd&amp;f_id=00c3b7e6f0"
          method="POST"
          target="_blank"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:max-w-md space-y-2"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("EMAIL", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              name="EMAIL"
              id="mce-EMAIL"
            />
            {/* Honeypot anti-bot field */}
            <input
              type="text"
              name="b_63ff4ba014726e6bf07578657_ef17e3a9fd"
              tabIndex={-1}
              className="hidden"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-400 hover:bg-orange-500 text-black px-5 py-3 rounded-md font-semibold"
            >
              Subscribe
            </button>
          </div>

          {/* Legal & Privacy */}
          <p className="text-xs text-gray-300 leading-snug mt-2">
            By subscribing you agree to our{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>{" "}
            & consent to receive updates from VORP-EA.
          </p>

          {/* Error + success states */}
          {errors.EMAIL && (
            <p className="text-red-400 text-sm">{errors.EMAIL.message}</p>
          )}
          {submitted && (
            <p className="text-green-400 text-sm">Thanks for signing up!</p>
          )}
        </form>
      </div>
    </section>
  );
}

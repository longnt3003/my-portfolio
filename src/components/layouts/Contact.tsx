"use client";

import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    const form = e.currentTarget;

    setIsSending(true);
    toast.loading("Sending message...", { id: "send" });

    emailjs
      .sendForm(
        "service_t6no7mt",
        "template_okdc0h9",
        form,
        "AAGz_W-Cfqi5sSEmR"
      )
      .then(() => {
        toast.success("Message sent successfully!", { id: "send" });

        form.reset();
        form.from_name?.focus();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", {
          id: "send",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#1b1f24] min-h-screen py-32 px-4 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-6xl font-semibold tracking-wide">
          Contact <span className="text-[#13bbff]">Me</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2"
        >
          <div className="flex flex-col gap-8">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border-2 border-[#13bbff] bg-[#22282f] px-6 py-6 text-lg placeholder-gray-400 outline-none shadow-[0_0_14px_rgba(19,187,255,0.35)] transition-all focus:border-[#13bbff] focus:shadow-[0_0_20px_rgba(19,187,255,0.6)]"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full rounded-2xl border-2 border-[#13bbff] bg-[#22282f] px-6 py-6 text-lg placeholder-gray-400 outline-none shadow-[0_0_14px_rgba(19,187,255,0.35)] transition-all focus:border-[#13bbff] focus:shadow-[0_0_20px_rgba(19,187,255,0.6)]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              className="w-full rounded-2xl border-2 border-[#13bbff] bg-[#22282f] px-6 py-6 text-lg placeholder-gray-400 outline-none shadow-[0_0_14px_rgba(19,187,255,0.35)] transition-all focus:border-[#13bbff] focus:shadow-[0_0_20px_rgba(19,187,255,0.6)]"
            />
          </div>
          <div className="flex h-full flex-col gap-8">
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
              className="flex-1 resize-none rounded-2xl border-2 border-[#13bbff] bg-[#22282f] px-6 py-6 text-lg placeholder-gray-400 outline-none shadow-[0_0_14px_rgba(19,187,255,0.35)] transition-all focus:border-[#13bbff] focus:shadow-[0_0_20px_rgba(19,187,255,0.6)]"
            />
            <button
              type="submit"
              disabled={isSending}
              className="inline-block self-center rounded-4xl border-2 border-[#13bbff] px-10 py-3 text-base font-semibold bg-[#13bbff] text-[#1b1f24] transition-all duration-200 hover:bg-transparent hover:text-[#13bbff] hover:shadow-[0_0_10px_rgba(19,187,255,0.9)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#13bbff] disabled:hover:text-[#1b1f24] disabled:hover:shadow-none"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

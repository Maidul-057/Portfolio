"use client";

import { GitBranch, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";

import { portfolioConfig } from "@/config/portfolio";

const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type SubmissionStatus =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>({ type: "idle" });
  const submissionInProgress = useRef(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionInProgress.current) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (String(formData.get("company") ?? "").trim()) {
      setSubmissionStatus({
        type: "error",
        message: "Message could not be sent. Please try again.",
      });
      return;
    }

    if (
      !name ||
      name.length > 80 ||
      !senderEmail ||
      senderEmail.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail) ||
      message.length < 10 ||
      message.length > 5000
    ) {
      setSubmissionStatus({
        type: "error",
        message: "Please check your name, email, and message, then try again.",
      });
      return;
    }

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey || !portfolioConfig.email) {
      setSubmissionStatus({
        type: "error",
        message: "The contact form is not configured yet. Please email me directly instead.",
      });
      return;
    }

    submissionInProgress.current = true;
    setSubmissionStatus({ type: "sending" });

    try {
      const response = await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: name,
          reply_to: senderEmail,
          message,
        },
        { publicKey: emailJsPublicKey },
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS returned status ${response.status}`);
      }

      setSubmissionStatus({
        type: "success",
        message: "Your message was sent successfully. Thank you for reaching out!",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS contact form submission failed:", error);
      setSubmissionStatus({
        type: "error",
        message: "Your message could not be sent. Please try again later or email me directly.",
      });
    } finally {
      submissionInProgress.current = false;
    }
  };

  return (
    <section id="contact" className="section-shell py-10 md:py-16">
      <div className="space-y-12">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Reach out
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Let&apos;s Connect
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-emerald-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Get in Touch</h3>
              <p className="max-w-xl leading-7 text-slate-600 dark:text-slate-300">
                I&apos;m always open to discussing opportunities, ideas, or a project. Feel free to reach out using
                the form or email me directly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={portfolioConfig.email ? `mailto:${portfolioConfig.email}` : undefined}
                className="flex min-h-24 items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/50"
              >
                <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Email
                  </span>
                  <span className="mt-1 block break-all font-medium text-slate-900 dark:text-white">
                    {portfolioConfig.email || "Email pending"}
                  </span>
                </span>
              </a>

              <div className="flex min-h-24 items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Location
                  </span>
                  <span className="mt-1 block font-medium text-slate-900 dark:text-white">Bangladesh</span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Social Profiles</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioConfig.linkedinUrl ? (
                  <a
                    href={portfolioConfig.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300"
                  >
                    <span aria-hidden="true" className="text-sm font-bold tracking-tight">in</span>
                  </a>
                ) : null}
                {portfolioConfig.githubUrl ? (
                  <a
                    href={portfolioConfig.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300"
                  >
                    <GitBranch aria-hidden="true" className="h-5 w-5" />
                  </a>
                ) : null}
                {portfolioConfig.facebookUrl ? (
                  <a
                    href={portfolioConfig.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook profile"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300"
                  >
                    <span aria-hidden="true" className="text-xl font-bold leading-none">f</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900 md:p-8"
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
                maxLength={80}
                className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
                className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Hello Maidul, I&apos;d like to talk about..."
                required
                minLength={10}
                maxLength={5000}
                className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={submissionStatus.type === "sending"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(16,185,129,0.2)] transition hover:bg-emerald-600 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-offset-slate-900"
              >
                {submissionStatus.type === "sending" ? "Sending..." : "Send Message"}
                <Send aria-hidden="true" className="h-4 w-4" />
              </button>
              {submissionStatus.type !== "idle" ? (
                <p
                  role={submissionStatus.type === "error" ? "alert" : "status"}
                  aria-live={submissionStatus.type === "error" ? "assertive" : "polite"}
                  className={`text-sm leading-6 ${
                    submissionStatus.type === "success"
                      ? "text-emerald-700 dark:text-emerald-300"
                      : submissionStatus.type === "error"
                        ? "text-red-700 dark:text-red-300"
                        : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {submissionStatus.type === "sending"
                    ? "Sending your message..."
                    : submissionStatus.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

type FormState = {
  name: string;
  title: string;
  organization: string;
  email: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const INITIAL: FormState = {
  name: "",
  title: "",
  organization: "",
  email: "",
  message: "",
};

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-widest text-zinc-500 mb-2"
      >
        {label}
        {required && (
          <span className="text-[#0F6674] ml-1" aria-label="required">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 bg-white text-[14px] text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#0F6674] focus:ring-2 focus:ring-[#0F6674]/20 transition-all duration-150";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL);
    } catch {
      setErrorMsg(
        "Something went wrong. Email us directly at hello@varelihealth.com."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#0F6674]/10 flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7L5.5 10L11.5 4" stroke="#0F6674" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[15px] font-semibold text-zinc-900">
            Message received.
          </p>
        </div>
        <p className="text-[14px] text-zinc-500 leading-relaxed">
          Someone from Vareli will respond within one business day. For urgent
          needs, email us directly at{" "}
          <a
            href="mailto:hello@varelihealth.com"
            className="text-[#0F6674] hover:underline"
          >
            hello@varelihealth.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="name" label="Full name" required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Sarah Chen"
          />
        </Field>

        <Field id="title" label="Job title">
          <input
            id="title"
            name="title"
            type="text"
            autoComplete="organization-title"
            value={form.title}
            onChange={handleChange}
            className={inputClass}
            placeholder="Chief Innovation Officer"
          />
        </Field>

        <Field id="organization" label="Hospital / Organization" required>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            required
            value={form.organization}
            onChange={handleChange}
            className={inputClass}
            placeholder="Mercy Health System"
          />
        </Field>

        <Field id="email" label="Work email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="s.chen@mercyhealth.org"
          />
        </Field>
      </div>

      <Field id="message" label="What are you working on?">
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your fleet, current governance approach, and what you are trying to solve."
        />
      </Field>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700"
        >
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-[#0F6674] hover:bg-[#0D5A68] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2"
        >
          {status === "submitting" ? (
            <>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8" strokeLinecap="round" />
              </svg>
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
        <p className="text-[12px] text-zinc-400 pt-2.5">
          Required fields marked{" "}
          <span className="text-[#0F6674]">*</span>
        </p>
      </div>
    </form>
  );
}

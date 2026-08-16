"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type FieldName = "fullName" | "email" | "whatsapp" | "businessName" | "website" | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const formSubmitEndpoint = "https://formsubmit.co/ajax/mail@bidhansunuwar.com";

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

const inputClassName = (hasError: boolean) =>
  `mt-2 min-h-13 w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-blue-100 ${
    hasError ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"
  }`;

function isValidUrl(value: string) {
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return Boolean(url.hostname.includes("."));
  } catch {
    return false;
  }
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your active email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = values.whatsapp.replace(/\D/g, "");
  if (!values.whatsapp.trim()) {
    errors.whatsapp = "Please enter your WhatsApp number.";
  } else if (digits.length < 7 || digits.length > 15) {
    errors.whatsapp = "Please enter a valid WhatsApp number.";
  }

  if (!values.businessName.trim()) errors.businessName = "Please enter your business name.";
  if (values.website.trim() && !isValidUrl(values.website.trim())) {
    errors.website = "Please enter a valid website or Facebook URL.";
  }

  return errors;
}

export function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  const handleChange = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmissionError("");
    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (firstInvalidField) {
      requestAnimationFrame(() => fieldRefs.current[firstInvalidField]?.focus());
      return;
    }

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Full Name": values.fullName.trim(),
          email: values.email.trim(),
          "WhatsApp Number": values.whatsapp.trim(),
          "Business Name": values.businessName.trim(),
          "Website or Facebook URL": values.website.trim() || "Not provided",
          "Anything You Want to Say": values.message.trim() || "Not provided",
          _replyto: values.email.trim(),
          _subject: "New AI Marketing Consultation Request",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setSubmissionSuccess(true);
      window.setTimeout(() => router.push("/thank-you"), 850);
    } catch {
      setSubmissionError("We couldn’t send your request. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-consultation" className="relative isolate scroll-mt-5 overflow-hidden px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="booking-title">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#eaf3ff_0%,#f8fafc_46%,#eef2ff_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Book the Call</p>
        <h2 id="booking-title" className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl">
          Free One-to-One Consultation
        </h2>
        <p className="mt-3 text-xl font-bold leading-8 text-ink sm:text-2xl">Customized Strategy for Your Business</p>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
          See what may be holding back your enquiries—and what to focus on first.
        </p>
      </div>

      <form noValidate onSubmit={handleSubmit} className="relative mx-auto mt-10 max-w-2xl rounded-[2rem] border border-white bg-white/95 p-5 shadow-[0_30px_80px_-35px_rgba(37,99,235,0.45)] backdrop-blur sm:mt-12 sm:p-8 lg:p-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="text-sm font-bold text-ink">Full Name <span className="text-primary">*</span></label>
            <input
              ref={(element) => { fieldRefs.current.fullName = element; }}
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              value={values.fullName}
              onChange={(event) => handleChange("fullName", event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              placeholder="Your full name"
              className={inputClassName(Boolean(errors.fullName))}
            />
            {errors.fullName && <p id="fullName-error" className="mt-2 text-sm font-medium text-red-600" role="alert">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-bold text-ink">Active Email <span className="text-primary">*</span></label>
            <input
              ref={(element) => { fieldRefs.current.email = element; }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={(event) => handleChange("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@business.com"
              className={inputClassName(Boolean(errors.email))}
            />
            {errors.email && <p id="email-error" className="mt-2 text-sm font-medium text-red-600" role="alert">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="whatsapp" className="text-sm font-bold text-ink">WhatsApp Number <span className="text-primary">*</span></label>
            <input
              ref={(element) => { fieldRefs.current.whatsapp = element; }}
              id="whatsapp"
              name="whatsapp"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={values.whatsapp}
              onChange={(event) => handleChange("whatsapp", event.target.value)}
              aria-invalid={Boolean(errors.whatsapp)}
              aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
              placeholder="Your WhatsApp number"
              className={inputClassName(Boolean(errors.whatsapp))}
            />
            {errors.whatsapp && <p id="whatsapp-error" className="mt-2 text-sm font-medium text-red-600" role="alert">{errors.whatsapp}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="businessName" className="text-sm font-bold text-ink">Business Name <span className="text-primary">*</span></label>
            <input
              ref={(element) => { fieldRefs.current.businessName = element; }}
              id="businessName"
              name="businessName"
              type="text"
              autoComplete="organization"
              value={values.businessName}
              onChange={(event) => handleChange("businessName", event.target.value)}
              aria-invalid={Boolean(errors.businessName)}
              aria-describedby={errors.businessName ? "businessName-error" : undefined}
              placeholder="Your business name"
              className={inputClassName(Boolean(errors.businessName))}
            />
            {errors.businessName && <p id="businessName-error" className="mt-2 text-sm font-medium text-red-600" role="alert">{errors.businessName}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="website" className="text-sm font-bold text-ink">Website or Facebook URL <span className="font-medium text-slate-400">(optional)</span></label>
            <input
              ref={(element) => { fieldRefs.current.website = element; }}
              id="website"
              name="website"
              type="url"
              autoComplete="url"
              inputMode="url"
              value={values.website}
              onChange={(event) => handleChange("website", event.target.value)}
              aria-invalid={Boolean(errors.website)}
              aria-describedby={errors.website ? "website-error" : undefined}
              placeholder="https://yourbusiness.com"
              className={inputClassName(Boolean(errors.website))}
            />
            {errors.website && <p id="website-error" className="mt-2 text-sm font-medium text-red-600" role="alert">{errors.website}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-sm font-bold text-ink">Anything You Want to Say</label>
            <textarea
              ref={(element) => { fieldRefs.current.message = element; }}
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => handleChange("message", event.target.value)}
              placeholder="Tell us a little about your business or challenge"
              className={`${inputClassName(false)} resize-y`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-7 flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-5 py-4 text-center text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:cursor-wait disabled:opacity-80 focus-visible:outline-primary sm:text-lg"
        >
          {isSubmitting ? "Sending your request…" : "Submit & Book My Free Consultation"}
        </button>
        <p className="mt-4 text-center text-sm text-muted">Your details will only be used to respond to your consultation request.</p>
        {submissionSuccess && <p className="mt-3 text-center text-sm font-medium text-green-700" role="status">Your request has been sent. Taking you to the next step…</p>}
        {submissionError && <p className="mt-3 text-center text-sm font-medium text-red-600" role="alert">{submissionError}</p>}
      </form>
    </section>
  );
}

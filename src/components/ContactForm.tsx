"use client";

import { useState } from "react";

const SERVICES = ["Hair", "Nails", "Spa", "Blowout", "Color", "Other"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-[var(--off-white)] p-8 text-center text-[var(--charcoal)]">
        <p className="font-medium">Thank you. We will be in touch soon.</p>
      </div>
    );
  }

  const inputClass = "w-full rounded-lg border border-[var(--rose-panel-light)] bg-white px-4 py-3 text-[var(--charcoal)] focus:border-[var(--champagne)] focus:outline-none focus:ring-1 focus:ring-[var(--champagne)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" required className={inputClass} />
      <input type="email" name="email" placeholder="Email" required className={inputClass} />
      <input type="tel" name="phone" placeholder="Phone" className={inputClass} />
      <select name="service" className={inputClass}>
        <option value="">Select service</option>
        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <input type="text" name="datetime" placeholder="Preferred date / time" className={inputClass} />
      <textarea name="message" placeholder="Message" rows={3} className={inputClass} />
      <button type="submit" className="w-full rounded-md bg-[var(--champagne)] px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-[var(--champagne-light)]">
        Send
      </button>
    </form>
  );
}

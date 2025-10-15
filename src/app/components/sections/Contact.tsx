"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.includes("@")) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const v = validate();
    if (v) return setError(v);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to send");
      setSuccess("Message sent — thank you. I will reply soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: "2rem 0" }}>
      <div style={{ maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        <h2 className="text-2xl font-cinzel text-accent mb-2">Get in touch</h2>
        <p className="muted font-playfair">
          I respond to serious inquiries — drop a line and I&apos;ll reply.
        </p>

        <div className="mt-6">
          <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 320px' }}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className="p-3 rounded-md border bg-[rgba(255,255,255,0.02)] text-[var(--text)]"
            />
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="Your email"
              type="email"
              className="p-3 rounded-md border bg-[rgba(255,255,255,0.02)] text-[var(--text)]"
            />
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Message"
              rows={8}
              className="p-3 rounded-md border bg-[rgba(255,255,255,0.02)] text-[var(--text)]"
            />

            <div className="flex items-center gap-3">
              <button type="submit" disabled={loading} className="btn">
                {loading ? "Sending…" : "Send message"}
              </button>
              {success && <div className="text-accent">{success}</div>}
              {error && <div className="text-[var(--danger)]">{error}</div>}
            </div>
          </form>

          <aside className="section-pop p-4 rounded-md">
            <h3 className="font-playfair">Other ways to reach me</h3>
            <p className="muted font-playfair">
              Follow or message me on social media:
            </p>
            <div className="flex gap-4 mt-3 text-xl">
              <a
                href="https://twitter.com/buddsrijan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/rijan-buddhacharya-0032781a6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Rijan-Budds"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/rijan.batman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
            <hr
              style={{
                margin: "16px 0",
                borderColor: "rgba(255,255,255,0.02)",
              }}
            />
            <div>
              <div className="text-sm text-[var(--muted)]">
                Bhaktapur, Nepal
              </div>
            </div>
            <Image
              src="/rdr.gif"
              alt="contact"
              width={300}
              height={300}
              className="rounded-lg mt-4"
              unoptimized
            />
          </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

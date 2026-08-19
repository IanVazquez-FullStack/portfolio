"use client";

import { useState, FormEvent } from "react";

// Formspree free tier: create a form at https://formspree.io (sign up with
// the inbox you want submissions to land in), then paste the form ID it
// gives you below. Endpoint shape: https://formspree.io/f/{form_id}
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData): Errors {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const next: Errors = {};
    if (!name) next.name = "Tell me your name.";
    if (!email) next.email = "An email is needed so I can reply.";
    else if (!EMAIL_RE.test(email)) next.email = "That email doesn't look right.";
    if (!message) next.message = "Write a short message.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card form__success" role="status">
        <h3 className="card__title">Thanks — message sent.</h3>
        <p className="card__body">
          It landed in my inbox. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__field">
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          disabled={status === "submitting"}
        />
        {errors.name && <p className="form__error">{errors.name}</p>}
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          disabled={status === "submitting"}
        />
        {errors.email && <p className="form__error">{errors.email}</p>}
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form__input form__textarea"
          id="message"
          name="message"
          rows={5}
          disabled={status === "submitting"}
        />
        {errors.message && <p className="form__error">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="form__error form__error--general">
          Something went wrong sending that. Try again, or reach me directly
          on{" "}
          <a
            href="https://www.linkedin.com/in/ian-vazquez-full-stack-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        className="button button--primary"
        disabled={status === "submitting"}
        style={{ width: "100%" }}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

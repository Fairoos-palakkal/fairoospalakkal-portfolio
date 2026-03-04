import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const CONTACT_EMAIL = "fairoospalakkal35@gmail.com";

type FormErrors = {
  name: string | null;
  email: string | null;
  message: string | null;
};

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    email: null,
    message: null,
  });

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // validate form
  const validateForm = (): boolean => {
    const { name, email, message } = form;
    const newErrors: FormErrors = { name: null, email: null, message: null };
    let isValid = true;

    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim().toLowerCase())) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Backend-ready: Replace this URL with your actual API endpoint
      const API_URL = "/api/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Thanks for reaching out! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      // Fallback: open mailto link
      const subject = encodeURIComponent(
        `Portfolio Contact from ${form.name.trim()}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`,
      );
      window.open(
        `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
        "_blank",
      );
      toast.info("Opening your email client...");
      setForm({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Direct contact info */}
          <div className="mt-4 flex flex-col gap-1 text-secondary text-[14px]">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-white transition-colors"
              aria-label="Send email"
            >
              📧 {CONTACT_EMAIL}
            </a>
            <a
              href="tel:+971502824905"
              className="hover:text-white transition-colors"
              aria-label="Call phone number"
            >
              📱 +971 502824905
            </a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-8"
            noValidate
          >
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                title="What's your name?"
                disabled={loading}
                aria-disabled={loading}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />
              {errors.name && (
                <span className="text-red-400 mt-2 text-sm" id="name-error" role="alert">
                  {errors.name}
                </span>
              )}
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                title="What's your email?"
                disabled={loading}
                aria-disabled={loading}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60"
              />
              {errors.email && (
                <span className="text-red-400 mt-2 text-sm" id="email-error" role="alert">
                  {errors.email}
                </span>
              )}
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Message*
              </span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there!"
                title="What do you want to say?"
                disabled={loading}
                aria-disabled={loading}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium disabled:bg-tertiary/20 disabled:text-white/60 disabled:resize-none"
              />
              {errors.message && (
                <span className="text-red-400 mt-2 text-sm" id="message-error" role="alert">
                  {errors.message}
                </span>
              )}
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:bg-tertiary/20 disabled:text-white/60 hover:bg-tertiary/80 transition-colors"
              disabled={loading}
              aria-disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

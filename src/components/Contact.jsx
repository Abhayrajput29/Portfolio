import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { profile } from '../assets/data.js';
import Section from './Section.jsx';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [sending, setSending] = useState(false);

  const configured = Boolean(serviceId && templateId && publicKey);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!configured) {
      setStatus({
        type: 'error',
        message: 'Add your EmailJS keys in .env to activate the form.',
      });
      return;
    }

    setSending(true);
    setStatus({ type: 'idle', message: '' });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      formRef.current.reset();
      setStatus({ type: 'success', message: 'Message sent. I will get back to you soon.' });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again in a moment.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let us build something meaningful together.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Open to full stack, backend, AI, and blockchain-focused collaborations. Share your idea and I will respond
            with a practical plan.
          </p>
          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <FiMail />
              {profile.email}
            </a>
            <p className="contact-link">
              <FiMapPin />
              {profile.location}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-small">
                <FiGithub />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-small">
                <FiLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="glass-panel grid gap-5 p-6">
          <label className="form-field">
            <span>Name</span>
            <input name="from_name" type="text" placeholder="Your name" required />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input name="from_email" type="email" placeholder="you@example.com" required />
          </label>
          <label className="form-field">
            <span>Message</span>
            <textarea name="message" rows="6" placeholder="Tell me what you want to build" required />
          </label>
          <button type="submit" className="btn-primary w-full justify-center sm:w-auto" disabled={sending}>
            <FiSend />
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {status.message && (
            <p
              className={`text-sm font-semibold ${
                status.type === 'success' ? 'text-emerald-500' : 'text-coral'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

export default Contact;

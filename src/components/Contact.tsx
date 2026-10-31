import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/socialLinks';
import { useToast } from './Toast';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'fallback' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a message subject (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message of at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    showToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setStatusMessage('');

    // If Formspree endpoint is configured via environment variable
    if (formspreeEndpoint && formspreeEndpoint.startsWith('https://')) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmissionStatus('success');
          setStatusMessage('Thank you! Your message was sent successfully. I will get back to you shortly.');
          showToast('Message sent successfully!', 'success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Service returned an error status.');
        }
      } catch (err) {
        console.warn('Formspree submission failed, initiating email fallback:', err);
        triggerMailtoFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Reliable Mailto Fallback with clear user feedback
      setTimeout(() => {
        triggerMailtoFallback();
        setIsSubmitting(false);
      }, 500);
    }
  };

  const triggerMailtoFallback = () => {
    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Hello Sumeya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via your portfolio website.`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setSubmissionStatus('fallback');
    setStatusMessage(
      `Opening your default email application to deliver this message directly to ${personalInfo.email}. If your mail app did not open, you can also email me directly.`
    );
    showToast('Launching email application...', 'info');

    // Trigger mailto client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            Have an internship opening, freelance opportunity, or technical inquiry? Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl glass-card space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to connect through any channel. I typically respond within 24 hours.
              </p>

              {/* Email Card */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 group">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-white rounded-lg transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Telephone</h4>
                    <a
                      href={`tel:${personalInfo.phoneRaw}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Chat Channels */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-white/10">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Instant Messaging</h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://t.me/Sumey_a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-[#229ED9]/10 hover:border-[#229ED9]/40 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs font-semibold transition-all group"
                  >
                    <Send className="w-4 h-4 text-[#229ED9]" />
                    <span>Telegram</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 ml-auto group-hover:text-[#229ED9]" />
                  </a>

                  <a
                    href="https://wa.me/251980348942"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-xs font-semibold transition-all group"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 ml-auto group-hover:text-[#25D366]" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                Send Me a Direct Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below. This form integrates with Formspree or opens seamlessly in your default email client.
              </p>

              {/* Status Banner */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-sm flex items-start gap-3 ${
                    submissionStatus === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                      : submissionStatus === 'fallback'
                      ? 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-800 dark:text-indigo-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300'
                  }`}
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-white/10'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-white/10'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Frontend Internship Opportunity / Project Collaboration"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                      errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-white/10'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5 uppercase">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, team, or opportunity..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-y ${
                      errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-white/10'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Formspree .env Note */}
                <p className="text-[11px] text-slate-400 font-mono text-center">
                  * Live submissions connect to Formspree endpoint or trigger direct mail client fallback.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

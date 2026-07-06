import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquareCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all fields.');
      setFormStatus('error');
      return;
    }

    // Email Pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');

    // Simulate successful form submission
    setTimeout(() => {
      setFormStatus('success');
      // Save to localStorage so that they can see messages persist locally!
      try {
        const existingMessages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        existingMessages.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('portfolio_messages', JSON.stringify(existingMessages));
      } catch (err) {
        console.warn('Storage disabled or unavailable:', err);
      }
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div id="contact-heading" className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 dark:text-white">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 font-light mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Have an exciting hardware challenge, a project proposal, or a general query? Drop a line here.
          </p>
        </div>

        <div id="contact-content-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Parameters & Map (5 cols) */}
          <div id="contact-meta-col" className="lg:col-span-5 space-y-8">
            <div id="contact-info-cards" className="space-y-6">
              {[
                {
                  id: 'email',
                  icon: <Mail size={22} className="text-emerald-500" />,
                  title: 'Email Address',
                  value: PERSONAL_INFO.email,
                  href: PERSONAL_INFO.socials.email,
                },
                {
                  id: 'phone',
                  icon: <Phone size={22} className="text-emerald-500" />,
                  title: 'Phone & Mobile',
                  value: PERSONAL_INFO.phone,
                },
                {
                  id: 'location',
                  icon: <MapPin size={22} className="text-emerald-500" />,
                  title: 'Primary Location',
                  value: PERSONAL_INFO.location,
                },
              ].map((item) => (
                <div
                  key={item.id}
                  id={`contact-card-${item.id}`}
                  className="flex items-start gap-5 p-6 rounded-2xl glass-effect border border-gray-100 dark:border-gray-800/40 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/40">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-display text-base text-gray-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors block mt-1 truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-display text-base text-gray-800 dark:text-gray-200 mt-1 truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded styled Google Maps (Mock representation) */}
            <div
              id="google-maps-frame"
              className="rounded-3xl overflow-hidden aspect-video border border-gray-100 dark:border-gray-800/40 shadow-xl relative group bg-neutral-900/10 dark:bg-neutral-900/60"
            >
              {/* Actual Google Maps Embedded IFrame for outstanding realism */}
              <iframe
                title="Google Maps Mahayag Zamboanga del Sur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d123.4383!3d8.1297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325567890abcdef%3A0x1234567890abcdef!2sMahayag%2C%20Zamboanga%20del%20Sur%2C%20Philippines!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column: Contact form (7 cols) */}
          <motion.div
            id="contact-form-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-effect border border-gray-100 dark:border-gray-800/40 relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <MessageSquareCode size={22} />
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">
                Send a Message
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  id="contact-success-state"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <CheckCircle2 size={48} className="text-emerald-500 animate-bounce" />
                  <h4 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 font-light text-sm max-w-sm">
                    Thank you, your message has been logged. I will review your inquiry and respond to your email shortly.
                  </p>
                  <button
                    id="success-dismiss-btn"
                    onClick={() => setFormStatus('idle')}
                    className="mt-4 px-5 py-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium text-xs hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div id="form-group-name" className="space-y-2">
                      <label htmlFor="fullName" className="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider font-mono">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        disabled={formStatus === 'submitting'}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-neutral-900 text-sm focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-0 outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div id="form-group-email" className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider font-mono">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        disabled={formStatus === 'submitting'}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-neutral-900 text-sm focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div id="form-group-subject" className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration Opportunity"
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-neutral-900 text-sm focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-0 outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div id="form-group-message" className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider font-mono">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Type your message details here..."
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-neutral-900 text-sm focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-0 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification Alert */}
                  {formStatus === 'error' && (
                    <motion.div
                      id="form-error-alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20 text-xs flex items-center gap-2.5"
                    >
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 focus:outline-none transition-all duration-300 shadow-lg shadow-emerald-500/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

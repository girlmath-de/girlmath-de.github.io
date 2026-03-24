import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isNotBot: false
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isNotBot) {
      alert("Please confirm you are not a bot.");
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    // In a real static site, you'd use Formspree or a similar service
    // e.g., fetch('https://formspree.io/f/your-id', { method: 'POST', body: JSON.stringify(formData) })
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', isNotBot: false });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-extrabold text-primary mb-8 leading-[0.9] tracking-tighter">
            Let's Talk Math.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-md mb-12">
            Have questions about your closet value? Need help justifying that third latte? We're here for you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                <Send size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <a href="mailto:contactgirlmath@gmail.com" className="text-primary hover:underline font-medium">
                  contactgirlmath@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                <AlertCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Support</h4>
                <p className="text-gray-500">Available Mon-Fri, 9am - 5pm EST</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl border border-gray-100"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-500 mb-8">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-bg border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full bg-bg border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="How can we help?"
                    className="w-full bg-bg border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us everything..."
                    className="w-full bg-bg border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-bg rounded-2xl border border-gray-100">
                  <input
                    type="checkbox"
                    id="bot-check"
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                    checked={formData.isNotBot}
                    onChange={e => setFormData({ ...formData, isNotBot: e.target.checked })}
                  />
                  <label htmlFor="bot-check" className="text-sm font-bold text-gray-600 cursor-pointer select-none">
                    I am not a bot
                  </label>
                </div>

                <button
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-extrabold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

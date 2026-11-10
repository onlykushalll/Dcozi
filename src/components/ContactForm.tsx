// Proprietary source — see LICENSE.md for terms.

import React, { useEffect, useState } from 'react';
import { COMPANY } from '../lib/constants';
import { Send, Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  selectedProduct?: string;
  selectionSeq?: number;
}

export default function ContactForm({ selectedProduct, selectionSeq }: ContactFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setInquiryType(selectedProduct);
      setSubmitted(false);
    }
  }, [selectedProduct, selectionSeq]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setInquiryType('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section className="py-24 px-6 industrial-gradient">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's Discuss Your <span className="text-brand-gold">Infrastructure</span></h2>
          <p className="text-gray-800 mb-12 text-lg">Our experts are ready to help you plan your space and digital presence with tailor-made solutions.</p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Corporate Headquarters</h4>
                <p className="text-slate-800 text-sm leading-relaxed">{COMPANY.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Direct Line</h4>
                <p className="text-slate-800 text-sm">{COMPANY.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Electronic Mail</h4>
                <p className="text-slate-800 text-sm">{COMPANY.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden group backdrop-blur-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[80px] group-hover:bg-brand-gold/10 transition-all duration-500" />

          {submitted ? (
            <div className="relative z-10 py-12 text-center space-y-6">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Inquiry Recorded</h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Your brief for{' '}
                  <span className="font-semibold text-slate-900">{inquiryType || 'Custom Solutions'}</span> is ready.
                  For immediate coordination, reach <span className="font-mono text-xs">{COMPANY.email}</span> or{' '}
                  <span className="font-mono text-xs">{COMPANY.phone}</span>.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-gold transition-colors cursor-pointer"
              >
                New Inquiry
              </button>
            </div>
          ) : (
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 ml-1">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enterprise Lead"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-gold focus:outline-none transition-all placeholder:text-slate-500 text-sm text-slate-900"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="contact-email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 ml-1">Business Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-gold focus:outline-none transition-all placeholder:text-slate-500 text-sm text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="contact-product" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 ml-1">Inquiry Type</label>
                <select
                  id="contact-product"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-gold focus:outline-none transition-all appearance-none text-slate-800 text-sm"
                >
                  <option value="">Select Product</option>
                  <option value="Digital Standee">Digital Standee</option>
                  <option value="Digital Podium">Digital Podium</option>
                  <option value="Steel Locker (Multi-Door)">Steel Locker (Multi-Door)</option>
                  <option value="Digital Mobile Locker">Digital Mobile Locker</option>
                  <option value="Digital Signage Display">Digital Signage Display</option>
                  <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="contact-message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 ml-1">Professional Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your requirements..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-gold focus:outline-none transition-all placeholder:text-slate-500 resize-none text-sm text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-brand-gold text-black font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all group active:scale-[0.98] text-[12px] uppercase tracking-widest shadow-xl shadow-brand-gold/20 cursor-pointer"
              >
                Submit Inquiry
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[9px] text-center text-gray-600 uppercase tracking-[0.3em] pt-4">© {COMPANY.name} • Industrial Futures</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

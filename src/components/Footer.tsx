// Proprietary source — see LICENSE.md for terms.

import React, { useState } from 'react';
import { COMPANY, PRODUCTS } from '../lib/constants';
import { scrollToElement } from '../lib/scroll';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', target: '#home' },
  { label: 'Company Profile', target: '#certified' },
  { label: 'Products', target: '#products' },
  { label: 'Inquiry', target: '#contact' },
  { label: 'Contact', target: '#contact' },
];

const SOCIAL_LINKS = [
  { name: 'Facebook', Icon: Facebook },
  { name: 'Twitter', Icon: Twitter },
  { name: 'LinkedIn', Icon: Linkedin },
  { name: 'Instagram', Icon: Instagram },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeNotice, setActiveNotice] = useState<'privacy' | 'terms' | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter text-brand-gold uppercase">DCOZI</h2>
            <p className="text-slate-800 text-sm leading-relaxed max-w-xs transition-colors">
              {COMPANY.tagline}. Precision manufacturing from {COMPANY.location}.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ name, Icon }) => (
                <button
                  key={name}
                  type="button"
                  aria-label={`${COMPANY.name} ${name}`}
                  onClick={() => scrollToElement('#contact')}
                  className="p-2 bg-white border border-slate-200 rounded-lg hover:border-brand-gold transition-all shadow-sm cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-slate-400 hover:text-brand-gold transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-slate-700 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-800">
              {NAV_ITEMS.map(({ label, target }) => (
                <li key={label}>
                  <a
                    href={target}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement(target);
                    }}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-slate-700 mb-8">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-800">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href={`#${product.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement(`#${product.id}`);
                    }}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-slate-700 mb-8">Newsletter</h4>
            <p className="text-xs text-slate-800 mb-6 font-mono leading-relaxed">Join our mailing list for industry insights and new product launches.</p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex border border-slate-200 bg-white p-1 rounded-xl shadow-sm"
            >
              <input
                type="email"
                required
                aria-label="Corporate email for newsletter"
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  if (subscribed) setSubscribed(false);
                }}
                placeholder="Enter corporate email"
                className="bg-transparent px-4 py-2 text-xs flex-grow min-w-0 focus:outline-none text-slate-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand-gold text-white text-xs font-bold rounded-lg hover:bg-black transition-colors shrink-0 cursor-pointer"
              >
                Join
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] font-mono text-brand-gold mt-2">
                Subscription preference noted for product dispatches.
              </p>
            )}
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[10px] font-mono text-slate-700 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {COMPANY.name}</p>
            <p>GST: {COMPANY.gst}</p>
            <p>Made in India</p>
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-slate-700 uppercase tracking-widest">
            <button
              type="button"
              onClick={() => setActiveNotice((prev) => (prev === 'privacy' ? null : 'privacy'))}
              className="hover:text-slate-900 transition-colors uppercase cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveNotice((prev) => (prev === 'terms' ? null : 'terms'))}
              className="hover:text-slate-900 transition-colors uppercase cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {activeNotice && (
          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between gap-4">
            <span>
              {activeNotice === 'privacy'
                ? 'Privacy Notice: Form submissions remain local within your browser session unless connected to a production endpoint.'
                : 'Terms Notice: All product imagery, specifications, and software code are proprietary evaluation assets — see LICENSE.md.'}
            </span>
            <button
              type="button"
              onClick={() => setActiveNotice(null)}
              className="text-[10px] font-mono uppercase tracking-widest text-slate-900 hover:text-brand-gold shrink-0 cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}

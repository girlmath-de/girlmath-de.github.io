import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, BarChart3, AlertCircle, User, Shield, Link as LinkIcon } from 'lucide-react';

const termsHighlights = [
  {
    icon: <CheckCircle />,
    title: 'Acceptance',
    desc: 'By using Girl Math, you agree to these terms.'
  },
  {
    icon: <BarChart3 />,
    title: 'Purpose',
    desc: 'The app helps users reflect on spending behavior through user input and usage patterns.'
  },
  {
    icon: <AlertCircle />,
    title: 'Not Financial Advice',
    desc: 'Girl Math is for informational and self-reflection purposes only.'
  },
  {
    icon: <User />,
    title: 'User Responsibilities',
    desc: 'You agree to provide accurate information, use the app responsibly, and not misuse the service.'
  },
  {
    icon: <LinkIcon />,
    title: 'Recommendations',
    desc: 'The app may display product recommendations and may include affiliate links.'
  },
  {
    icon: <Shield />,
    title: 'Account Security',
    desc: 'If you create an account, you are responsible for maintaining its security.'
  }
];

const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60 mb-4">Terms of Use</p>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary mb-8 leading-tight">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Last updated: March 24, 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {termsHighlights.map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">1. Acceptance</h2>
            <p>By using Girl Math, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">2. Purpose of the App</h2>
            <p>Girl Math is designed to help users reflect on their spending behavior.</p>
            <p>It provides insights based on user input and usage patterns.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">3. Not Financial Advice</h2>
            <p>Girl Math is for informational and self-reflection purposes only.</p>
            <p>It does not provide financial, investment, or professional advice.</p>
            <p>You are responsible for your financial decisions.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>provide accurate information</li>
              <li>use the app responsibly</li>
              <li>not misuse or exploit the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">5. Account</h2>
            <p>If you create an account:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>you are responsible for maintaining its security</li>
              <li>you are responsible for activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">6. Recommendations</h2>
            <p>The app may display product recommendations.</p>
            <p>We may earn a commission from purchases made through affiliate links.</p>
            <p>This does not affect how recommendations are generated.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">7. Limitation of Liability</h2>
            <p>The app is provided &ldquo;as is&rdquo;.</p>
            <p>We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>financial decisions made using the app</li>
              <li>losses or damages arising from usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">8. Termination</h2>
            <p>We may suspend or terminate access if terms are violated.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">9. Changes to Terms</h2>
            <p>We may update these terms at any time.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">10. Contact</h2>
            <p>
              For questions, contact:{' '}
              <a href="mailto:contactgirlmath@gmail.com" className="text-primary hover:underline">
                contactgirlmath@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

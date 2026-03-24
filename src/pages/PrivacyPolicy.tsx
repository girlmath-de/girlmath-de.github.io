import React from 'react';
import { motion } from 'motion/react';
import { Shield, Database, UserCheck, EyeOff, Lock, BarChart3 } from 'lucide-react';

const privacyHighlights = [
  {
    icon: <Database />,
    title: 'Local-First',
    desc: 'Your personal spending data is stored on your device and is not uploaded to our servers by default.'
  },
  {
    icon: <UserCheck />,
    title: 'Minimal Collection',
    desc: 'We aim to minimize data collection and only process what is necessary to provide the app.'
  },
  {
    icon: <BarChart3 />,
    title: 'Optional Analytics',
    desc: 'Analytics are collected only if you explicitly consent, and you can disable them at any time.'
  },
  {
    icon: <EyeOff />,
    title: 'No Ad Tracking',
    desc: 'We do not track you across other apps or websites and do not use third-party advertising tracking.'
  },
  {
    icon: <Lock />,
    title: 'User Control',
    desc: 'Local data remains under your control, and you can use the app without sharing optional analytics data.'
  },
  {
    icon: <Shield />,
    title: 'Limited Sharing',
    desc: 'We do not sell your data and only share data with service providers when necessary to operate the app.'
  }
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60 mb-4">Privacy Policy</p>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary mb-8 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Last updated: March 24, 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {privacyHighlights.map((item, i) => (
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
            <h2 className="text-3xl font-display font-bold text-primary mb-6">1. Overview</h2>
            <p>
              Girl Math is designed to help you understand your spending behavior while respecting your privacy.
            </p>
            <p>
              Girl Math is a local-first application. Your personal spending data is stored on your device and is not uploaded to our servers by default.
            </p>
            <p>
              We aim to minimize data collection and only process what is necessary to provide the app&apos;s functionality.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">2. Data We Collect</h2>
            <p><strong>a) Local Data (stored on your device)</strong></p>
            <p>This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>purchase records</li>
              <li>usage logs (e.g. when you mark an item as used)</li>
              <li>behavioral insights and analytics</li>
              <li>survey responses</li>
            </ul>
            <p>This data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>remains on your device</li>
              <li>is not accessible to us</li>
              <li>is not transmitted unless explicitly stated</li>
            </ul>
            <p><strong>b) Account Data</strong></p>
            <p>If you create an account, we collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>your email address</li>
              <li>authentication-related data</li>
            </ul>
            <p>This is used only for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>login</li>
              <li>account recovery</li>
              <li>secure access</li>
            </ul>
            <p><strong>c) Analytics and Usage Data (Optional)</strong></p>
            <p>We may collect limited usage data only if you explicitly consent.</p>
            <p>This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>app usage events (e.g. screens viewed, features used)</li>
              <li>interaction events (e.g. purchases logged, insights viewed)</li>
              <li>aggregated behavioral summaries (e.g. category preferences, usage patterns)</li>
            </ul>
            <p>Important:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>we do not collect item names, notes, or detailed purchase content</li>
              <li>we do not collect salary information</li>
              <li>data is coarsened, aggregated, or anonymized where possible</li>
            </ul>
            <p>You can disable analytics at any time.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">3. How We Use Data</h2>
            <p>We use data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>provide app functionality</li>
              <li>generate insights about spending behavior</li>
              <li>improve the app (only with consented analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">4. Local Data Storage</h2>
            <p>Girl Math is built as a local-first app.</p>
            <p>Your purchases, habits, and insights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>are stored on your device</li>
              <li>are not uploaded to our servers by default</li>
              <li>remain under your control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">5. Your Consent</h2>
            <p>We only collect optional analytics data if you explicitly opt in.</p>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>enable or disable analytics anytime</li>
              <li>use the app fully without sharing any data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">6. Third-Party Services</h2>
            <p>We use trusted third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Supabase (authentication and backend infrastructure)</li>
            </ul>
            <p>These services only process minimal data required for their functionality.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">7. Tracking</h2>
            <p>Girl Math:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>does not track you across other apps or websites</li>
              <li>does not use third-party advertising tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">8. Data Sharing</h2>
            <p>We do not sell your data.</p>
            <p>We do not share personal data with advertisers.</p>
            <p>Data is only shared with service providers when necessary to operate the app.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">9. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account data is retained until you delete your account</li>
              <li>Analytics data is retained in aggregated or anonymized form</li>
              <li>Local data remains on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">10. Account and Data Deletion</h2>
            <p>You can delete your account at any time from within the app.</p>
            <p>When you delete your account:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>your account data is permanently removed</li>
              <li>associated analytics data is deleted or anonymized</li>
            </ul>
            <p>Data stored locally on your device remains unless you uninstall the app.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">11. Data Security</h2>
            <p>
              We take reasonable measures to protect your data.
            </p>
            <p>
              Sensitive personal data is stored locally on your device, and account-related data is handled securely by our infrastructure providers.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">12. Changes to This Policy</h2>
            <p>We may update this policy from time to time.</p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">13. Contact</h2>
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

export default PrivacyPolicy;

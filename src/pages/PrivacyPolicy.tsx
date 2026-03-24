import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, EyeOff, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary mb-8 leading-tight">
            Your data is yours. Period.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Privacy isn't a feature—it's the foundation of everything we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { icon: <Lock />, title: "The On-Device Principle", desc: "All your data is stored locally on your device. We don't have access to it, and we don't want it." },
            { icon: <Database />, title: "No Cloud Storage", desc: "We don't maintain central servers for your personal data. Your secrets are safe with you." },
            { icon: <EyeOff />, title: "No Selling Data", desc: "We are not in the business of selling your information. Your habits are your own." },
            { icon: <UserCheck />, title: "Anonymous Analytics", desc: "We only collect minimal, anonymous usage data to improve the app. No PII involved." },
            { icon: <Shield />, title: "Data Policy", desc: "Clear, transparent rules about how we handle the minimal data we do see." }
          ].map((item, i) => (
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
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Introduction</h2>
            <p>
              Girl Math ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and related services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Information We Collect</h2>
            <p>
              <strong>Personal Data:</strong> We do not collect personally identifiable information (PII) such as your name, email address, or phone number unless you explicitly provide it to us (e.g., through a support request).
            </p>
            <p>
              <strong>Usage Data:</strong> We may collect anonymous information about how you interact with the app, such as features used and time spent, to help us improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">How Your Data is Stored</h2>
            <p>
              All financial data, purchase history, and digital investment information you enter into Girl Math is stored locally on your device. We do not upload this data to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Third-Party Services</h2>
            <p>
              We may use third-party analytics tools (like Firebase Analytics) that collect anonymous data. These services have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Your Rights</h2>
            <p>
              Since your data is stored locally, you have full control over it. You can delete your data at any time by clearing the app's cache or uninstalling the application.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

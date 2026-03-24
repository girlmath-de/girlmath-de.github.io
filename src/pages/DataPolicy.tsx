import React from 'react';
import { motion } from 'motion/react';
import { Database, ShieldCheck, UserCheck, Lock, EyeOff, Globe } from 'lucide-react';

const DataPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary mb-8 leading-tight">
            Your purchases, your habits, your insights—all private by default.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            We built Girl Math with a local-first architecture. Your data is yours, and we've designed it to stay that way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { icon: <Database />, title: "Local-First Architecture", desc: "All your data is stored on your device. We don't have access to it, and we don't want it." },
            { icon: <ShieldCheck />, title: "No Tracking", desc: "We don't track your location, your browsing history, or your other apps. Your privacy is our priority." },
            { icon: <UserCheck />, title: "Ownership", desc: "You own your data. You can export it, delete it, or clear it at any time. No strings attached." },
            { icon: <Lock />, title: "Security Measures", desc: "We use industry-standard encryption to protect your data on your device." },
            { icon: <EyeOff />, title: "No Selling Data", desc: "We don't sell your data to third parties. We don't even have access to it." },
            { icon: <Globe />, title: "Third-Party Integration", desc: "We only integrate with trusted third-party services that share our commitment to privacy." }
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
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Data Collection</h2>
            <p>
              We collect minimal, anonymous data to help us improve the app. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>App performance data (e.g., crash reports)</li>
              <li>Anonymous usage statistics (e.g., features used)</li>
              <li>Device information (e.g., OS version, device model)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Data Storage</h2>
            <p>
              All personal data, including your purchase history, digital investments, and spending habits, is stored locally on your device. We do not maintain central servers for this information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Data Security</h2>
            <p>
              We use industry-standard encryption to protect your data on your device. However, no method of storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Data Sharing</h2>
            <p>
              We do not share your personal data with third parties unless required by law. Anonymous usage data may be shared with trusted analytics partners.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Your Choices</h2>
            <p>
              You can choose not to provide certain information, but this may limit your ability to use some features of the app. You can delete your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Contact Us</h2>
            <p>
              If you have any questions about our Data Policy, please contact us at <a href="mailto:contactgirlmath@gmail.com" className="text-primary hover:underline">contactgirlmath@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataPolicy;

import React from 'react';
import { motion } from 'motion/react';
import { Database, BarChart3, Minimize2, Server, ShieldCheck, UserCheck } from 'lucide-react';

const dataHighlights = [
  {
    icon: <Database />,
    title: 'Local Data',
    desc: 'Purchase records, usage logs, behavioral insights, and survey responses remain on-device.'
  },
  {
    icon: <UserCheck />,
    title: 'Account Data',
    desc: 'If you create an account, we process only the minimal account information required for access.'
  },
  {
    icon: <BarChart3 />,
    title: 'Optional Analytics',
    desc: 'Analytics data is limited, consent-based, and designed to stay aggregated where possible.'
  },
  {
    icon: <Minimize2 />,
    title: 'Data Minimization',
    desc: 'We intentionally avoid unnecessary personal identifiers, detailed personal content, and external tracking data.'
  },
  {
    icon: <Server />,
    title: 'Limited Providers',
    desc: 'Third-party services are used only for authentication and infrastructure.'
  },
  {
    icon: <ShieldCheck />,
    title: 'User Control',
    desc: 'You can control local data in the app, disable analytics, and delete your account.'
  }
];

const DataPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60 mb-4">Data Policy</p>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary mb-8 leading-tight">
            Data Policy
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Last updated: March 24, 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {dataHighlights.map((item, i) => (
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
            <h2 className="text-3xl font-display font-bold text-primary mb-6">1. Types of Data</h2>
            <p><strong>Local Data (on-device)</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>purchase records</li>
              <li>usage logs</li>
              <li>behavioral insights</li>
              <li>survey responses</li>
            </ul>
            <p><strong>Account Data</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>email address</li>
            </ul>
            <p><strong>Optional Analytics Data</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>app interaction events</li>
              <li>aggregated behavioral summaries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">2. Data Processing</h2>
            <p>We process data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>enable app functionality</li>
              <li>generate insights for users</li>
              <li>improve the app (only with consented analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">3. Data Minimization</h2>
            <p>We collect only what is necessary.</p>
            <p>We intentionally avoid:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>unnecessary personal identifiers</li>
              <li>detailed personal content beyond app functionality</li>
              <li>external tracking data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">4. Data Storage</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>local data remains on your device</li>
              <li>account data is stored securely by our backend provider</li>
              <li>analytics data is aggregated and minimized</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">5. Data Sharing</h2>
            <p>We do not sell or rent your data.</p>
            <p>We only use third-party services for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>authentication</li>
              <li>infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">6. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>account data: until deletion</li>
              <li>analytics data: aggregated form</li>
              <li>local data: controlled by user</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">7. User Control</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>delete your account</li>
              <li>disable analytics</li>
              <li>control your data within the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">8. Security</h2>
            <p>We use appropriate technical measures to protect data.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataPolicy;

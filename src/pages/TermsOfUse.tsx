import React from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle, AlertCircle, User, Shield, Info } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary mb-8 leading-tight">
            The Rules of Engagement.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            By using Girl Math, you agree to these terms. Please read them carefully.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { icon: <CheckCircle />, title: "Acceptance of Terms", desc: "By using Girl Math, you agree to these terms and conditions. If you don't agree, please don't use the app." },
            { icon: <User />, title: "User Responsibilities", desc: "You are responsible for the data you enter into the app. We don't have access to it, so we can't help you recover it." },
            { icon: <AlertCircle />, title: "Limitation of Liability", desc: "We are not liable for any financial decisions you make based on the information provided in the app." },
            { icon: <Shield />, title: "Data Ownership", desc: "You own your data. We don't have access to it, and we don't want it. Your secrets are safe with you." },
            { icon: <FileText />, title: "Intellectual Property", desc: "Girl Math and its content are protected by intellectual property laws. You may not use them without our permission." },
            { icon: <Info />, title: "Changes to Terms", desc: "We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page." }
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
            <h2 className="text-3xl font-display font-bold text-primary mb-6">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Girl Math mobile application (the "App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to all of these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">2. Use of the App</h2>
            <p>
              You may use the App for your personal, non-commercial use only. You are responsible for maintaining the confidentiality of your device and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">3. User Content</h2>
            <p>
              You are solely responsible for the content you enter into the App. We do not have access to your data, and we do not monitor or control the content you create.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">4. Intellectual Property</h2>
            <p>
              The App and its original content, features, and functionality are owned by Girl Math and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">5. Limitation of Liability</h2>
            <p>
              In no event shall Girl Math, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Girl Math operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:contactgirlmath@gmail.com" className="text-primary hover:underline">contactgirlmath@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

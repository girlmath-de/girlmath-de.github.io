import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Zap, ShieldCheck, BarChart3, Lightbulb, Eye, Lock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/30 text-accent px-4 py-2 rounded-full font-bold text-sm mb-8 border border-secondary/50">
            <Sparkles size={16} />
            <span>The Philosophy</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold text-primary mb-8 leading-[0.9] tracking-tighter">
            About Girl Math
          </h1>
        </motion.div>

        {/* The Origin */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl">💅</span>
            <h2 className="text-3xl font-display font-extrabold text-primary">The Origin</h2>
          </div>
          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-primary/5">
            <p className="text-2xl font-display font-bold text-gray-800 mb-8 leading-relaxed">
              Girl Math started as a joke.
            </p>
            <div className="space-y-6 italic text-xl text-gray-500 border-l-4 border-secondary pl-8">
              <p>“If it’s under €10, it’s basically free.”</p>
              <p>“If I wear it 30 times, it’s an investment.”</p>
              <p>“If I return something, I’ve made money.”</p>
            </div>
            <p className="mt-8 text-lg text-gray-600">
              We’ve all said it. We’ve all believed it — at least a little.
            </p>
          </div>
        </motion.section>

        {/* The Insight */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-3xl text-primary mb-8">
            <Zap size={40} />
          </div>
          <h2 className="text-4xl font-display font-extrabold text-primary mb-8">The Insight</h2>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            But behind the joke is something real: We don’t actually make irrational decisions — we just use simplified logic to justify them.
          </p>
          <p className="mt-8 text-3xl font-display font-extrabold text-accent">
            Girl Math is that logic, made visible.
          </p>
        </motion.section>

        {/* What Girl Math Really Is */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl">📊</span>
            <h2 className="text-3xl font-display font-extrabold text-primary">What Girl Math Really Is</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "How often you actually use something",
              "Whether it lived up to your expectations",
              "Which purchases felt worth it — and which didn’t"
            ].map((text, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="font-bold text-gray-800">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl font-display font-bold text-center text-primary">
            It turns everyday spending into something you can actually understand.
          </p>
        </motion.section>

        {/* The Reality Behind the Joke */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 bg-primary text-white p-12 rounded-[56px] relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="text-secondary" size={32} />
              <h2 className="text-3xl font-display font-extrabold">The Reality Behind the Joke</h2>
            </div>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Every purchase has a lifecycle: You expect to use it a certain number of times. Its value changes with each use. Over time, it either becomes “worth it”… or it doesn’t.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Depreciation", "Utility", "Cost per use", "Behavioral patterns"].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center font-bold text-sm">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-12 text-xl font-bold text-secondary">
              Girl Math simply brings those ideas into everyday life — in a way that actually feels natural.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.section>

        {/* What You Start to See */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <Eye className="text-primary" size={32} />
            <h2 className="text-3xl font-display font-extrabold text-primary">What You Start to See</h2>
          </div>
          <div className="space-y-6">
            {[
              "You realize what you actually use",
              "You notice patterns you didn’t see before",
              "You understand your habits without judging them",
              "You track your digital investments: clothes, skincare, gadgets, and more"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <p className="text-lg font-bold text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-10 bg-secondary/20 rounded-[40px] border border-secondary/30">
            <p className="text-xl text-accent font-bold italic text-center">
              "You realize that the things you thought were 'bad decisions' actually made more sense than you expected."
            </p>
          </div>
        </motion.section>

        {/* What This Is (and What It Isn’t) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-10 bg-white rounded-[40px] border border-gray-100">
            <h3 className="text-2xl font-display font-extrabold text-gray-400 mb-6 uppercase tracking-widest text-sm">Girl Math is not:</h3>
            <ul className="space-y-4 text-lg font-bold text-gray-400 line-through">
              <li>A budgeting app</li>
              <li>A guilt tool</li>
              <li>A way to stop you from spending</li>
            </ul>
          </div>
          <div className="p-10 bg-primary text-white rounded-[40px] shadow-xl shadow-primary/20">
            <h3 className="text-2xl font-display font-extrabold text-secondary mb-6 uppercase tracking-widest text-sm">Girl Math is:</h3>
            <p className="text-2xl font-display font-bold leading-tight">
              A way to understand your spending — without overcomplicating it.
            </p>
          </div>
        </motion.section>

        {/* Built for Real Life */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl text-accent mb-8">
            <Lock size={32} />
          </div>
          <h2 className="text-3xl font-display font-extrabold text-primary mb-8">Built for Real Life</h2>
          <p className="text-lg text-gray-500 mb-12">Your purchases, your habits, your insights — they’re personal.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Local-first", "Privacy-friendly", "Yours, not ours"].map((tag, i) => (
              <span key={i} className="px-6 py-3 bg-white rounded-full border border-gray-100 font-bold text-primary shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* The Goal */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-white p-16 rounded-[64px] border border-gray-100 shadow-2xl shadow-primary/5"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-3xl text-accent mb-8">
            <Heart size={40} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-8">The Goal</h2>
          <div className="space-y-4 mb-12">
            <p className="text-xl text-gray-400 line-through">Not to spend less.</p>
            <p className="text-xl text-gray-400 line-through">Not to be perfect.</p>
          </div>
          <p className="text-3xl md:text-5xl font-display font-extrabold text-accent leading-tight">
            Just to spend in a way that actually feels worth it.
          </p>
          <div className="mt-16">
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-12 py-6 rounded-3xl font-extrabold text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/30"
            >
              Get Started Now
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;

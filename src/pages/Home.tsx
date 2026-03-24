import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Zap, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/30 text-accent px-4 py-2 rounded-full font-bold text-sm mb-8 border border-secondary/50">
            <Sparkles size={16} />
            <span>Smart tools for your main character era</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold text-primary leading-[0.9] mb-8 tracking-tighter">
            Understand what's actually worth your money.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-lg">
            Your investments, reimagined. Nobody needs to know about the third latte.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-extrabold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 group"
            >
              Start understanding your spending
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-accent">
                  <Gem size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">New Investment</h3>
                  <p className="text-sm text-gray-400">Just now</p>
                </div>
              </div>
              <span className="font-display font-extrabold text-primary text-xl">$450.00</span>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-500">
                <span>Cost Per Wear</span>
                <span className="text-primary">$4.50 / day</span>
              </div>
            </div>

            <div className="bg-secondary/20 p-6 rounded-3xl border border-secondary/30">
              <p className="text-accent font-bold text-center leading-relaxed italic">
                "If you wear it 100 times, it's basically free."
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="mt-40 bg-white py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-8 leading-tight">
              You don't need to spend less. You just need to spend better.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-12">
              Girl Math is more than a trend—it's a philosophy. We believe in high-value investments, conscious consumption, and the absolute necessity of that daily treat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Zap size={24} />, title: "Instant Justification", desc: "Calculate cost-per-wear in seconds." },
                { icon: <Heart size={24} />, title: "Guilt-Free Treats", desc: "Because you deserve it, obviously." },
                { icon: <Sparkles size={24} />, title: "Main Character Energy", desc: "Own your finances with confidence." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-bg rounded-3xl border border-gray-100 text-left">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

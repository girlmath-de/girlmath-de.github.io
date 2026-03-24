import React from 'react';
import { motion } from 'motion/react';
import { Gem, ShieldCheck, BarChart3, Wallet, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Gem size={32} />,
      title: "Your Digital Investments",
      desc: "Because everything you buy is an investment. Track your clothes, skincare, gadgets, and accessories. See what's actually working for you.",
      color: "bg-secondary/20 text-accent"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Privacy First",
      desc: "Your data stays on your device. We don't want your secrets, just your best looks.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Spending Patterns",
      desc: "Get to know what became a surprisingly good investment and what went bad. Visualize where your money actually goes.",
      color: "bg-secondary/20 text-accent"
    },
    {
      icon: <Wallet size={32} />,
      title: "Effortless Budgeting",
      desc: "Girl Math automatically creates a budget from your salary. You stay in control and can modify it anytime—we just take the initial effort away.",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary mb-8 leading-tight">
            Smart tools for your main character era.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Everything you need to justify your lifestyle, track your investments, and stay on top of your game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white rounded-[48px] border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section */}
        <section className="bg-primary rounded-[64px] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">
                See what was actually worth it.
              </h2>
              <ul className="space-y-6">
                {[
                  "Automatic cost-per-wear calculation",
                  "Real-time investment insights",
                  "Secure, local-first data storage",
                  "Auto-generated budgets from salary"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium opacity-90">
                    <CheckCircle2 className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[40px] border border-white/20 transform rotate-2">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Total Value</p>
                    <h4 className="text-5xl font-display font-extrabold">$12,450.00</h4>
                  </div>
                  <div className="bg-secondary text-accent px-4 py-2 rounded-full font-bold text-sm">
                    +12% vs last month
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Investment Value", value: 75 },
                    { label: "High-Utility Pieces", value: 90 },
                    { label: "Daily Treats", value: 45 }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span>{stat.label}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                          className="h-full bg-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </section>
      </div>
    </div>
  );
};

export default Features;

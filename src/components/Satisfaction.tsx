'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { satisfaction } from '@/data/satisfaction';

const Satisfaction: React.FC = () => {
  return (
    <Section
      id="satisfaction"
      title="Customer Satisfaction Rate"
      description="Real numbers that show our customers' trust in our financial services."
    >
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {satisfaction.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex h-full flex-col items-center justify-between rounded-3xl border border-slate-200 bg-white/80 p-7 text-center shadow-lg shadow-slate-200/40"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <Icon size={32} className="text-blue-500" />
              </div>
              <div className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-500">
                {item.caption}
              </div>
              <motion.div
                className="text-5xl font-semibold text-slate-900"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="inline-flex items-baseline justify-center gap-2">
                  <span className="inline-block min-w-[4rem] text-center">
                    {item.percentage}
                  </span>
                  <span className="text-3xl">%</span>
                </span>
              </motion.div>
              <p className="mt-4 text-slate-600">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Satisfaction;

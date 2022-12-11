'use client';

import { motion } from 'framer-motion';

import { InsightCard, TitleText, TypingText } from '../components';

import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';

import styles from '../styles';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
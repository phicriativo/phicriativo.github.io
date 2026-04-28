import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, description, align = 'center' }) {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 mb-16 ${alignClasses[align]}`}
    >
      {tag && (
        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-primary/20 overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

          <div className="relative px-8 sm:px-16 py-16 sm:py-24 text-center">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              Pronto para começar?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 max-w-2xl mx-auto">
              Leve a Realidade Aumentada para o seu projeto
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Entre em contato e descubra como a AR pode transformar a experiência do seu público.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contato">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 h-13 text-base">
                  Solicitar Demonstração
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 font-semibold px-10 h-13 text-base">
                  Ver Portfólio
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
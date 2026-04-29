import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Landmark, Building2, ShoppingBag, Palette, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const useCases = [
  {
    icon: Landmark,
    title: 'Monumentos Históricos',
    description: 'Reconstruções digitais de patrimônios culturais. Visite monumentos como eram em diferentes épocas da história.',
    gradient: 'from-emerald-500/20 to-primary/5',
  },
  {
    icon: Building2,
    title: 'Arquitetura',
    description: 'Visualize projetos arquitetônicos em escala real no local de construção antes mesmo da primeira pedra.',
    gradient: 'from-primary/20 to-cyan-500/5',
  },
  {
    icon: ShoppingBag,
    title: 'Produtos',
    description: 'Demonstrações interativas que permitem aos clientes experimentar produtos em seus próprios espaços.',
    gradient: 'from-amber-500/20 to-primary/5',
  },
  {
    icon: Palette,
    title: 'Obras de Arte',
    description: 'Experiências imersivas que expandem os limites das galerias e trazem a arte para qualquer lugar.',
    gradient: 'from-purple-500/20 to-primary/5',
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Soluções"
          title="Onde a AR transforma"
          description="Aplicações reais de Realidade Aumentada que estão redefinindo como interagimos com o mundo."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/50 p-8 bg-card/30 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{useCase.description}</p>
                <Link
                  to="/solucoes"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
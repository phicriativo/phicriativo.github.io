import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Eye, Smartphone } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const features = [
  {
    icon: Eye,
    title: 'Reconhecimento Visual',
    description: 'Algoritmos avançados de visão computacional que identificam superfícies, objetos e espaços em tempo real.',
  },
  {
    icon: Layers,
    title: 'Modelagem 3D Precisa',
    description: 'Reconstrução fotogramétrica e modelagem detalhada para experiências fiéis à realidade.',
  },
  {
    icon: Cpu,
    title: 'Processamento em Tempo Real',
    description: 'Engine otimizada para renderização fluida em dispositivos móveis e navegadores web.',
  },
  {
    icon: Smartphone,
    title: 'Multiplataforma',
    description: 'Experiências acessíveis via smartphones, tablets, óculos AR e navegadores WebXR.',
  },
];

export default function TechSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Tecnologia"
          title="AR de próxima geração"
          description="Nossa stack tecnológica combina o melhor da visão computacional, modelagem 3D e renderização em tempo real."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
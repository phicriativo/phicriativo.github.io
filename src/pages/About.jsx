import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Shield, Globe, Users, Award } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const values = [
  { icon: Zap, title: 'Inovação', description: 'Investimos constantemente em pesquisa e desenvolvimento para oferecer tecnologia de ponta.' },
  { icon: Shield, title: 'Qualidade', description: 'Cada projeto passa por rigorosos controles de qualidade antes de ser entregue ao cliente.' },
  { icon: Globe, title: 'Acessibilidade', description: 'Democratizamos o acesso à Realidade Aumentada para empresas e instituições de todos os tamanhos.' },
  { icon: Heart, title: 'Paixão', description: 'Acreditamos que a tecnologia tem o poder de criar conexões emocionais e experiências inesquecíveis.' },
];

const techStack = [
  'ARCore / ARKit', 'WebXR', 'Three.js', 'Unity 3D',
  'Photogrammetry', 'LiDAR', 'React Native', 'Cloud Rendering',
];

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Sobre Nós"
          title="Pioneiros em Realidade Aumentada"
          description="Nascemos com a missão de transformar a forma como as pessoas interagem com o mundo ao seu redor, utilizando tecnologia AR de última geração."
        />

        {/* Mission, Vision */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            {
              icon: Target,
              title: 'Missão',
              text: 'Democratizar o acesso à Realidade Aumentada, criando experiências transformadoras que conectam o digital ao físico de forma intuitiva e impactante.',
            },
            {
              icon: Eye,
              title: 'Visão',
              text: 'Ser a referência global em soluções de AR aplicadas a cultura, arquitetura, educação e varejo, transformando como a humanidade percebe a realidade.',
            },
            {
              icon: Users,
              title: 'Propósito',
              text: 'Utilizamos tecnologia para preservar patrimônios, acelerar negócios e criar experiências que inspiram, educam e emocionam pessoas ao redor do mundo.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border/50 bg-card/30 p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Nossos Valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Tecnologias que Utilizamos</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Nossa stack combina as melhores ferramentas do mercado para entregar experiências AR de alta performance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full border border-border/50 bg-secondary/30 text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
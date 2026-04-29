import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Building2, ShoppingBag, Palette, GraduationCap, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/shared/SectionHeading';
import AnimatedCard from '@/components/shared/AnimatedCard';

const categories = ['Todos', 'Monumentos', 'Arquitetura', 'Produtos', 'Arte', 'Educação'];

const projects = [
  {
    title: 'Coliseu Reimaginado',
    category: 'Monumentos',
    description: 'Reconstrução digital completa do Coliseu de Roma em seu auge, permitindo a visitantes ver gladiadores e a arquitetura original.',
    impact: '+300% de engajamento turístico',
    icon: Landmark,
    tags: ['Fotogrametria', 'WebXR', 'Áudio AR'],
  },
  {
    title: 'Torre Nexus',
    category: 'Arquitetura',
    description: 'Visualização em escala real de um edifício de 40 andares no terreno de construção, com interiores exploráveis.',
    impact: 'Redução de 60% no ciclo de vendas',
    icon: Building2,
    tags: ['BIM', 'Escala Real', 'Interior AR'],
  },
  {
    title: 'IKEA AR Experience',
    category: 'Produtos',
    description: 'Catálogo completo de 500+ produtos visualizáveis em AR nos espaços dos clientes.',
    impact: '+45% na taxa de conversão',
    icon: ShoppingBag,
    tags: ['E-commerce', 'WebAR', 'Catálogo 3D'],
  },
  {
    title: 'Galeria Infinita',
    category: 'Arte',
    description: 'Exposição de arte contemporânea que expande as paredes do museu com obras digitais interativas.',
    impact: '50.000 visitantes virtuais/mês',
    icon: Palette,
    tags: ['Arte Digital', 'Interativo', 'Multissensorial'],
  },
  {
    title: 'Museu Nacional AR',
    category: 'Educação',
    description: 'Sistema educacional com AR para o Museu Nacional, trazendo dinossauros e artefatos à vida.',
    impact: '+200% de tempo de permanência',
    icon: GraduationCap,
    tags: ['Educação', 'Animação 3D', 'Gamificação'],
  },
  {
    title: 'Castelo de Guimarães',
    category: 'Monumentos',
    description: 'Visita imersiva ao Castelo de Guimarães com reconstrução da vida medieval e batalhas históricas.',
    impact: 'Prêmio de Inovação Turística 2025',
    icon: Landmark,
    tags: ['Patrimônio', 'História', 'Imersivo'],
  },
  {
    title: 'Residencial Parque Verde',
    category: 'Arquitetura',
    description: 'Maquete AR interativa para empreendimento residencial com 200 unidades personalizáveis.',
    impact: '80% das unidades vendidas na planta',
    icon: Building2,
    tags: ['Imobiliário', 'Personalização', 'Maquete AR'],
  },
  {
    title: 'Monet em Realidade Aumentada',
    category: 'Arte',
    description: 'Experiência que permite mergulhar nos quadros de Monet, caminhando dentro das pinturas impressionistas.',
    impact: 'Exposição esgotada em 3 dias',
    icon: Palette,
    tags: ['Impressionismo', 'Imersivo', 'Premiado'],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Portfólio"
          title="Projetos que transformam"
          description="Conheça cases reais de como a Realidade Aumentada está revolucionando diferentes setores."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AnimatedCard className="h-full">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                      <p className="text-xs font-semibold text-primary">{project.impact}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
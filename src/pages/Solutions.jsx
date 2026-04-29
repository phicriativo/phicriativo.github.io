import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Building2, ShoppingBag, Palette, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

const solutions = [
  {
    id: 'monumentos',
    icon: Landmark,
    title: 'Monumentos Históricos & Museus',
    subtitle: 'Preservação e experiência cultural digital',
    description: 'Reconstruímos digitalmente patrimônios históricos, permitindo que visitantes vejam monumentos como eram em diferentes épocas. Integramos camadas de informação, áudio-guias e reconstruções 3D acessíveis por smartphones.',
    benefits: [
      'Reconstrução digital de ruínas e patrimônios',
      'Visitas guiadas imersivas com AR',
      'Painéis informativos holográficos',
      'Acessibilidade para turistas internacionais',
    ],
    gradient: 'from-emerald-500/10 to-transparent',
  },
  {
    id: 'arquitetura',
    icon: Building2,
    title: 'Arquitetura',
    subtitle: 'Projetos antes da construção',
    description: 'Transforme plantas e maquetes em experiências imersivas. Clientes podem visualizar edifícios em escala real, caminhar por interiores e explorar acabamentos — tudo antes de iniciar a obra.',
    benefits: [
      'Visualização em escala real no terreno',
      'Planta baixa com visão em AR no projeto',
      'Exploração de interiores e acabamentos',
      'Apresentações impactantes para investidores',
    ],
    gradient: 'from-primary/10 to-transparent',
  },
  {
    id: 'produtos',
    icon: ShoppingBag,
    title: 'Produtos',
    subtitle: 'Experimentar antes de comprar',
    description: 'Permita que seus clientes experimentem produtos em seus próprios espaços. De móveis a eletrônicos, a AR elimina dúvidas e aumenta a conversão de vendas.',
    benefits: [
      'Try-before-you-buy em tempo real',
      'Catálogos 3D interativos',
      'Integração com e-commerce',
      'Aumento comprovado na taxa de conversão',
    ],
    gradient: 'from-amber-500/10 to-transparent',
  },
  {
    id: 'arte',
    icon: Palette,
    title: 'Obras de Arte',
    subtitle: 'A arte além dos limites físicos',
    description: 'Expanda galerias para qualquer espaço. Artistas podem criar obras que reagem ao ambiente, e museus podem oferecer exposições virtuais acessíveis de qualquer lugar do mundo.',
    benefits: [
      'Exposições virtuais acessíveis globalmente',
      'Obras interativas que reagem ao ambiente',
      'Galerias expandidas com AR',
      'Experiências multissensoriais',
    ],
    gradient: 'from-purple-500/10 to-transparent',
  },
];

export default function Solutions() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Nossas Soluções"
          title="Tecnologia AR para cada necessidade"
          description="Desenvolvemos soluções customizadas de Realidade Aumentada para diferentes setores, sempre com foco em experiência e resultados."
        />

        <div className="space-y-20">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  {solution.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contato">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    Solicitar Proposta <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Visual Card */}
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`rounded-3xl border border-border/50 bg-gradient-to-br ${solution.gradient} p-8 sm:p-12 aspect-[4/3] flex items-center justify-center`}>
                  <div className="relative">
                    <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float">
                      <solution.icon className="w-16 h-16 text-primary/60" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse-glow" />
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-primary/10 animate-pulse-glow" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
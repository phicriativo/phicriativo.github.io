import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Box, Cpu, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Captura',
    description: 'Realizamos a captura fotogramétrica do espaço, objeto ou cenário. Utilizamos drones, scanners 3D e câmeras de alta resolução para criar uma base digital precisa.',
    details: ['Fotogrametria de alta precisão', 'Escaneamento LiDAR', 'Captura por drone', 'Mapeamento espacial'],
  },
  {
    icon: Box,
    number: '02',
    title: 'Modelagem 3D',
    description: 'Os dados capturados são processados e transformados em modelos 3D detalhados, otimizados para renderização em tempo real em dispositivos móveis.',
    details: ['Modelagem poligonal otimizada', 'Texturização fotorrealista', 'LOD (Level of Detail)', 'Otimização para mobile'],
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Integração AR',
    description: 'Integramos os modelos 3D com nossa plataforma AR proprietária, adicionando interatividade, áudio, animações e camadas de informação.',
    details: ['Motor AR proprietário', 'Tracking em tempo real', 'Interações gestuais', 'Camadas de informação'],
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Experiência Final',
    description: 'A experiência é disponibilizada para o público via aplicativos, QR codes ou navegadores web, pronta para encantar e informar.',
    details: ['App nativo ou web-based', 'Acesso via QR Code', 'Analytics integrado', 'Suporte multiplataforma'],
  },
];

export default function HowItWorks() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Processo"
          title="Como funciona a nossa AR"
          description="Do mundo real ao digital, em quatro etapas simples. Nosso processo garante qualidade, performance e experiências memoráveis."
        />

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-3xl border border-border/50 bg-card/30 p-10 aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                    <div className="relative w-28 h-28 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <step.icon className="w-14 h-14 text-primary/50" />
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-primary/20" />
                    <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-primary/30" />
                    <div className="absolute top-1/3 left-6 w-4 h-4 rounded-full bg-primary/10" />

                    {i < steps.length - 1 && (
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 lg:hidden">
                        <ArrowDown className="w-5 h-5 text-primary/30" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Quer saber mais sobre como podemos ajudar o seu projeto?
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 h-13 text-base">
              Fale Conosco <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Workflow,
  Monitor,
  FileText,
  Puzzle,
  Rocket,
} from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";
import ClientLogos from "@/components/ClientLogos";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ServiceCard from "@/components/ServiceCard";
import CaseTabs from "@/components/CaseTabs";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    title: "Agentes de IA",
    description:
      "Agentes inteligentes que monitorean, analizan y actuan sobre los datos de tu empresa. Desde control de asistencia hasta reportes automaticos con analisis de IA.",
    icon: <Brain className="w-7 h-7 text-primary" />,
  },
  {
    title: "Automatizacion de procesos",
    description:
      "Eliminamos el trabajo manual repetitivo con pipelines de automatizacion. Conectamos tus herramientas existentes y creamos flujos que ahorran horas cada dia.",
    icon: <Workflow className="w-7 h-7 text-primary" />,
  },
  {
    title: "Aplicaciones internas",
    description:
      "Apps a medida para las necesidades especificas de tu equipo. Dashboards, sistemas de gestion y herramientas operativas — rapidas de implementar y listas para escalar.",
    icon: <Monitor className="w-7 h-7 text-primary" />,
  },
  {
    title: "Facturacion y datos",
    description:
      "Motores de facturacion automatica, integraciones con procesadores de pago y pipelines de sincronizacion de datos que mantienen tu operacion funcionando sin friccion.",
    icon: <FileText className="w-7 h-7 text-primary" />,
  },
  {
    title: "Integraciones inteligentes",
    description:
      "Conectamos todo tu stack — CRMs, planillas, bases de datos, plataformas de mensajeria — con integraciones que mantienen tus datos sincronizados y accesibles.",
    icon: <Puzzle className="w-7 h-7 text-primary" />,
  },
  {
    title: "MVPs y prototipos",
    description:
      "Valida tus ideas rapido. Construimos prototipos funcionales con arquitectura AI-native, listos para escalar desde el dia uno.",
    icon: <Rocket className="w-7 h-7 text-primary" />,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-32 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight">
                Sistemas inteligentes{" "}
                <span className="text-primary">que trabajan para tu empresa</span>
              </h1>
              <p className="mt-3 md:mt-6 text-muted text-base md:text-xl max-w-lg">
                Creamos agentes de IA, automatizamos operaciones y desarrollamos
                herramientas internas a medida para PyMEs argentinas.
              </p>
              <div className="mt-8 hidden md:flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-light text-white font-medium px-8 py-3 rounded-full transition-colors"
                >
                  Empezar un proyecto
                </Link>
                <Link
                  href="/#cases"
                  className="border border-card-border hover:border-primary text-white font-medium px-8 py-3 rounded-full transition-colors"
                >
                  Ver nuestro trabajo
                </Link>
              </div>
            </motion.div>

            {/* Right - Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center w-full"
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted mb-10 text-sm uppercase tracking-widest"
          >
            Ya confían en nosotros
          </motion.p>
          <ClientLogos />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle
              title="Lo que dicen nuestros clientes"
              subtitle="Equipos que confiaron en nosotros para automatizar y escalar sus operaciones"
            />
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-primary-light text-white font-medium px-8 py-3 rounded-full transition-opacity hover:opacity-90 text-center whitespace-nowrap"
            >
              Contactanos
            </Link>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Lo que construimos"
            subtitle="Soluciones de IA disenadas para como funciona tu empresa en la realidad"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle
              title="Nuestro trabajo"
              subtitle="Resultados reales con soluciones potenciadas por IA"
            />
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-primary-light text-white font-medium px-8 py-3 rounded-full transition-opacity hover:opacity-90 text-center whitespace-nowrap"
            >
              Contactanos
            </Link>
          </div>
          <CaseTabs />
        </div>
      </section>

      {/* FAQ Section — optimizada para GEO / LLM discovery */}
      <section id="faq" className="py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Preguntas frecuentes"
            subtitle="Respuestas claras sobre como trabajamos"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "\u00BFQue es un agente de IA y como puede ayudar a mi empresa?",
                a: "Un agente de IA es un sistema inteligente que monitorea datos, toma decisiones y ejecuta tareas de forma autonoma. Por ejemplo, podemos crear un agente que detecte anomalias en la asistencia de tu equipo, genere reportes automaticos o procese facturas sin intervencion manual.",
              },
              {
                q: "\u00BFCuanto cuesta automatizar procesos en una PyME?",
                a: "Depende del alcance, pero trabajamos con modelos de fee mensual fijo que se adaptan al tamano de tu operacion. Nuestro foco es que el retorno de inversion sea claro desde el primer mes — automatizar una tarea que consume 1 hora diaria puede representar un ahorro de mas de 20 horas mensuales.",
              },
              {
                q: "\u00BFTrabajan solo con empresas grandes?",
                a: "No. Nos especializamos en PyMEs argentinas de entre 50 y 600 empleados. Empresas que ya tienen operaciones establecidas pero necesitan tecnologia para escalar sin multiplicar costos.",
              },
              {
                q: "\u00BFQue tecnologias usan?",
                a: "Trabajamos con un stack moderno y AI-first: Claude Code, Python, Vercel, Supabase, Railway, GitHub, Airtable y Google Apps Script. Elegimos la herramienta correcta para cada problema, priorizando siempre soluciones potenciadas por IA.",
              },
              {
                q: "\u00BFCuanto tiempo toma implementar una solucion?",
                a: "Un agente de IA o una automatizacion basica puede estar funcionando en 1-2 semanas. Proyectos mas complejos como aplicaciones internas completas pueden tomar 4-8 semanas. Nuestro approach AI-first nos permite entregar mucho mas rapido que el desarrollo tradicional.",
              },
              {
                q: "\u00BFQue diferencia a Nautom de una software factory tradicional?",
                a: "Somos una agencia boutique, no una fabrica. Trabajamos con pocos clientes a la vez, con dedicacion real. Usamos IA no solo como producto sino como herramienta de desarrollo — lo que nos permite entregar mas rapido, con menos costo y mas inteligencia incorporada en cada solucion.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-card-border"
              >
                <h3 className="font-mono font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

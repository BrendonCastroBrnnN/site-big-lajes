import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Award,
  Factory,
  Headphones,
  Truck,
  DollarSign,
  HardHat,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ChevronDown,
  ArrowRight,
  Building2,
  Home,
  Layers,
  Grid3x3,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "5531999785847";
const WHATSAPP_DISPLAY = "(31) 99978-5847";

const PHONE_NUMBER = "553133855593";
const PHONE_DISPLAY = "(31) 3385-5593";

const EMAIL = "biglajesbh@hotmail.com";
const ADDRESS =
  "Av. Nélio Cerqueira, 715 - Tirol, Belo Horizonte - MG, CEP 30662-060";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Av.+Nélio+Cerqueira,+715,+Tirol,+Belo+Horizonte,+MG";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20lajes.`;
const VISIT_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20%C3%A0%20Big%20Lajes.`;

const diferenciais = [
  {
    icon: Award,
    title: "Mais de 30 Anos de Mercado",
    desc: "Experiência de mais de três décadas atendendo obras em Belo Horizonte e Região Metropolitana.",
  },
  {
    icon: Factory,
    title: "Fabricação Própria",
    desc: "Produção própria e atendimento direto, sem intermediários.",
  },
  {
    icon: Headphones,
    title: "Atendimento Personalizado",
    desc: "Atendimento para entender as necessidades da sua obra e preparar uma cotação.",
  },
  {
    icon: Truck,
    title: "Entrega em BH e Região Metropolitana",
    desc: "Realizamos entregas mediante cotação de frete e disponibilidade para cada localidade.",
  },
  {
    icon: DollarSign,
    title: "Preço Competitivo",
    desc: "Condições competitivas e excelente custo-benefício para sua construção.",
  },
  {
    icon: HardHat,
    title: "Visita à Empresa",
    desc: "Entre em contato para verificar a disponibilidade e agendar uma visita.",
  },
];

const produtos = [
  {
    icon: Grid3x3,
    title: "Lajes Treliçadas",
    desc: "Lajes treliçadas fabricadas para atender diferentes tipos de obras residenciais e comerciais.",
    tags: ["Residencial", "Comercial"],
    accent: true,
  },
  {
    icon: Layers,
    title: "Vigotas Treliçadas",
    desc: "Vigotas treliçadas produzidas sob medida conforme as necessidades informadas para cada obra.",
    tags: ["Sob Medida", "Fabricação Própria"],
    accent: false,
  },
  {
    icon: Home,
    title: "Soluções Residenciais",
    desc: "Atendimento para casas, sobrados, ampliações e reformas em Belo Horizonte e Região Metropolitana.",
    tags: ["Casas", "Sobrados"],
    accent: true,
  },
  {
    icon: Building2,
    title: "Soluções Comerciais",
    desc: "Fornecimento de lajes treliçadas para obras comerciais, mediante análise e cotação.",
    tags: ["Comercial", "Cotação"],
    accent: false,
  },
];

const passos = [
  {
    num: "01",
    title: "Entre em Contato",
    desc: "Fale conosco pelo WhatsApp ou telefone e informe o que sua obra precisa.",
  },
  {
    num: "02",
    title: "Envie as Informações",
    desc: "Compartilhe as medidas, o projeto ou os dados necessários para a cotação.",
  },
  {
    num: "03",
    title: "Receba a Cotação",
    desc: "Receba uma proposta com os materiais e as condições de entrega.",
  },
  {
    num: "04",
    title: "Receba na Obra",
    desc: "Após a confirmação, combinamos a produção e a entrega no endereço informado.",
  },
];

const galeria = [
  { url: "https://images.unsplash.com/photo-1565118387387-add70a563efe?w=800&h=600&fit=crop&auto=format", alt: "Operário trabalhando em obra de construção civil" },
  { url: "https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?w=800&h=600&fit=crop&auto=format", alt: "Engenheiro com capacete em canteiro de obras" },
  { url: "https://images.unsplash.com/photo-1694521787162-5373b598945c?w=800&h=600&fit=crop&auto=format", alt: "Construtores em estrutura de concreto" },
  { url: "https://images.unsplash.com/photo-1541888894402-f3b1af908be4?w=800&h=600&fit=crop&auto=format", alt: "Equipe de trabalho no topo de construção" },
  { url: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=800&h=600&fit=crop&auto=format", alt: "Residência moderna construída com lajes treliçadas" },
  { url: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=800&h=600&fit=crop&auto=format", alt: "Edifício comercial em construção" },
];


function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(26,20,16,0.98)" : "rgba(26,20,16,0.9)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 8px 28px rgba(0,0,0,0.24)" : "none",
      }}
    >
      <div className="hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5 text-xs text-white/65">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MessageCircle size={12} /> {WHATSAPP_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} /> {EMAIL}
            </a>
          </div>
          <span className="text-xs text-white/45">Atendimento em Belo Horizonte e Região Metropolitana</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Voltar ao início">
            <div className="w-10 h-10 bg-[#c8860a] rounded flex items-center justify-center">
              <Layers size={22} className="text-white" />
            </div>
            <div>
              <div className="text-white tracking-widest text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}>
                BIG LAJES
              </div>
              <div className="text-[#c8860a] text-[11px] tracking-wider leading-none" style={{ fontWeight: 700 }}>
                FABRICAÇÃO PRÓPRIA
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-[#c8860a] transition-colors text-sm"
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            style={{ background: "#25d366", fontWeight: 800 }}
          >
            <MessageCircle size={16} />
            Solicitar Cotação
          </a>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 px-4 py-4 space-y-1" style={{ background: "#1a1410" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white/80 hover:text-[#c8860a] py-2.5 text-sm"
              style={{ fontWeight: 600 }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-white/75 text-sm">
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg text-white text-sm"
              style={{ background: "#25d366", fontWeight: 800 }}
            >
              <MessageCircle size={17} /> Solicitar Cotação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const benefits = [
    { icon: Factory, label: "Fabricação própria" },
    { icon: Award, label: "Mais de 30 anos de mercado" },
    { icon: Headphones, label: "Atendimento direto" },
    { icon: Truck, label: "Entrega mediante cotação" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#1a1410" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565118387387-add70a563efe?w=1920&h=1080&fit=crop&auto=format')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,20,16,0.98) 0%, rgba(26,20,16,0.9) 46%, rgba(26,20,16,0.48) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 72% 45%, rgba(200,134,10,0.35), transparent 34%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 lg:pt-40 pb-10 lg:pb-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
            style={{
              borderColor: "rgba(200,134,10,0.55)",
              background: "rgba(200,134,10,0.12)",
            }}
          >
            <Factory size={14} className="text-[#c8860a]" />
            <span
              className="text-[#e0a62e] text-xs tracking-[0.16em]"
              style={{ fontWeight: 800 }}
            >
              FABRICANTE DE LAJES TRELIÇADAS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-white mb-5"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.45rem, 5.2vw, 4.35rem)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              maxWidth: "800px",
            }}
          >
            Lajes para sua obra com{" "}
            <span style={{ color: "#d79a1d" }}>fabricação própria</span>{" "}
            e mais de 30 anos de experiência.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="text-white/75 mb-6 max-w-2xl"
            style={{
              fontSize: "clamp(0.98rem, 1.5vw, 1.08rem)",
              lineHeight: 1.65,
            }}
          >
            Atendemos obras residenciais e comerciais em Belo Horizonte e
            Região Metropolitana, com atendimento direto da fábrica, preço
            competitivo e cotação sem compromisso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg text-white transition-all hover:-translate-y-1 active:scale-95"
              style={{
                background: "#25d366",
                fontSize: "1rem",
                fontWeight: 800,
                boxShadow: "0 8px 30px rgba(37,211,102,0.32)",
              }}
            >
              <MessageCircle size={20} />
              Solicitar Cotação
            </a>
            <a
              href={VISIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg text-white transition-all hover:-translate-y-1 active:scale-95 border"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.07)",
                fontSize: "1rem",
                fontWeight: 700,
                backdropFilter: "blur(5px)",
              }}
            >
              <MapPin size={19} />
              Agendar Visita
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="mt-8 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 max-w-4xl border-t border-white/15 pt-5"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className={`flex items-center gap-3 py-2 ${
                index > 0 ? "lg:border-l lg:border-white/15 lg:pl-5" : ""
              }`}
            >
              <benefit.icon
                size={25}
                strokeWidth={1.8}
                className="text-[#d79a1d] shrink-0"
              />
              <span
                className="text-white/80 text-sm leading-snug"
                style={{ fontWeight: 600 }}
              >
                {benefit.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden lg:block">
        <ChevronDown size={25} className="text-white/35" />
      </div>
    </section>
  );
}

function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, color: "#c8860a" }}>
            Por que escolher a BIG LAJES
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#1a1410",
            }}
          >
            Nossos Diferenciais
          </h2>
          <div className="w-14 h-1 bg-[#c8860a] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ borderColor: "rgba(13,27,42,0.09)", background: "#f4f2ee" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(249,115,22,0.1)" }}
              >
                <item.icon size={24} style={{ color: "#c8860a" }} />
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a1410" }}
              >
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.92rem", color: "#6b6357" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SobreSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 overflow-hidden" style={{ background: "#1a1410" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, color: "#c8860a" }}>
              Nossa História
            </span>
            <h2
              className="mt-2 mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              Tradição e confiança para sua construção
            </h2>
            <p
              className="mb-5 leading-relaxed"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
              }}
            >
              A <strong style={{ color: "white" }}>BIG LAJES</strong> atua há mais de
              30 anos no mercado, oferecendo lajes treliçadas para obras em Belo
              Horizonte e Região Metropolitana.
            </p>
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
              }}
            >
              Com fabricação própria, atendimento direto e experiência no setor,
              buscamos oferecer qualidade, preço competitivo e uma solução adequada
              para cada obra.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Mais de 30 anos de mercado",
                "Fabricação própria",
                "Atendimento direto",
                "Entrega em BH e Região Metropolitana",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: "#c8860a" }} />
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>{text}</span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded text-white transition-all hover:scale-105"
              style={{ background: "#c8860a", fontFamily: "'Barlow', sans-serif", fontWeight: 700 }}
            >
              Solicitar Cotação <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3", background: "#2d5a4e" }}>
              <img
                src="https://images.unsplash.com/photo-1772442198624-4fc4d7281e89?w=800&h=600&fit=crop&auto=format"
                alt="Profissional trabalhando em obra de construção civil"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(13,27,42,0.5) 0%, transparent 60%)" }}
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 rounded-xl p-6 shadow-2xl"
              style={{ background: "#c8860a" }}
            >
              <div
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.4rem", fontWeight: 800, lineHeight: 1, color: "white" }}
              >
                30+
              </div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", marginTop: 4 }}>
                anos de<br />experiência
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProdutosSection() {
  return (
    <section id="produtos" className="py-20 lg:py-28" style={{ background: "#f7f6f3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest uppercase" style={{ fontWeight: 800, color: "#c8860a" }}>
            Produtos e aplicações
          </span>
          <h2
            className="mt-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: "#1a1410" }}
          >
            Soluções para diferentes tipos de obra
          </h2>
          <p className="max-w-2xl mx-auto mt-4" style={{ color: "#6b6357", lineHeight: 1.7 }}>
            Fale diretamente com a Big Lajes para informar as medidas e receber uma cotação adequada à necessidade da sua construção.
          </p>
          <div className="w-14 h-1 bg-[#c8860a] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {produtos.map((prod, i) => (
            <motion.article
              key={prod.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group bg-white rounded-xl overflow-hidden border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: "rgba(26,20,16,0.08)" }}
            >
              <div className="h-1.5" style={{ background: prod.accent ? "#c8860a" : "#2d5a4e" }} />
              <div className="p-6 flex flex-col flex-1">
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: prod.accent ? "rgba(200,134,10,0.1)" : "rgba(45,90,78,0.09)", width: 52, height: 52 }}
                >
                  <prod.icon size={25} style={{ color: prod.accent ? "#c8860a" : "#2d5a4e" }} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.28rem", fontWeight: 800, color: "#1a1410" }}>
                  {prod.title}
                </h3>
                <p className="leading-relaxed mb-5 flex-1" style={{ fontSize: "0.91rem", color: "#6b6357" }}>
                  {prod.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {prod.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs" style={{ background: "rgba(26,20,16,0.06)", color: "#1a1410", fontWeight: 700 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 pt-4 border-t transition-colors hover:text-[#c8860a]"
                  style={{ borderColor: "rgba(26,20,16,0.08)", color: "#1a1410", fontSize: "0.9rem", fontWeight: 800 }}
                >
                  Solicitar cotação <ArrowRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28" style={{ background: "#2d5a4e" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, color: "#c8860a" }}>
            Simples e rápido
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "white",
            }}
          >
            Como Funciona
          </h2>
          <div className="w-14 h-1 bg-[#c8860a] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div
            className="absolute top-10 left-0 right-0 h-px hidden lg:block"
            style={{ background: "rgba(255,255,255,0.15)", margin: "0 12.5%" }}
          />
          {passos.map((passo, i) => (
            <motion.div
              key={passo.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 border-4 border-[#c8860a]"
                style={{
                  background: "#1a1410",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.7rem",
                  fontWeight: 800,
                  color: "white",
                }}
              >
                {passo.num}
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "white" }}
              >
                {passo.title}
              </h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                {passo.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded text-white transition-all hover:scale-105 active:scale-95"
            style={{
              background: "#25d366",
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              boxShadow: "0 4px 28px rgba(37,211,102,0.32)",
            }}
          >
            <MessageCircle size={20} />
            Começar Agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function GaleriaSection() {
  return (
    <section id="galeria" className="py-20 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, color: "#c8860a" }}>
            Nosso trabalho
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#1a1410",
            }}
          >
            Galeria de Obras
          </h2>
          <div className="w-14 h-1 bg-[#c8860a] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galeria.map((foto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/3", background: "#ede9e2" }}
            >
              <img
                src={foto.url}
                alt={foto.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-end"
                style={{ background: "linear-gradient(to top, rgba(13,27,42,0.82) 0%, transparent 55%)" }}
              >
                <p className="p-4 text-sm text-white" style={{ fontFamily: "'Barlow', sans-serif" }}>{foto.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


const perguntasFrequentes = [
  {
    pergunta: "A Big Lajes atende quais regiões?",
    resposta: "Atendemos Belo Horizonte e cidades da Região Metropolitana. A disponibilidade e o valor do frete são confirmados durante a cotação.",
  },
  {
    pergunta: "A entrega é gratuita?",
    resposta: "Não. O frete é calculado conforme o endereço da obra, a quantidade solicitada e as condições de entrega.",
  },
  {
    pergunta: "Como solicitar uma cotação?",
    resposta: "Entre em contato pelo WhatsApp ou telefone e envie as medidas, o projeto ou as informações disponíveis sobre a obra.",
  },
  {
    pergunta: "As vigotas são produzidas sob medida?",
    resposta: "A produção é definida conforme as informações da obra e a análise realizada durante a cotação.",
  },
  {
    pergunta: "É possível visitar a Big Lajes?",
    resposta: "Sim. Entre em contato previamente para verificar a disponibilidade e agendar uma visita.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28" style={{ background: "#f7f6f3" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase" style={{ fontWeight: 800, color: "#c8860a" }}>
            Dúvidas frequentes
          </span>
          <h2 className="mt-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#1a1410" }}>
            Informações antes de solicitar sua cotação
          </h2>
          <div className="w-14 h-1 bg-[#c8860a] mx-auto mt-5 rounded-full" />
        </div>

        <div className="space-y-3">
          {perguntasFrequentes.map((item) => (
            <details key={item.pergunta} className="group bg-white rounded-xl border p-5" style={{ borderColor: "rgba(26,20,16,0.08)" }}>
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4" style={{ fontWeight: 800, color: "#1a1410" }}>
                {item.pergunta}
                <span className="text-[#c8860a] text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pr-8 leading-relaxed" style={{ color: "#6b6357", fontSize: "0.94rem" }}>
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalizacaoSection() {
  return (
    <section className="py-20 lg:py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-2xl overflow-hidden min-h-[360px] border" style={{ borderColor: "rgba(26,20,16,0.08)" }}>
            <iframe
              title="Localização da Big Lajes"
              src="https://www.google.com/maps?q=Av.%20N%C3%A9lio%20Cerqueira%2C%20715%20-%20Tirol%2C%20Belo%20Horizonte%20-%20MG&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl p-8 lg:p-10 flex flex-col justify-center" style={{ background: "#1a1410" }}>
            <span className="text-xs tracking-widest uppercase" style={{ fontWeight: 800, color: "#c8860a" }}>
              Visite ou entre em contato
            </span>
            <h2 className="mt-3 mb-5 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.08 }}>
              Fale diretamente com a Big Lajes
            </h2>
            <p className="text-white/65 leading-relaxed mb-7">
              Solicite uma cotação pelo WhatsApp, ligue para o telefone fixo ou agende uma visita à empresa.
            </p>

            <div className="space-y-4 mb-8">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <MapPin size={19} className="text-[#c8860a] mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Phone size={19} className="text-[#c8860a]" /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail size={19} className="text-[#c8860a]" /> {EMAIL}
              </a>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 px-7 py-4 rounded-lg text-white transition-all hover:-translate-y-1"
              style={{ background: "#25d366", fontWeight: 800 }}
            >
              <MessageCircle size={20} /> Solicitar Cotação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#c8860a" }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1694521787162-5373b598945c?w=1920&h=600&fit=crop&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(249,115,22,0.93)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "white",
            }}
          >
            Precisa de lajes para sua obra?
          </h2>
          <p className="mb-10" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.92)" }}>
            Fale agora com nossa equipe e receba um orçamento rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-xl transition-all hover:scale-105 active:scale-95"
              style={{
                background: "#ffffff",
                color: "#1a1410",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 800,
                boxShadow: "0 6px 32px rgba(0,0,0,0.18)",
              }}
            >
              <MessageCircle size={22} style={{ color: "#25d366" }} />
              Chamar no WhatsApp Agora
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-white transition-all hover:scale-105 active:scale-95 border-2"
              style={{
                borderColor: "rgba(255,255,255,0.5)",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 700,
              }}
            >
              <Phone size={20} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="py-14" style={{ background: "#1a1410" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#c8860a] rounded flex items-center justify-center">
                <Layers size={21} className="text-white" />
              </div>
              <div>
                <div className="text-white tracking-widest text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}>
                  BIG LAJES
                </div>
                <div className="text-[#c8860a] text-xs tracking-wider" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600 }}>
                  30+ ANOS DE QUALIDADE
                </div>
              </div>
            </div>
            <p className="mb-6 max-w-xs leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)" }}>
              Fabricante de lajes treliçadas com mais de 30 anos de experiência no mercado
              da construção civil de Belo Horizonte e Região Metropolitana.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-white text-sm transition-all hover:opacity-90"
              style={{ background: "#25d366", fontFamily: "'Barlow', sans-serif", fontWeight: 700 }}
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>

          <div>
            <h4 className="mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "white" }}>
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Diferenciais", "#diferenciais"],
                ["Sobre a Empresa", "#sobre"],
                ["Produtos", "#produtos"],
                ["Como Funciona", "#como-funciona"],
                ["Galeria de Obras", "#galeria"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors hover:text-[#c8860a]"
                    style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.55)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "white" }}>
              Contato
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: Phone,
                  primary: PHONE_DISPLAY,
                  sub: "Telefone fixo",
                  href: `tel:${PHONE_NUMBER}`,
                },
                {
                  icon: MessageCircle,
                  primary: WHATSAPP_DISPLAY,
                  sub: "WhatsApp",
                  href: WHATSAPP_LINK,
                },
                {
                  icon: MapPin,
                  primary: ADDRESS,
                  sub: "Clique para abrir no Google Maps",
                  href: MAPS_LINK,
                },
                {
                  icon: Mail,
                  primary: EMAIL,
                  sub: "E-mail",
                  href: `mailto:${EMAIL}`,
                },
              ].map((item) => (
                <li key={item.primary} className="flex items-start gap-3">
                  <item.icon size={14} className="mt-0.5 shrink-0" style={{ color: "#c8860a" }} />
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("https") ? "_blank" : undefined}
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        className="text-sm block hover:text-white transition-colors"
                        style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.75)" }}
                      >
                        {item.primary}
                      </a>
                    ) : (
                      <span className="text-sm block" style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.75)" }}>
                        {item.primary}
                      </span>
                    )}
                    <span className="text-xs" style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.35)" }}>
                      {item.sub}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} BIG LAJES. Todos os direitos reservados. | Fabricante de lajes treliçadas em BH e Região Metropolitana.
          </p>
          <p className="text-xs" style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.2)" }}>
            lajes treliçadas BH · fabricante de lajes Belo Horizonte · lajes pré-moldadas BH · lajes Minas Gerais
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 280, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full text-white"
      style={{
        background: "#25d366",
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 700,
        boxShadow: "0 4px 32px rgba(37,211,102,0.55)",
      }}
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:block text-sm">Solicitar Orçamento</span>
    </motion.a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Barlow', 'Inter', sans-serif" }}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <DiferenciaisSection />
        <SobreSection />
        <ProdutosSection />
        <ComoFuncionaSection />
        <GaleriaSection />
        <FAQSection />
        <LocalizacaoSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logoImage from "@/assets/logo.png";
const footerLinks = {
  producto: {
    title: "Producto",
    links: [{
      name: "Características",
      href: "#"
    }, {
      name: "Soluciones",
      href: "#"
    }, {
      name: "Precios",
      href: "#"
    }, {
      name: "Casos de Éxito",
      href: "#"
    }]
  },
  empresa: {
    title: "Empresa",
    links: [{
      name: "Sobre Nosotros",
      href: "#"
    }, {
      name: "Blog",
      href: "#"
    }, {
      name: "Carreras",
      href: "#"
    }, {
      name: "Contacto",
      href: "/contacto"
    }]
  },
  soporte: {
    title: "Soporte",
    links: [{
      name: "Centro de Ayuda",
      href: "#"
    }, {
      name: "Documentación",
      href: "#"
    }, {
      name: "Primeros Pasos",
      href: "#"
    }, {
      name: "FAQ",
      href: "#"
    }]
  },
  legal: {
    title: "Legal",
    links: [{
      name: "Términos y Condiciones",
      href: "#"
    }, {
      name: "Aviso de Privacidad",
      href: "#"
    }, {
      name: "Política de Cookies",
      href: "#"
    }]
  }
};
const socialLinks = [{
  name: "Facebook",
  icon: Facebook,
  href: "#"
}, {
  name: "Instagram",
  icon: Instagram,
  href: "#"
}, {
  name: "X",
  icon: Twitter,
  href: "#"
}, {
  name: "LinkedIn",
  icon: Linkedin,
  href: "#"
}, {
  name: "YouTube",
  icon: Youtube,
  href: "#"
}];
export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  return <footer className="relative bg-background pt-8 pb-6">
      {/* Main footer card */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl p-8 md:p-12 lg:p-16 bg-black">
          {/* Logo */}
          <div className="mb-12">
            <img src={logoImage} alt="Kairo AI" className="h-8 md:h-10 w-auto brightness-0 invert" />
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-12">
            {Object.values(footerLinks).map(section => <div key={section.title}>
                <h3 className="text-sm font-semibold text-primary-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map(link => <li key={link.name}>
                      <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>)}
                </ul>
              </div>)}
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            {/* Social links */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              {socialLinks.map(social => <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 cursor-pointer" onMouseEnter={() => setHoveredSocial(social.name)} onMouseLeave={() => setHoveredSocial(null)} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <motion.div initial={{
                opacity: 0,
                width: 0
              }} animate={{
                opacity: hoveredSocial === social.name ? 1 : 0,
                width: hoveredSocial === social.name ? 20 : 0
              }} transition={{
                duration: 0.2
              }} className="overflow-hidden">
                    <social.icon className="w-5 h-5" />
                  </motion.div>
                  <span>{social.name}</span>
                </motion.a>)}
            </div>

            {/* Copyright */}
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Kairo AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;
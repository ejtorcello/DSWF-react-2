"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Globe, Twitter, Youtube } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Lista de habilidades para Carlos con niveles
const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Docker", level: 70 },
  { name: "GraphQL", level: 65 },
  { name: "AWS", level: 60 },
  { name: "CI/CD", level: 75 },
]

// Tecnologías principales
const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "🔗" },
  { name: "Docker", icon: "🐳" },
]

// Proyectos
const projects = [
  {
    title: "Plataforma de Cursos Online",
    description: "Sistema completo de educación online con videos y evaluaciones",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Completado",
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control con métricas en tiempo real y visualizaciones",
    tech: ["React", "GraphQL", "D3.js"],
    status: "En desarrollo",
    link: "#",
  },
  {
    title: "Chat Application",
    description: "Aplicación de chat en tiempo real con salas y notificaciones",
    tech: ["React", "Socket.io", "Redis"],
    status: "Completado",
    link: "#",
  },
]

// Componente de botones de redes sociales animados para Carlos
const AnimatedSocialButtons = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/carlos-lopez",
      gradient: "from-gray-600 to-gray-800",
      hoverGradient: "hover:from-gray-700 hover:to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/carlos-lopez",
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "hover:from-blue-600 hover:to-blue-800",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/carlos_fullstack",
      gradient: "from-sky-400 to-sky-600",
      hoverGradient: "hover:from-sky-500 hover:to-sky-700",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:carlos.lopez@email.com",
      gradient: "from-red-500 to-red-700",
      hoverGradient: "hover:from-red-600 hover:to-red-800",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@carlos-dev",
      gradient: "from-red-600 to-red-800",
      hoverGradient: "hover:from-red-700 hover:to-red-900",
    },
  ]

  return (
    <div className="flex gap-4 justify-center md:justify-start">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative overflow-hidden rounded-full p-4 transition-all duration-300 ease-in-out
              transform hover:scale-110 hover:shadow-2xl
              bg-gradient-to-r ${social.gradient} ${social.hoverGradient}
              text-white
              before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300
              hover:before:opacity-20
            `}
            title={social.name}
          >
            <IconComponent className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:rotate-6" />

            {/* Efecto de pulso */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-full animate-pulse bg-white opacity-30"></div>
            </div>

            {/* Tooltip corporativo */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
              {social.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default function CarlosProfile() {
  // Estilo corporativo
  return (
    <div className="space-y-8">
      {/* Header - Estilo corporativo con gradiente */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
            <span className="text-4xl font-bold">CL</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Carlos López</h1>
            <p className="text-xl text-blue-100 mb-4">Full Stack Developer</p>
            <p className="text-blue-100 max-w-2xl mb-6">
              Desarrollador full stack con experiencia en múltiples tecnologías. Especialista en integración
              frontend-backend y optimización de aplicaciones web. Apasionado por las mejores prácticas de desarrollo.
            </p>

            {/* Botones de redes sociales animados */}
            <AnimatedSocialButtons />
          </div>
        </div>
      </div>

      {/* Información personal - Estilo de tarjeta con columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Ubicación
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-center">
            <p>Rosario, Argentina</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-lg">
              <Code className="w-5 h-5 mr-2" />
              Experiencia
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-center">
            <p>5 años</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-lg">
              <Server className="w-5 h-5 mr-2" />
              Especialidad
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-center">
            <p>Desarrollo Full Stack</p>
          </CardContent>
        </Card>
      </div>

      {/* Habilidades con barras de progreso */}
      <Card>
        <CardHeader>
          <CardTitle>Habilidades Técnicas</CardTitle>
          <CardDescription>Nivel de experiencia en diferentes tecnologías</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1.5">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tecnologías - Estilo de hexágonos */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Tecnologías Principales</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-800 flex items-center justify-center clip-hex">
                <span className="text-3xl">{tech.icon}</span>
              </div>
              <p className="mt-2 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Proyectos - Estilo de tarjetas con sombras */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className={`h-1 ${
                  project.status === "Completado"
                    ? "bg-green-500"
                    : project.status === "En desarrollo"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                }`}
              ></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Completado"
                        ? "default"
                        : project.status === "En desarrollo"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Ver Proyecto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer con estilo corporativo */}
      <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Carlos López - Full Stack Developer</p>
        <p className="text-xs mt-1">Desarrollado con React, Next.js y Tailwind CSS</p>
      </div>

      {/* Estilos adicionales para el clip-path hexagonal */}
      <style jsx global>{`
        .clip-hex {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  )
}

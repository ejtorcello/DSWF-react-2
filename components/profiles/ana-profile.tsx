"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Palette, Layers, Monitor, Instagram, Dribbble } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Lista de habilidades para Ana
const skills = [
  "Figma",
  "React",
  "Tailwind CSS",
  "Adobe XD",
  "Sketch",
  "Responsive Design",
  "Accessibility",
  "Prototyping",
  "User Research",
  "CSS3",
]

// Tecnologías principales
const technologies = [
  { name: "Figma", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "💨" },
  { name: "Adobe XD", icon: "🎭" },
  { name: "Sketch", icon: "✏️" },
]

// Proyectos
const projects = [
  {
    title: "Design System Corporativo",
    description: "Sistema de diseño completo para aplicaciones empresariales",
    tech: ["Figma", "Storybook", "React"],
    status: "Completado",
    link: "#",
    color: "#FF7262", // Color Figma
  },
  {
    title: "App de Fitness",
    description: "Diseño y desarrollo de aplicación móvil para seguimiento fitness",
    tech: ["Figma", "React Native", "Tailwind"],
    status: "En desarrollo",
    link: "#",
    color: "#38BDF8", // Color Tailwind
  },
  {
    title: "Portal de Noticias",
    description: "Rediseño completo de portal de noticias con enfoque en UX",
    tech: ["Figma", "React", "Next.js"],
    status: "Planificado",
    link: "#",
    color: "#6366F1", // Color Indigo
  },
]

// Componente de botones de redes sociales animados para Ana
const AnimatedSocialButtons = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      colors: "from-gray-600 to-gray-800",
      hoverColors: "hover:from-gray-700 hover:to-gray-900",
      shadowColor: "hover:shadow-gray-500/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      colors: "from-blue-500 to-blue-700",
      hoverColors: "hover:from-blue-600 hover:to-blue-800",
      shadowColor: "hover:shadow-blue-500/50",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      colors: "from-pink-500 to-rose-600",
      hoverColors: "hover:from-pink-600 hover:to-rose-700",
      shadowColor: "hover:shadow-pink-500/50",
    },
    {
      name: "Instagram",
      icon: Instagram,
      colors: "from-purple-500 via-pink-500 to-orange-500",
      hoverColors: "hover:from-purple-600 hover:via-pink-600 hover:to-orange-600",
      shadowColor: "hover:shadow-purple-500/50",
    },
    {
      name: "Email",
      icon: Mail,
      colors: "from-teal-500 to-cyan-600",
      hoverColors: "hover:from-teal-600 hover:to-cyan-700",
      shadowColor: "hover:shadow-teal-500/50",
    },
  ]

  return (
    <div className="flex gap-4 justify-center md:justify-start flex-wrap">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.name}
            href={`https://${social.name.toLowerCase()}.com/ana-martinez`}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative overflow-hidden rounded-2xl p-4 transition-all duration-500 ease-out
              transform hover:scale-110 hover:rotate-3 hover:shadow-2xl
              bg-gradient-to-br ${social.colors} ${social.hoverColors} ${social.shadowColor}
              text-white
              before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300
              hover:before:opacity-20
              after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent
              after:opacity-0 after:translate-x-[-100%] hover:after:opacity-30 hover:after:translate-x-[100%]
              after:transition-all after:duration-700
            `}
            title={social.name}
          >
            <IconComponent className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:scale-110" />

            {/* Efecto de partículas */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200"></div>
              <div className="absolute top-1/2 right-2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400"></div>
            </div>

            {/* Tooltip creativo */}
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg border-2 border-current">
              <span className="font-medium">{social.name}</span>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default function AnaProfile() {
  // Estilo creativo y visual con enfoque en diseño
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Header - Estilo creativo con formas y colores */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Formas decorativas */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full -mr-20 -mt-20 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full -ml-10 -mb-10 opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-200 rounded-full transform -translate-y-1/2 opacity-70"></div>

        {/* Contenido */}
        <div className="relative z-10 p-10 md:p-16 bg-white bg-opacity-80 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-5xl font-bold text-white">AM</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Ana Martínez
              </h1>
              <p className="text-xl text-gray-600 mb-4">UI/UX Designer & Developer</p>
              <p className="text-gray-600 max-w-2xl mb-6">
                Diseñadora y desarrolladora enfocada en experiencia de usuario. Combina habilidades de diseño con
                conocimientos técnicos para crear interfaces excepcionales. Especialista en design systems y
                accesibilidad.
              </p>

              {/* Botones de redes sociales animados */}
              <AnimatedSocialButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Cita personal - Estilo creativo */}
      <div className="text-center px-4 py-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
        <p className="text-xl md:text-2xl italic text-gray-700">
          "El buen diseño es obvio. El gran diseño es transparente."
        </p>
        <p className="mt-2 text-gray-500">— Mi filosofía de diseño</p>
      </div>

      {/* Tecnologías - Estilo de tarjetas coloridas */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Palette className="mr-2" /> Herramientas de Diseño
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index % 5 === 0
                    ? "from-pink-400 to-purple-500"
                    : index % 5 === 1
                      ? "from-blue-400 to-indigo-500"
                      : index % 5 === 2
                        ? "from-green-400 to-teal-500"
                        : index % 5 === 3
                          ? "from-yellow-400 to-orange-500"
                          : "from-red-400 to-pink-500"
                } opacity-75 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div className="relative z-10 p-6 text-center text-white">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="font-medium">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Habilidades - Estilo de etiquetas creativas */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Layers className="mr-2" /> Habilidades
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-4 py-2 rounded-full text-white ${
                index % 5 === 0
                  ? "bg-purple-500"
                  : index % 5 === 1
                    ? "bg-blue-500"
                    : index % 5 === 2
                      ? "bg-pink-500"
                      : index % 5 === 3
                        ? "bg-teal-500"
                        : "bg-orange-500"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Proyectos - Estilo de tarjetas creativas */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Monitor className="mr-2" /> Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
              {/* Barra de color superior */}
              <div className="h-2" style={{ backgroundColor: project.color }}></div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-gray-50"
                      style={{ borderColor: project.color + "40" }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full hover:bg-gray-100"
                    style={{ color: project.color }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proceso de diseño - Estilo visual */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
          <CardTitle>Mi Proceso de Diseño</CardTitle>
          <CardDescription>Enfoque metodológico para crear experiencias excepcionales</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            <div className="flex-1 p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h3 className="font-bold mb-1">Investigación</h3>
              <p className="text-sm text-gray-600">Entender al usuario y sus necesidades</p>
            </div>
            <div className="hidden md:block w-8 self-center text-gray-300">→</div>
            <div className="flex-1 p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <h3 className="font-bold mb-1">Ideación</h3>
              <p className="text-sm text-gray-600">Explorar soluciones y conceptos</p>
            </div>
            <div className="hidden md:block w-8 self-center text-gray-300">→</div>
            <div className="flex-1 p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h3 className="font-bold mb-1">Prototipado</h3>
              <p className="text-sm text-gray-600">Crear versiones interactivas</p>
            </div>
            <div className="hidden md:block w-8 self-center text-gray-300">→</div>
            <div className="flex-1 p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-2">
                4
              </div>
              <h3 className="font-bold mb-1">Implementación</h3>
              <p className="text-sm text-gray-600">Desarrollo y entrega final</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer con estilo creativo */}
      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
        <p className="text-gray-600">
          Diseñado con <span className="text-pink-500">♥</span> por Ana Martínez • {new Date().getFullYear()}
        </p>
      </div>

      {/* Estilos adicionales para animaciones */}
      <style jsx global>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  )
}

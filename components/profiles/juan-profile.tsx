import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, Laptop, Twitter, Instagram } from "lucide-react"

// Lista de habilidades para Juan
const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Git", "Redux", "Jest"]

// Tecnologías principales
const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Git", icon: "📝" },
]

// Proyectos
const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico desarrollada con React y Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Completado",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades colaborativas",
    tech: ["React", "TypeScript", "Firebase"],
    status: "En desarrollo",
    link: "#",
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web personal con blog integrado y sistema de contacto",
    tech: ["Next.js", "Tailwind", "MDX"],
    status: "Completado",
    link: "#",
  },
]

// Componente de botones de redes sociales animados
const AnimatedSocialButtons = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/juan-perez",
      color: "hover:bg-gray-800 hover:text-white",
      bgColor: "bg-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/juan-perez",
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-blue-50",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/juan_perez_dev",
      color: "hover:bg-sky-500 hover:text-white",
      bgColor: "bg-sky-50",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:juan.perez@email.com",
      color: "hover:bg-red-500 hover:text-white",
      bgColor: "bg-red-50",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/juan_dev",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
    },
  ]

  return (
    <div className="flex gap-3 justify-center md:justify-start">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative overflow-hidden rounded-full p-3 transition-all duration-300 ease-in-out
              transform hover:scale-110 hover:rotate-3 hover:shadow-lg
              ${social.bgColor} ${social.color}
              border-2 border-transparent hover:border-current
            `}
            title={social.name}
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

            {/* Efecto de ondas al hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></div>
            </div>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {social.name}
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default function JuanProfile() {
  // Estilo minimalista y profesional con énfasis en código
  return (
    <div className="space-y-8 bg-slate-50 p-8 rounded-xl">
      {/* Header - Estilo minimalista con código */}
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
          <Code className="w-16 h-16 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Juan Pérez</h1>
          <p className="text-xl text-blue-600 font-mono">Frontend Developer & Coordinador</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600">
            Desarrollador frontend con 3 años de experiencia en React y tecnologías modernas. Apasionado por crear
            interfaces de usuario intuitivas y accesibles. Lidera equipos de desarrollo y coordina proyectos desde la
            concepción hasta el deployment.
          </p>
        </div>

        {/* Botones de redes sociales animados */}
        <div className="mt-6">
          <AnimatedSocialButtons />
        </div>
      </div>

      {/* Información personal - Estilo de código */}
      <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
        <div className="mb-4">
          <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span>{" "}
          <span className="text-blue-400">=</span> {"{"}
        </div>
        <div className="ml-6">
          <div>
            <span className="text-green-400">name:</span> <span className="text-orange-300">"Juan Pérez"</span>,
          </div>
          <div>
            <span className="text-green-400">location:</span>{" "}
            <span className="text-orange-300">"Buenos Aires, Argentina"</span>,
          </div>
          <div>
            <span className="text-green-400">experience:</span> <span className="text-orange-300">"3 años"</span>,
          </div>
          <div>
            <span className="text-green-400">role:</span>{" "}
            <span className="text-orange-300">"Frontend Developer & Coordinador"</span>,
          </div>
          <div>
            <span className="text-green-400">interests:</span> [<span className="text-orange-300">"UI/UX"</span>,{" "}
            <span className="text-orange-300">"Optimización"</span>,{" "}
            <span className="text-orange-300">"Accesibilidad"</span>],
          </div>
        </div>
        <div>{"};"}</div>
      </div>

      {/* Tecnologías - Estilo de tarjetas con sombras */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Terminal className="mr-2" /> Tecnologías Principales
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <div className="font-medium">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Habilidades - Estilo de código */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Laptop className="mr-2" /> Habilidades
        </h2>
        <div className="bg-slate-900 p-4 rounded-lg">
          <code className="text-green-400 font-mono">
            const skills = [
            <div className="ml-4 flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span key={skill} className="text-orange-300">
                  "{skill}"{index < skills.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
            ];
          </code>
        </div>
      </div>

      {/* Proyectos - Estilo de tarjetas con bordes */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 border-blue-200 hover:border-blue-500 transition-colors">
              <CardHeader className="bg-blue-50">
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
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-gray-600 text-sm">{project.description}</p>
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

      {/* Footer con estilo de código */}
      <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm text-center">
        <code>// Desarrollado con React y Next.js por Juan Pérez - {new Date().getFullYear()}</code>
      </div>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Database, Server, Code, Terminal, Twitter, Globe } from "lucide-react"

// Lista de habilidades para María
const skills = ["Node.js", "Express", "MongoDB", "PostgreSQL", "API REST", "Docker", "AWS", "Python", "SQL", "Redis"]

// Tecnologías principales
const technologies = [
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
]

// Proyectos
const projects = [
  {
    title: "API de Gestión de Usuarios",
    description: "API RESTful para manejo de autenticación y perfiles de usuario",
    tech: ["Node.js", "Express", "JWT"],
    status: "Completado",
    link: "#",
  },
  {
    title: "Sistema de Inventario",
    description: "Backend para sistema de gestión de inventario en tiempo real",
    tech: ["Node.js", "MongoDB", "Socket.io"],
    status: "En desarrollo",
    link: "#",
  },
  {
    title: "Microservicios de Pagos",
    description: "Arquitectura de microservicios para procesamiento de pagos",
    tech: ["Node.js", "Docker", "Redis"],
    status: "Planificado",
    link: "#",
  },
]

// Componente de botones de redes sociales animados para María
const AnimatedSocialButtons = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/maria-garcia",
      color: "hover:bg-gray-900",
      textColor: "hover:text-white",
      borderColor: "hover:border-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/maria-garcia",
      color: "hover:bg-blue-600",
      textColor: "hover:text-white",
      borderColor: "hover:border-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/maria_backend",
      color: "hover:bg-sky-500",
      textColor: "hover:text-white",
      borderColor: "hover:border-sky-500",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:maria.garcia@email.com",
      color: "hover:bg-green-600",
      textColor: "hover:text-white",
      borderColor: "hover:border-green-600",
    },
    {
      name: "Portfolio",
      icon: Globe,
      url: "https://maria-garcia.dev",
      color: "hover:bg-purple-600",
      textColor: "hover:text-white",
      borderColor: "hover:border-purple-600",
    },
  ]

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative overflow-hidden rounded-lg p-3 transition-all duration-500 ease-out
              transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl
              bg-gray-100 border-2 border-gray-200
              ${social.color} ${social.textColor} ${social.borderColor}
              before:absolute before:inset-0 before:bg-current before:opacity-0 before:transition-opacity before:duration-300
              hover:before:opacity-10
            `}
            title={social.name}
          >
            <IconComponent className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:rotate-12" />

            {/* Efecto de brillo */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-current animate-pulse"></div>
            </div>

            {/* Tooltip con estilo terminal */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-green-400 text-xs px-3 py-1 rounded font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-green-400">
              <span className="text-blue-400">$</span> open {social.name.toLowerCase()}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default function MariaProfile() {
  // Estilo técnico con enfoque en backend y datos
  return (
    <div className="space-y-8">
      {/* Header - Estilo técnico con terminal */}
      <div className="bg-black text-green-400 p-6 rounded-lg font-mono">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-xs text-gray-400">bash ~ terminal</div>
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-blue-400">$</span> whoami
          </div>
          <div>María García</div>
          <div>
            <span className="text-blue-400">$</span> cat role.txt
          </div>
          <div>Backend Developer</div>
          <div>
            <span className="text-blue-400">$</span> cat location.txt
          </div>
          <div>Córdoba, Argentina</div>
          <div>
            <span className="text-blue-400">$</span> cat experience.txt
          </div>
          <div>4 años</div>
          <div className="animate-pulse">
            <span className="text-blue-400">$</span> _
          </div>
        </div>
      </div>

      {/* Bio - Estilo de tarjeta con borde verde */}
      <Card className="border-l-4 border-green-500">
        <CardHeader>
          <CardTitle>Sobre mí</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Desarrolladora backend especializada en Node.js y arquitectura de APIs. Con experiencia en bases de datos
            relacionales y no relacionales. Enfocada en crear sistemas escalables y seguros.
          </p>

          {/* Botones de redes sociales animados */}
          <AnimatedSocialButtons />
        </CardContent>
      </Card>

      {/* Tabs para organizar contenido */}
      <Tabs defaultValue="technologies" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="technologies">Tecnologías</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
          <TabsTrigger value="projects">Proyectos</TabsTrigger>
        </TabsList>

        {/* Tecnologías */}
        <TabsContent value="technologies" className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center">
            <Server className="mr-2" /> Tecnologías Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200 text-center"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Habilidades */}
        <TabsContent value="skills">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Terminal className="mr-2" /> Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-black text-green-400 p-3 rounded-md font-mono text-center flex items-center justify-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Proyectos */}
        <TabsContent value="projects">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Database className="mr-2" /> Proyectos Destacados
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-400 to-teal-500"></div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{project.title}</CardTitle>
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
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Diagrama de arquitectura - Estilo técnico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="mr-2" /> Arquitectura Preferida
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto">
            <pre className="text-xs md:text-sm">
              {`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │
│  Frontend   │────▶│   API       │────▶│  Database   │
│  (React)    │     │  (Node.js)  │     │ (MongoDB)   │
│             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │             │
                    │  Services   │
                    │ (Microserv.)│
                    │             │
                    └─────────────┘
              `}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Footer con estilo de terminal */}
      <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-xs text-center">
        <code>/* María García - Backend Developer - {new Date().getFullYear()} */</code>
      </div>
    </div>
  )
}

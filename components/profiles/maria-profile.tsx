import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Github,
  Linkedin,
  Mail,
  Database,
  Server,
  Code,
  Terminal,
  Twitter,
  Globe,
  Calendar,
  Users,
  Star,
  Shield,
  Zap,
} from "lucide-react"

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

// Proyectos expandidos para el carrusel
const projects = [
  {
    title: "API de Gestión de Usuarios",
    description:
      "API RESTful completa para manejo de autenticación, autorización y gestión de perfiles de usuario con JWT y OAuth2",
    tech: ["Node.js", "Express", "JWT", "MongoDB", "OAuth2"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "2 personas",
    rating: 4.9,
    features: ["Autenticación JWT", "OAuth2", "Rate limiting", "Documentación API"],
    performance: "99.9% uptime",
    security: "A+ Security",
  },
  {
    title: "Sistema de Inventario",
    description:
      "Backend robusto para sistema de gestión de inventario en tiempo real con WebSockets y notificaciones push",
    tech: ["Node.js", "MongoDB", "Socket.io", "Redis", "Bull Queue"],
    status: "En desarrollo",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "4 personas",
    rating: 4.7,
    features: ["Tiempo real", "Notificaciones", "Reportes", "Alertas stock"],
    performance: "< 100ms response",
    security: "Encrypted data",
  },
  {
    title: "Microservicios de Pagos",
    description:
      "Arquitectura de microservicios escalable para procesamiento seguro de pagos con múltiples proveedores",
    tech: ["Node.js", "Docker", "Redis", "Kubernetes", "Stripe"],
    status: "Planificado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "6 personas",
    rating: 4.8,
    features: ["Multi-provider", "Failover", "Monitoring", "PCI compliance"],
    performance: "Auto-scaling",
    security: "PCI DSS Level 1",
  },
  {
    title: "Data Pipeline ETL",
    description: "Sistema de procesamiento de datos masivos con Apache Kafka y análisis en tiempo real",
    tech: ["Node.js", "Kafka", "PostgreSQL", "Python", "Airflow"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023",
    team: "3 personas",
    rating: 4.6,
    features: ["Big Data", "Real-time", "ML Pipeline", "Data validation"],
    performance: "1M+ records/hour",
    security: "Data encryption",
  },
  {
    title: "IoT Device Manager",
    description: "Plataforma backend para gestión de dispositivos IoT con MQTT y análisis de telemetría",
    tech: ["Node.js", "MQTT", "InfluxDB", "Grafana", "Docker"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023",
    team: "2 personas",
    rating: 4.5,
    features: ["MQTT broker", "Telemetría", "Dashboards", "Alertas"],
    performance: "10K+ devices",
    security: "TLS encryption",
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

// Componente del carrusel de proyectos para María
const ProjectCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full overflow-hidden border border-green-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
                {/* Header con gradiente verde */}
                <div className="h-2 bg-gradient-to-r from-green-400 to-teal-500"></div>

                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant={
                        project.status === "Completado"
                          ? "default"
                          : project.status === "En desarrollo"
                            ? "secondary"
                            : "outline"
                      }
                      className="bg-black/80 text-green-400 border-green-400"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  {/* Rating y métricas */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-black/80 text-white px-2 py-1 rounded-full text-xs">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{project.rating}</span>
                    </div>
                    <div className="bg-green-600/90 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span>{project.security}</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 pb-3">
                  <CardTitle className="text-lg line-clamp-1 text-gray-800">{project.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 space-y-4 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm line-clamp-3 flex-1">{project.description}</p>

                  {/* Métricas de rendimiento */}
                  <div className="bg-black text-green-400 p-2 rounded font-mono text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <Zap className="w-3 h-3" />
                      <span>Performance: {project.performance}</span>
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-green-300 text-green-700">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Features principales */}
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-700">Características:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    <Database className="w-4 h-4 mr-1" />
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Indicadores de puntos para móvil */}
      <div className="flex justify-center mt-4 gap-2 md:hidden">
        {projects.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-green-300 transition-colors duration-200" />
        ))}
      </div>
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
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="projects">Proyectos</TabsTrigger>
          <TabsTrigger value="technologies">Tecnologías</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
          <TabsTrigger value="architecture">Arquitectura</TabsTrigger>
        </TabsList>

        {/* Carrusel de Proyectos */}
        <TabsContent value="projects" className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center">
            <Database className="mr-2" /> Proyectos Destacados
          </h2>
          <ProjectCarousel />
        </TabsContent>

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

        {/* Arquitectura */}
        <TabsContent value="architecture">
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
        </TabsContent>
      </Tabs>

      {/* Footer con estilo de terminal */}
      <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-xs text-center">
        <code>/* María García - Backend Developer - {new Date().getFullYear()} */</code>
      </div>
    </div>
  )
}

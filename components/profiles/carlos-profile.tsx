"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Globe,
  Twitter,
  Youtube,
  Calendar,
  Users,
  Star,
  TrendingUp,
  Award,
} from "lucide-react"
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

// Proyectos expandidos para el carrusel
const projects = [
  {
    title: "Plataforma de Cursos Online",
    description:
      "Sistema completo de educación online con videos HD, evaluaciones interactivas, certificaciones y panel de administración avanzado",
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3", "Stripe"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "8 personas",
    rating: 4.9,
    features: ["Videos HD", "Certificaciones", "Pagos", "Analytics"],
    metrics: {
      users: "50K+ usuarios",
      courses: "200+ cursos",
      completion: "85% completion rate",
    },
    awards: ["Best EdTech 2024", "Innovation Award"],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Panel de control empresarial con métricas en tiempo real, visualizaciones interactivas D3.js y exportación de reportes",
    tech: ["React", "GraphQL", "D3.js", "Node.js", "Redis"],
    status: "En desarrollo",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "6 personas",
    rating: 4.8,
    features: ["Tiempo real", "Visualizaciones", "Reportes", "Alertas"],
    metrics: {
      dataPoints: "1M+ data points",
      response: "< 200ms",
      uptime: "99.9% uptime",
    },
    awards: ["Tech Excellence"],
  },
  {
    title: "Chat Application",
    description:
      "Aplicación de chat empresarial con salas privadas, videollamadas, compartir archivos y integración con herramientas de trabajo",
    tech: ["React", "Socket.io", "Redis", "WebRTC", "AWS"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023",
    team: "5 personas",
    rating: 4.7,
    features: ["Video calls", "File sharing", "Integrations", "Mobile app"],
    metrics: {
      messages: "10M+ messages",
      concurrent: "5K concurrent users",
      availability: "24/7 support",
    },
    awards: ["Communication Tool of the Year"],
  },
  {
    title: "E-commerce Marketplace",
    description:
      "Marketplace completo con múltiples vendedores, sistema de pagos, logística integrada y machine learning para recomendaciones",
    tech: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "ML"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023",
    team: "12 personas",
    rating: 4.6,
    features: ["Multi-vendor", "ML recommendations", "Logistics", "Mobile"],
    metrics: {
      vendors: "1K+ vendors",
      products: "100K+ products",
      transactions: "$2M+ processed",
    },
    awards: ["E-commerce Innovation", "Startup of the Year"],
  },
  {
    title: "DevOps Automation Platform",
    description:
      "Plataforma de automatización DevOps con CI/CD pipelines, monitoreo, alertas y deployment automático multi-cloud",
    tech: ["React", "Node.js", "Docker", "Kubernetes", "Terraform"],
    status: "En desarrollo",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "4 personas",
    rating: 4.5,
    features: ["CI/CD", "Multi-cloud", "Monitoring", "Auto-scaling"],
    metrics: {
      deployments: "1K+ deployments/day",
      reduction: "70% deployment time",
      reliability: "99.95% success rate",
    },
    awards: ["DevOps Tool Excellence"],
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

// Componente del carrusel de proyectos para Carlos
const ProjectCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300">
                {/* Barra de estado superior */}
                <div
                  className={`h-1 ${
                    project.status === "Completado"
                      ? "bg-gradient-to-r from-green-400 to-green-600"
                      : project.status === "En desarrollo"
                        ? "bg-gradient-to-r from-blue-400 to-blue-600"
                        : "bg-gradient-to-r from-gray-400 to-gray-600"
                  }`}
                ></div>

                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
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
                      className="bg-white/95 backdrop-blur-sm shadow-lg"
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
                    <div className="bg-blue-600/90 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>High Impact</span>
                    </div>
                  </div>
                  {/* Awards */}
                  {project.awards.length > 0 && (
                    <div className="absolute top-2 left-2">
                      <div className="bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>{project.awards.length}</span>
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-3">
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

                  {/* Métricas clave */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Métricas Clave:</p>
                    <div className="space-y-1">
                      {Object.entries(project.metrics)
                        .slice(0, 2)
                        .map(([key, value]) => (
                          <div key={key} className="text-xs text-gray-600 flex justify-between">
                            <span className="capitalize">{key}:</span>
                            <span className="font-medium text-blue-600">{value}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-blue-300 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Features principales */}
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-700">Características:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  {project.awards.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-700">Reconocimientos:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.awards.slice(0, 1).map((award, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded flex items-center gap-1"
                          >
                            <Award className="w-3 h-3" />
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Proyecto
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
          <div key={index} className="w-2 h-2 rounded-full bg-blue-300 transition-colors duration-200" />
        ))}
      </div>
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

      {/* Carrusel de Proyectos Destacados */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <ProjectCarousel />
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

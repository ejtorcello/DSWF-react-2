import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Terminal,
  Laptop,
  Twitter,
  Instagram,
  Calendar,
  Users,
  Star,
} from "lucide-react"

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

// Proyectos expandidos para el carrusel
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "4 personas",
    rating: 4.8,
    features: ["Carrito de compras", "Pagos seguros", "Panel admin", "Responsive design"],
  },
  {
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con funcionalidades colaborativas, notificaciones en tiempo real y integración con calendarios",
    tech: ["React", "TypeScript", "Firebase", "Socket.io"],
    status: "En desarrollo",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "3 personas",
    rating: 4.6,
    features: ["Colaboración en tiempo real", "Notificaciones", "Integración calendario", "Reportes"],
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web personal con blog integrado, sistema de contacto y optimización SEO completa",
    tech: ["Next.js", "Tailwind", "MDX", "Vercel"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023",
    team: "1 persona",
    rating: 4.9,
    features: ["Blog MDX", "SEO optimizado", "Formulario contacto", "Analytics"],
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control con métricas en tiempo real, gráficos interactivos y exportación de datos",
    tech: ["React", "D3.js", "Chart.js", "API REST"],
    status: "Completado",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023",
    team: "2 personas",
    rating: 4.7,
    features: ["Gráficos interactivos", "Tiempo real", "Exportar datos", "Filtros avanzados"],
  },
  {
    title: "Learning Management System",
    description: "Sistema de gestión de aprendizaje con cursos, evaluaciones y seguimiento de progreso",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    status: "En desarrollo",
    link: "#",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024",
    team: "5 personas",
    rating: 4.5,
    features: ["Cursos multimedia", "Evaluaciones", "Progreso", "Certificados"],
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

// Componente del carrusel de proyectos
const ProjectCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-2 border-blue-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  {/* Rating */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{project.rating}</span>
                  </div>
                </div>

                <CardHeader className="bg-blue-50 pb-3">
                  <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
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

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
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

                  <Button variant="outline" size="sm" className="w-full mt-auto bg-transparent">
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
          <div key={index} className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200" />
        ))}
      </div>
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

      {/* Habilidades con barras de progreso animadas */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Laptop className="mr-2" /> Habilidades Técnicas
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          {[
            { name: "JavaScript", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "React", level: 92 },
            { name: "Next.js", level: 88 },
            { name: "Tailwind CSS", level: 85 },
            { name: "HTML5", level: 98 },
            { name: "CSS3", level: 90 },
            { name: "Git", level: 87 },
            { name: "Redux", level: 80 },
            { name: "Jest", level: 75 },
          ].map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-blue-600 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel de Proyectos Destacados */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <ProjectCarousel />
      </div>

      {/* Footer con estilo de código */}
      <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm text-center">
        <code>// Desarrollado con React y Next.js por Juan Pérez - {new Date().getFullYear()}</code>
      </div>
    </div>
  )
}

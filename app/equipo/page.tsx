import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Users,
  Code,
  Database,
  Palette,
  Server,
  ExternalLink,
} from "lucide-react"

// Datos del equipo
const teamMembers = [
  {
    id: "juan",
    name: "Juan Pérez",
    role: "Frontend Developer & Coordinador",
    location: "Buenos Aires, Argentina",
    experience: "3 años",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Desarrollador frontend especializado en React y tecnologías modernas. Lidera equipos de desarrollo y coordina proyectos desde la concepción hasta el deployment.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    projects: 12,
    contributions: 450,
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    icon: Code,
    social: {
      github: "https://github.com/juan-perez",
      linkedin: "https://linkedin.com/in/juan-perez",
      email: "juan.perez@email.com",
    },
  },
  {
    id: "maria",
    name: "María García",
    role: "Backend Developer",
    location: "Córdoba, Argentina",
    experience: "4 años",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Desarrolladora backend especializada en Node.js y arquitectura de APIs. Enfocada en crear sistemas escalables y seguros con bases de datos relacionales y no relacionales.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"],
    projects: 18,
    contributions: 620,
    color: "green",
    gradient: "from-green-500 to-teal-600",
    icon: Database,
    social: {
      github: "https://github.com/maria-garcia",
      linkedin: "https://linkedin.com/in/maria-garcia",
      email: "maria.garcia@email.com",
    },
  },
  {
    id: "carlos",
    name: "Carlos López",
    role: "Full Stack Developer",
    location: "Rosario, Argentina",
    experience: "5 años",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Desarrollador full stack con experiencia en múltiples tecnologías. Especialista en integración frontend-backend y optimización de aplicaciones web.",
    skills: ["React", "Node.js", "PostgreSQL", "GraphQL", "Docker"],
    projects: 25,
    contributions: 890,
    color: "purple",
    gradient: "from-purple-500 to-blue-600",
    icon: Server,
    social: {
      github: "https://github.com/carlos-lopez",
      linkedin: "https://linkedin.com/in/carlos-lopez",
      email: "carlos.lopez@email.com",
    },
  },
  {
    id: "ana",
    name: "Ana Martínez",
    role: "UI/UX Designer & Developer",
    location: "Mendoza, Argentina",
    experience: "3 años",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Diseñadora y desarrolladora enfocada en experiencia de usuario. Combina habilidades de diseño con conocimientos técnicos para crear interfaces excepcionales.",
    skills: ["Figma", "React", "Tailwind CSS", "Adobe XD", "Prototyping"],
    projects: 15,
    contributions: 380,
    color: "pink",
    gradient: "from-pink-500 to-purple-600",
    icon: Palette,
    social: {
      github: "https://github.com/ana-martinez",
      linkedin: "https://linkedin.com/in/ana-martinez",
      email: "ana.martinez@email.com",
    },
  },
]

// Estadísticas del equipo
const teamStats = [
  {
    label: "Proyectos Completados",
    value: "70+",
    icon: Code,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    label: "Años de Experiencia",
    value: "15+",
    icon: Calendar,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    label: "Contribuciones",
    value: "2.3K+",
    icon: Github,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    label: "Miembros del Equipo",
    value: "4",
    icon: Users,
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
]

export default function EquipoPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Nuestro Equipo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conoce a los profesionales apasionados que hacen posible cada proyecto. Un equipo diverso con experiencia en
          desarrollo frontend, backend, full stack y diseño UX/UI.
        </p>
      </div>

      {/* Estadísticas del equipo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Separator />

      {/* Miembros del equipo */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Miembros del Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => {
            const IconComponent = member.icon
            return (
              <Card
                key={member.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-gray-300"
              >
                {/* Header con gradiente */}
                <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>

                <CardHeader className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className={`text-xl font-bold bg-gradient-to-r ${member.gradient} text-white`}>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <p
                        className={`text-sm font-medium bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}
                      >
                        {member.role}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{member.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">{member.bio}</CardDescription>

                  {/* Habilidades principales */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Habilidades principales:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Estadísticas */}
                  <div className="grid grid-cols-2 gap-4 py-3 px-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{member.projects}</div>
                      <div className="text-xs text-gray-600">Proyectos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{member.contributions}</div>
                      <div className="text-xs text-gray-600">Contribuciones</div>
                    </div>
                  </div>

                  {/* Redes sociales */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition-colors"
                        title="Email"
                      >
                        <Mail className="w-4 h-4 text-red-600" />
                      </a>
                    </div>
                    <Link href={`/integrante/${member.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-2 hover:bg-gradient-to-r ${member.gradient} hover:text-white hover:border-transparent transition-all`}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Ver Perfil
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Sección de colaboración */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">¿Quieres trabajar con nosotros?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Estamos siempre abiertos a nuevos proyectos y colaboraciones. Si tienes una idea o necesitas ayuda con tu
          desarrollo, no dudes en contactarnos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Mail className="w-4 h-4 mr-2" />
            Contactar Equipo
          </Button>
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Ver Proyectos
          </Button>
        </div>
      </div>

      {/* Footer del equipo */}
      <div className="text-center py-8 border-t">
        <p className="text-gray-600">
          Desarrollado con <span className="text-red-500">♥</span> por el equipo • {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

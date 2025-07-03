import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, MapPin, Calendar, Users, Code, Palette, Server, Database } from "lucide-react"
import Link from "next/link"

// Datos del equipo
const teamMembers = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "Frontend Developer & Coordinador",
    location: "Buenos Aires, Argentina",
    experience: "3 años",
    avatar: "/placeholder-user.jpg",
    description:
      "Desarrollador frontend especializado en React y tecnologías modernas. Lidera el equipo y coordina proyectos desde la concepción hasta el deployment.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git"],
    projects: 12,
    contributions: 450,
    icon: Code,
    color: "blue",
    social: {
      github: "https://github.com/juan-perez",
      linkedin: "https://linkedin.com/in/juan-perez",
      email: "juan.perez@email.com",
    },
  },
  {
    id: 2,
    name: "María García",
    role: "Backend Developer",
    location: "Córdoba, Argentina",
    experience: "4 años",
    avatar: "/placeholder-user.jpg",
    description:
      "Desarrolladora backend especializada en Node.js y arquitectura de APIs. Enfocada en crear sistemas escalables y seguros.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"],
    projects: 18,
    contributions: 620,
    icon: Server,
    color: "green",
    social: {
      github: "https://github.com/maria-garcia",
      linkedin: "https://linkedin.com/in/maria-garcia",
      email: "maria.garcia@email.com",
    },
  },
  {
    id: 3,
    name: "Carlos López",
    role: "Full Stack Developer",
    location: "Rosario, Argentina",
    experience: "5 años",
    avatar: "/placeholder-user.jpg",
    description:
      "Desarrollador full stack con experiencia en múltiples tecnologías. Especialista en integración frontend-backend y optimización de aplicaciones.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    projects: 25,
    contributions: 890,
    icon: Database,
    color: "purple",
    social: {
      github: "https://github.com/carlos-lopez",
      linkedin: "https://linkedin.com/in/carlos-lopez",
      email: "carlos.lopez@email.com",
    },
  },
  {
    id: 4,
    name: "Ana Martínez",
    role: "UI/UX Designer & Developer",
    location: "Mendoza, Argentina",
    experience: "3 años",
    avatar: "/placeholder-user.jpg",
    description:
      "Diseñadora y desarrolladora enfocada en experiencia de usuario. Combina habilidades de diseño con conocimientos técnicos para crear interfaces excepcionales.",
    skills: ["Figma", "React", "Tailwind CSS", "Adobe XD", "Prototyping"],
    projects: 15,
    contributions: 380,
    icon: Palette,
    color: "pink",
    social: {
      github: "https://github.com/ana-martinez",
      linkedin: "https://linkedin.com/in/ana-martinez",
      email: "ana.martinez@email.com",
    },
  },
]

// Componente de botones sociales animados
const SocialButtons = ({ social }: { social: any }) => {
  return (
    <div className="flex gap-2">
      <a
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110"
        title="GitHub"
      >
        <Github className="w-4 h-4" />
      </a>
      <a
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
        title="LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={`mailto:${social.email}`}
        className="p-2 rounded-full bg-red-50 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
        title="Email"
      >
        <Mail className="w-4 h-4" />
      </a>
    </div>
  )
}

export default function EquipoPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Nuestro Equipo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conoce a los profesionales apasionados que hacen posible nuestros proyectos. Un equipo diverso con experiencia
          en desarrollo frontend, backend, full stack y diseño UX/UI.
        </p>
      </div>

      {/* Estadísticas del equipo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-3xl font-bold text-blue-600">4</div>
          <div className="text-sm text-gray-600">Miembros del Equipo</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div className="text-3xl font-bold text-green-600">70+</div>
          <div className="text-sm text-gray-600">Proyectos Completados</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
          <div className="text-3xl font-bold text-purple-600">15+</div>
          <div className="text-sm text-gray-600">Años de Experiencia</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
          <div className="text-3xl font-bold text-pink-600">2340+</div>
          <div className="text-sm text-gray-600">Contribuciones</div>
        </div>
      </div>

      {/* Grid de miembros del equipo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member) => {
          const IconComponent = member.icon
          return (
            <Card
              key={member.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-opacity-50"
              style={{ borderColor: `var(--${member.color}-200)` }}
            >
              {/* Header con gradiente */}
              <div
                className={`h-2 bg-gradient-to-r ${
                  member.color === "blue"
                    ? "from-blue-400 to-blue-600"
                    : member.color === "green"
                      ? "from-green-400 to-green-600"
                      : member.color === "purple"
                        ? "from-purple-400 to-purple-600"
                        : "from-pink-400 to-pink-600"
                }`}
              ></div>

              <CardHeader
                className={`bg-gradient-to-r ${
                  member.color === "blue"
                    ? "from-blue-50 to-blue-100"
                    : member.color === "green"
                      ? "from-green-50 to-green-100"
                      : member.color === "purple"
                        ? "from-purple-50 to-purple-100"
                        : "from-pink-50 to-pink-100"
                } pb-4`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback
                        className={`text-2xl font-bold text-white bg-gradient-to-br ${
                          member.color === "blue"
                            ? "from-blue-400 to-blue-600"
                            : member.color === "green"
                              ? "from-green-400 to-green-600"
                              : member.color === "purple"
                                ? "from-purple-400 to-purple-600"
                                : "from-pink-400 to-pink-600"
                        }`}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-2 -right-2 p-2 rounded-full bg-white shadow-lg ${
                        member.color === "blue"
                          ? "text-blue-600"
                          : member.color === "green"
                            ? "text-green-600"
                            : member.color === "purple"
                              ? "text-purple-600"
                              : "text-pink-600"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription
                      className={`font-medium ${
                        member.color === "blue"
                          ? "text-blue-600"
                          : member.color === "green"
                            ? "text-green-600"
                            : member.color === "purple"
                              ? "text-purple-600"
                              : "text-pink-600"
                      }`}
                    >
                      {member.role}
                    </CardDescription>
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

              <CardContent className="pt-4 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>

                {/* Estadísticas */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div
                      className={`text-2xl font-bold ${
                        member.color === "blue"
                          ? "text-blue-600"
                          : member.color === "green"
                            ? "text-green-600"
                            : member.color === "purple"
                              ? "text-purple-600"
                              : "text-pink-600"
                      }`}
                    >
                      {member.projects}
                    </div>
                    <div className="text-xs text-gray-600">Proyectos</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div
                      className={`text-2xl font-bold ${
                        member.color === "blue"
                          ? "text-blue-600"
                          : member.color === "green"
                            ? "text-green-600"
                            : member.color === "purple"
                              ? "text-purple-600"
                              : "text-pink-600"
                      }`}
                    >
                      {member.contributions}
                    </div>
                    <div className="text-xs text-gray-600">Contribuciones</div>
                  </div>
                </div>

                {/* Habilidades */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Habilidades principales:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`text-xs ${
                          member.color === "blue"
                            ? "border-blue-300 text-blue-700 bg-blue-50"
                            : member.color === "green"
                              ? "border-green-300 text-green-700 bg-green-50"
                              : member.color === "purple"
                                ? "border-purple-300 text-purple-700 bg-purple-50"
                                : "border-pink-300 text-pink-700 bg-pink-50"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <SocialButtons social={member.social} />
                  <Link href={`/integrante/${member.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`hover:text-white transition-all duration-300 ${
                        member.color === "blue"
                          ? "border-blue-300 text-blue-700 hover:bg-blue-600"
                          : member.color === "green"
                            ? "border-green-300 text-green-700 hover:bg-green-600"
                            : member.color === "purple"
                              ? "border-purple-300 text-purple-700 hover:bg-purple-600"
                              : "border-pink-300 text-pink-700 hover:bg-pink-600"
                      }`}
                    >
                      <Users className="w-4 h-4 mr-1" />
                      Ver Perfil
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Sección de colaboración */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">¿Quieres trabajar con nosotros?</CardTitle>
          <CardDescription className="text-lg">
            Estamos siempre abiertos a nuevas oportunidades y colaboraciones
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
            <Mail className="w-4 h-4 mr-2" />
            Contáctanos
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

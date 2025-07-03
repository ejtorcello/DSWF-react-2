import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Instagram, Globe } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: "juan",
    name: "Juan Pérez",
    role: "Frontend Developer & Coordinador",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["React", "TypeScript", "CSS", "Figma"],
    description:
      "Lidera el desarrollo frontend y coordina las tareas del equipo. Especialista en React y experiencia de usuario.",
    responsibilities: ["Coordinación del equipo", "Desarrollo de componentes React", "Diseño de interfaces"],
    socialLinks: [
      { name: "GitHub", icon: Github, url: "https://github.com/juan-perez", color: "hover:text-gray-800" },
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/juan-perez", color: "hover:text-blue-600" },
      { name: "Twitter", icon: Twitter, url: "https://twitter.com/juan_perez_dev", color: "hover:text-sky-500" },
      { name: "Email", icon: Mail, url: "mailto:juan.perez@email.com", color: "hover:text-red-500" },
    ],
  },
  {
    id: "maria",
    name: "María García",
    role: "Backend Developer",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Node.js", "Express", "MongoDB", "API REST"],
    description: "Experta en desarrollo backend y arquitectura de APIs. Maneja la integración con servicios externos.",
    responsibilities: ["Desarrollo de APIs", "Integración con servicios externos", "Gestión de datos"],
    socialLinks: [
      { name: "GitHub", icon: Github, url: "https://github.com/maria-garcia", color: "hover:text-gray-800" },
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/maria-garcia", color: "hover:text-blue-600" },
      { name: "Twitter", icon: Twitter, url: "https://twitter.com/maria_backend", color: "hover:text-sky-500" },
      { name: "Email", icon: Mail, url: "mailto:maria.garcia@email.com", color: "hover:text-green-600" },
    ],
  },
  {
    id: "carlos",
    name: "Carlos López",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["React", "Node.js", "PostgreSQL", "Git"],
    description:
      "Desarrollador full stack con experiencia en múltiples tecnologías. Especialista en integración frontend-backend.",
    responsibilities: ["Desarrollo full stack", "Integración de sistemas", "Control de versiones"],
    socialLinks: [
      { name: "GitHub", icon: Github, url: "https://github.com/carlos-lopez", color: "hover:text-gray-800" },
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/carlos-lopez", color: "hover:text-blue-600" },
      { name: "Globe", icon: Globe, url: "https://carlos-lopez.dev", color: "hover:text-purple-600" },
      { name: "Email", icon: Mail, url: "mailto:carlos.lopez@email.com", color: "hover:text-red-500" },
    ],
  },
  {
    id: "ana",
    name: "Ana Martínez",
    role: "UI/UX Designer & Developer",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Figma", "React", "Tailwind", "Responsive Design"],
    description:
      "Diseñadora y desarrolladora enfocada en experiencia de usuario. Crea interfaces intuitivas y atractivas.",
    responsibilities: ["Diseño UI/UX", "Prototipado", "Documentación del proyecto"],
    socialLinks: [
      { name: "GitHub", icon: Github, url: "https://github.com/ana-martinez", color: "hover:text-gray-800" },
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ana-martinez", color: "hover:text-blue-600" },
      { name: "Instagram", icon: Instagram, url: "https://instagram.com/ana_design", color: "hover:text-pink-500" },
      { name: "Email", icon: Mail, url: "mailto:ana.martinez@email.com", color: "hover:text-teal-500" },
    ],
  },
]

// Componente de botones de redes sociales animados
const AnimatedSocialButtons = ({ socialLinks }: { socialLinks: any[] }) => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative overflow-hidden rounded-full p-2 transition-all duration-300 ease-in-out
              transform hover:scale-110 hover:shadow-lg
              bg-gray-100 hover:bg-white border border-gray-200 hover:border-current
              ${social.color}
            `}
            title={social.name}
          >
            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />

            {/* Efecto de ondas al hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></div>
            </div>

            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {social.name}
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default function EquipoPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nuestro Equipo</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Somos un equipo de 4 desarrolladores apasionados por crear aplicaciones web modernas y funcionales. Cada
          integrante aporta sus habilidades únicas para lograr un proyecto exitoso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-blue-600">{member.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{member.description}</p>

              <div>
                <h4 className="font-semibold mb-2">Responsabilidades:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {member.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Habilidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 items-center justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/integrante/${member.id}`}>Ver Perfil Completo</Link>
                </Button>

                {/* Botones de redes sociales animados */}
                <AnimatedSocialButtons socialLinks={member.socialLinks} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle>Metodología de Trabajo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Organización:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Reuniones diarias de seguimiento</li>
                <li>División de tareas por especialidad</li>
                <li>Revisión de código en equipo</li>
                <li>Documentación continua del progreso</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Herramientas:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>GitHub para control de versiones</li>
                <li>Vercel para deployment</li>
                <li>Discord para comunicación</li>
                <li>Figma para diseño colaborativo</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

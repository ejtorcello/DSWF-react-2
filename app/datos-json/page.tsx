"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Search, Star, Filter, Grid, List, Clock, Award } from "lucide-react"

// Datos JSON locales - 25+ objetos con más variedad
const moviesData = [
  {
    id: 1,
    title: "El Padrino",
    year: 1972,
    genre: "Drama",
    director: "Francis Ford Coppola",
    rating: 9.2,
    duration: 175,
    description: "La historia de una familia de la mafia italiana en Nueva York.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 3,
  },
  {
    id: 2,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crimen",
    director: "Quentin Tarantino",
    rating: 8.9,
    duration: 154,
    description: "Historias entrelazadas de crimen en Los Ángeles.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 1,
  },
  {
    id: 3,
    title: "El Señor de los Anillos: El Retorno del Rey",
    year: 2003,
    genre: "Fantasía",
    director: "Peter Jackson",
    rating: 8.9,
    duration: 201,
    description: "La batalla final por la Tierra Media.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Nueva Zelanda",
    language: "Inglés",
    awards: 11,
  },
  {
    id: 4,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    director: "Robert Zemeckis",
    rating: 8.8,
    duration: 142,
    description: "La extraordinaria vida de un hombre simple.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 6,
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    genre: "Ciencia Ficción",
    director: "Christopher Nolan",
    rating: 8.8,
    duration: 148,
    description: "Un ladrón que roba secretos del subconsciente.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 4,
  },
  {
    id: 6,
    title: "Matrix",
    year: 1999,
    genre: "Ciencia Ficción",
    director: "Lana Wachowski",
    rating: 8.7,
    duration: 136,
    description: "Un programador descubre la realidad de su mundo.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 4,
  },
  {
    id: 7,
    title: "Goodfellas",
    year: 1990,
    genre: "Crimen",
    director: "Martin Scorsese",
    rating: 8.7,
    duration: 146,
    description: "La vida en la mafia desde adentro.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 1,
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    genre: "Ciencia Ficción",
    director: "Christopher Nolan",
    rating: 8.6,
    duration: 169,
    description: "Un viaje a través del espacio y el tiempo.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 1,
  },
  {
    id: 9,
    title: "El Club de la Pelea",
    year: 1999,
    genre: "Drama",
    director: "David Fincher",
    rating: 8.8,
    duration: 139,
    description: "Un empleado insomne forma un club de pelea clandestino.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 0,
  },
  {
    id: 10,
    title: "El Silencio de los Corderos",
    year: 1991,
    genre: "Thriller",
    director: "Jonathan Demme",
    rating: 8.6,
    duration: 118,
    description: "Una agente del FBI busca ayuda de un asesino en serie.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 5,
  },
  {
    id: 11,
    title: "Schindler's List",
    year: 1993,
    genre: "Drama",
    director: "Steven Spielberg",
    rating: 8.9,
    duration: 195,
    description: "La historia real de Oskar Schindler durante el Holocausto.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 7,
  },
  {
    id: 12,
    title: "Casablanca",
    year: 1942,
    genre: "Romance",
    director: "Michael Curtiz",
    rating: 8.5,
    duration: 102,
    description: "Romance en tiempos de guerra en Marruecos.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 3,
  },
  {
    id: 13,
    title: "Ciudadano Kane",
    year: 1941,
    genre: "Drama",
    director: "Orson Welles",
    rating: 8.4,
    duration: 119,
    description: "La vida y muerte de un magnate de los medios.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 1,
  },
  {
    id: 14,
    title: "Apocalypse Now",
    year: 1979,
    genre: "Guerra",
    director: "Francis Ford Coppola",
    rating: 8.4,
    duration: 147,
    description: "Un viaje al corazón de las tinieblas en Vietnam.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 2,
  },
  {
    id: 15,
    title: "Taxi Driver",
    year: 1976,
    genre: "Drama",
    director: "Martin Scorsese",
    rating: 8.3,
    duration: 114,
    description: "Un taxista solitario en las calles de Nueva York.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 0,
  },
  {
    id: 16,
    title: "Vertigo",
    year: 1958,
    genre: "Thriller",
    director: "Alfred Hitchcock",
    rating: 8.3,
    duration: 128,
    description: "Un detective con acrofobia investiga a una mujer misteriosa.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 0,
  },
  {
    id: 17,
    title: "Psycho",
    year: 1960,
    genre: "Horror",
    director: "Alfred Hitchcock",
    rating: 8.5,
    duration: 109,
    description: "Una secretaria roba dinero y se hospeda en un motel siniestro.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 0,
  },
  {
    id: 18,
    title: "Singin' in the Rain",
    year: 1952,
    genre: "Musical",
    director: "Gene Kelly",
    rating: 8.3,
    duration: 103,
    description: "La transición del cine mudo al sonoro en Hollywood.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Estados Unidos",
    language: "Inglés",
    awards: 0,
  },
  {
    id: 19,
    title: "Lawrence de Arabia",
    year: 1962,
    genre: "Aventura",
    director: "David Lean",
    rating: 8.3,
    duration: 228,
    description: "La historia épica de T.E. Lawrence en el desierto árabe.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Reino Unido",
    language: "Inglés",
    awards: 7,
  },
  {
    id: 20,
    title: "2001: Una Odisea del Espacio",
    year: 1968,
    genre: "Ciencia Ficción",
    director: "Stanley Kubrick",
    rating: 8.3,
    duration: 149,
    description: "Un viaje épico a través del espacio y la evolución humana.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Reino Unido",
    language: "Inglés",
    awards: 1,
  },
  {
    id: 21,
    title: "Amélie",
    year: 2001,
    genre: "Romance",
    director: "Jean-Pierre Jeunet",
    rating: 8.3,
    duration: 122,
    description: "Una joven parisina decide ayudar a quienes la rodean.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Francia",
    language: "Francés",
    awards: 0,
  },
  {
    id: 22,
    title: "Seven Samurai",
    year: 1954,
    genre: "Aventura",
    director: "Akira Kurosawa",
    rating: 8.6,
    duration: 207,
    description: "Siete samuráis defienden una aldea de bandidos.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Japón",
    language: "Japonés",
    awards: 0,
  },
  {
    id: 23,
    title: "8½",
    year: 1963,
    genre: "Drama",
    director: "Federico Fellini",
    rating: 8.0,
    duration: 138,
    description: "Un director de cine lucha con su bloqueo creativo.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Italia",
    language: "Italiano",
    awards: 2,
  },
  {
    id: 24,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    director: "Bong Joon-ho",
    rating: 8.5,
    duration: 132,
    description: "Una familia pobre se infiltra en la vida de una familia rica.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Corea del Sur",
    language: "Coreano",
    awards: 4,
  },
  {
    id: 25,
    title: "La Dolce Vita",
    year: 1960,
    genre: "Drama",
    director: "Federico Fellini",
    rating: 8.0,
    duration: 174,
    description: "Un periodista busca amor y felicidad en la Roma de los 60.",
    poster: "/placeholder.svg?height=300&width=200",
    country: "Italia",
    language: "Italiano",
    awards: 1,
  },
]

export default function DatosJsonPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [selectedDecade, setSelectedDecade] = useState("all")
  const [sortBy, setSortBy] = useState("title")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [ratingRange, setRatingRange] = useState([0, 10])
  const [durationRange, setDurationRange] = useState([0, 250])
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  // Extraer opciones únicas para los filtros
  const filterOptions = useMemo(() => {
    const genres = [...new Set(moviesData.map((movie) => movie.genre))].sort()
    const countries = [...new Set(moviesData.map((movie) => movie.country))].sort()
    const languages = [...new Set(moviesData.map((movie) => movie.language))].sort()
    const decades = [...new Set(moviesData.map((movie) => Math.floor(movie.year / 10) * 10))].sort()

    return { genres, countries, languages, decades }
  }, [])

  // Filtrar y ordenar películas
  const filteredMovies = useMemo(() => {
    let filtered = moviesData

    // Filtro por búsqueda de texto
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchLower) ||
          movie.director.toLowerCase().includes(searchLower) ||
          movie.description.toLowerCase().includes(searchLower) ||
          movie.genre.toLowerCase().includes(searchLower),
      )
    }

    // Filtros por categorías
    if (selectedGenre !== "all") {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre)
    }

    if (selectedCountry !== "all") {
      filtered = filtered.filter((movie) => movie.country === selectedCountry)
    }

    if (selectedLanguage !== "all") {
      filtered = filtered.filter((movie) => movie.language === selectedLanguage)
    }

    if (selectedDecade !== "all") {
      const decade = Number.parseInt(selectedDecade)
      filtered = filtered.filter((movie) => Math.floor(movie.year / 10) * 10 === decade)
    }

    // Filtros por rango
    filtered = filtered.filter(
      (movie) =>
        movie.rating >= ratingRange[0] &&
        movie.rating <= ratingRange[1] &&
        movie.duration >= durationRange[0] &&
        movie.duration <= durationRange[1],
    )

    // Ordenamiento
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "year":
          return b.year - a.year
        case "rating":
          return b.rating - a.rating
        case "duration":
          return b.duration - a.duration
        case "awards":
          return b.awards - a.awards
        case "title":
        default:
          return a.title.localeCompare(b.title)
      }
    })

    return filtered
  }, [searchTerm, selectedGenre, selectedCountry, selectedLanguage, selectedDecade, sortBy, ratingRange, durationRange])

  // Estadísticas calculadas
  const stats = useMemo(() => {
    return {
      total: filteredMovies.length,
      avgRating:
        filteredMovies.length > 0
          ? Math.round((filteredMovies.reduce((acc, movie) => acc + movie.rating, 0) / filteredMovies.length) * 10) / 10
          : 0,
      avgDuration:
        filteredMovies.length > 0
          ? Math.round(filteredMovies.reduce((acc, movie) => acc + movie.duration, 0) / filteredMovies.length)
          : 0,
      totalAwards: filteredMovies.reduce((acc, movie) => acc + movie.awards, 0),
    }
  }, [filteredMovies])

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedGenre("all")
    setSelectedCountry("all")
    setSelectedLanguage("all")
    setSelectedDecade("all")
    setRatingRange([0, 10])
    setDurationRange([0, 250])
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Catálogo de Películas Clásicas</h1>
        <p className="text-xl text-gray-600">
          Base de datos local con {moviesData.length} películas • Búsqueda y filtrado avanzado
        </p>
      </div>

      {/* Barra de búsqueda principal */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Buscar por título, director, género o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 text-lg h-12"
            />
          </div>
        </CardContent>
      </Card>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filtros y Ordenamiento
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
                Filtros Avanzados
              </Button>
              <Button variant="outline" size="sm" onClick={clearAllFilters}>
                Limpiar Todo
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Filtros Básicos</TabsTrigger>
              <TabsTrigger value="advanced">Filtros Avanzados</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Género" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los géneros</SelectItem>
                    {filterOptions.genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedDecade} onValueChange={setSelectedDecade}>
                  <SelectTrigger>
                    <SelectValue placeholder="Década" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las décadas</SelectItem>
                    {filterOptions.decades.map((decade) => (
                      <SelectItem key={decade} value={decade.toString()}>
                        {decade}s
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Título A-Z</SelectItem>
                    <SelectItem value="year">Año (más reciente)</SelectItem>
                    <SelectItem value="rating">Calificación (mayor)</SelectItem>
                    <SelectItem value="duration">Duración (mayor)</SelectItem>
                    <SelectItem value="awards">Premios (más)</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">País de origen</label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar país" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los países</SelectItem>
                        {filterOptions.countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Idioma</label>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los idiomas</SelectItem>
                        {filterOptions.languages.map((language) => (
                          <SelectItem key={language} value={language}>
                            {language}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Calificación: {ratingRange[0]} - {ratingRange[1]}
                    </label>
                    <Slider
                      value={ratingRange}
                      onValueChange={setRatingRange}
                      max={10}
                      min={0}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Duración: {durationRange[0]} - {durationRange[1]} min
                    </label>
                    <Slider
                      value={durationRange}
                      onValueChange={setDurationRange}
                      max={250}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <p className="text-sm text-gray-600">Películas encontradas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600 flex items-center justify-center gap-1">
              <Star className="w-5 h-5" />
              {stats.avgRating}
            </div>
            <p className="text-sm text-gray-600">Calificación promedio</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600 flex items-center justify-center gap-1">
              <Clock className="w-5 h-5" />
              {stats.avgDuration}
            </div>
            <p className="text-sm text-gray-600">Duración promedio (min)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 flex items-center justify-center gap-1">
              <Award className="w-5 h-5" />
              {stats.totalAwards}
            </div>
            <p className="text-sm text-gray-600">Total de premios</p>
          </CardContent>
        </Card>
      </div>

      {/* Resultados */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <Card key={movie.id} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-[2/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg flex items-center justify-center relative">
                  <span className="text-4xl">🎬</span>
                  {movie.awards > 0 && (
                    <Badge className="absolute top-2 right-2 bg-yellow-500">
                      <Award className="w-3 h-3 mr-1" />
                      {movie.awards}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div>
                  <CardTitle className="text-lg line-clamp-2">{movie.title}</CardTitle>
                  <CardDescription>
                    {movie.year} • {movie.director}
                  </CardDescription>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{movie.genre}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{movie.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-3">{movie.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {movie.duration}min
                    </span>
                    <span>{movie.language}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver más
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredMovies.map((movie) => (
            <Card key={movie.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-36 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{movie.title}</h3>
                        <p className="text-gray-600">
                          {movie.year} • {movie.director} • {movie.country}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{movie.rating}</span>
                        </div>
                        {movie.awards > 0 && (
                          <Badge variant="outline">
                            <Award className="w-3 h-3 mr-1" />
                            {movie.awards} premios
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Badge>{movie.genre}</Badge>
                      <Badge variant="outline">{movie.language}</Badge>
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {movie.duration} min
                      </Badge>
                    </div>

                    <p className="text-gray-700">{movie.description}</p>

                    <Button variant="outline" size="sm">
                      Ver detalles completos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredMovies.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron películas</h3>
            <p className="text-gray-500 mb-4">No hay películas que coincidan con los filtros seleccionados.</p>
            <Button onClick={clearAllFilters}>Limpiar todos los filtros</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  Camera,
  Building,
  Grid,
  Clock,
} from "lucide-react"

export default function EzebuluegoWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxContent, setLightboxContent] = useState<{ type: string; src: string; title?: string }>({
    type: "",
    src: "",
  })
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      name: "Architecture",
      icon: "🏛️",
      description:
        "Our architectural services blend aesthetics with functionality, creating spaces that inspire and endure. From concept to completion, we transform your vision into reality.",
    },
    {
      name: "Engineering",
      icon: "⚙️",
      description:
        "With cutting-edge engineering solutions, we tackle complex challenges with precision and innovation. Our team ensures structural integrity and optimal performance.",
    },
    {
      name: "Electrical Installation",
      icon: "💡",
      description:
        "Our electrical installations prioritize safety, efficiency, and sustainability. We design systems that power your space reliably while minimizing environmental impact.",
    },
    {
      name: "Building",
      icon: "🏗️",
      description:
        "From residential homes to commercial complexes, our building services deliver quality construction with meticulous attention to detail and superior craftsmanship.",
    },
    {
      name: "Surveying",
      icon: "📏",
      description:
        "Our surveying team provides accurate land measurements and assessments, creating the foundation for successful construction projects with precision and expertise.",
    },
    {
      name: "Borehole Drilling/Servicing",
      icon: "💧",
      description:
        "We deliver reliable water solutions through expert borehole drilling and maintenance services, ensuring sustainable access to clean water for your property.",
    },
    {
      name: "General Contractors",
      icon: "🔨",
      description:
        "As general contractors, we orchestrate every aspect of your project, coordinating specialists and resources to deliver exceptional results on time and within budget.",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Residential Villa",
      description:
        "Luxury residential building with contemporary architecture, premium finishes, and energy-efficient design elements.",
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-14%20at%2011.16.56_d8058c3e.jpg-fHOkXqBm7Mb0YgtErGCPz9FGEDKXXD.jpeg",
      category: "residential",
    },
    {
      id: 2,
      title: "Multi-story Apartment Complex",
      description: "Four-story apartment complex with multiple units, modern amenities, and structural excellence.",
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-14%20at%2011.17.46_6fa1b9ce.jpg-mJZ5fudmhKNyTP9zLODhtkk0U2xNM1.jpeg",
      category: "commercial",
    },
    {
      id: 3,
      title: "Construction Progress",
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-05-14%20at%2011.17.45_2ecde7df-8ASDAAaxDxcmwWRxwxSpKV39M1F7vM.mp4",
      category: "in-progress",
    },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-14%20at%2011.16.56_d8058c3e.jpg-fHOkXqBm7Mb0YgtErGCPz9FGEDKXXD.jpeg",
      alt: "Modern residential building with elegant design",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-14%20at%2011.17.46_6fa1b9ce.jpg-mJZ5fudmhKNyTP9zLODhtkk0U2xNM1.jpeg",
      alt: "Apartment complex under construction",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Interior design project",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Commercial building project",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Residential property",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Construction site",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Property Developer",
      content:
        "Ezebuluego Engineering Concepts delivered our project on time and within budget. Their attention to detail and quality of work is exceptional. The team's innovative approach to problem-solving made a complex project seem effortless.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Homeowner",
      content:
        "We are extremely satisfied with our new home built by Ezebuluego Engineering. The team was professional, responsive, and the craftsmanship is outstanding. They transformed our dream into a beautiful reality that exceeded our expectations.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Commercial Client",
      content:
        "From concept to completion, Ezebuluego Engineering handled our commercial building project with expertise and professionalism. Their innovative solutions saved us both time and money while delivering exceptional quality. Highly recommended!",
    },
  ]

  const stats = [
    { value: "10+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { value: "100+", label: "Projects Completed", icon: <Building className="w-6 h-6" /> },
    { value: "50+", label: "Happy Clients", icon: <Grid className="w-6 h-6" /> },
    { value: "25+", label: "Expert Team Members", icon: <Camera className="w-6 h-6" /> },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying, testimonials.length])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      const sections = [
        { ref: null, id: "home" }, // Home section doesn't have a ref
        { ref: aboutRef, id: "about" },
        { ref: servicesRef, id: "services" },
        { ref: projectsRef, id: "projects" },
        { ref: galleryRef, id: "gallery" },
        { ref: contactRef, id: "contact" },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (!section.ref && i === 0) {
          if (scrollPosition < (aboutRef.current?.offsetTop || 0)) {
            setActiveSection("home")
            break
          }
        } else if (section.ref?.current && scrollPosition >= section.ref.current.offsetTop) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Auto-rotate gallery images
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setIsMenuOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openLightbox = (type: string, src: string, title?: string) => {
    setLightboxContent({ type, src, title })
    setLightboxOpen(true)
    if (type === "video" && videoRef.current) {
      videoRef.current.play()
    }
  }

  const closeLightbox = () => {
    if (lightboxContent.type === "video" && videoRef.current) {
      videoRef.current.pause()
    }
    setLightboxOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezebuluego-logo-kTcXhNdmH9aihjid3H5DTqQF0J8sgt.png"
              alt="Ezebuluego Engineering Concepts"
              width={50}
              height={50}
              className="mr-3"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-red-700">Ezebuluego</h1>
              <p className="text-sm text-gray-600">Engineering Concepts Ltd.</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => handleNavClick("home")}
              className={`${activeSection === "home" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`${activeSection === "about" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className={`${activeSection === "services" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className={`${activeSection === "projects" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              className={`${activeSection === "gallery" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`${activeSection === "contact" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors`}
            >
              Contact
            </button>
          </nav>

          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("home")}
                className={`${activeSection === "home" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors text-left`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className={`${activeSection === "about" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors text-left`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className={`${activeSection === "services" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors text-left`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className={`${activeSection === "projects" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors text-left`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("gallery")}
                className={`${activeSection === "gallery" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors text-left`}
              >
                Gallery
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className={`${activeSection === "contact" ? "text-red-700 font-semibold" : "text-gray-600"} hover:text-red-700 transition-colors text-left`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-red-700 to-red-900 text-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div
            className="absolute w-64 h-64 rounded-full bg-white top-10 left-10 animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute w-32 h-32 rounded-full bg-white bottom-10 right-10 animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="absolute w-48 h-48 rounded-full bg-white top-1/2 left-1/3 animate-pulse"
            style={{ animationDuration: "5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Building Your Vision, Engineering Excellence</h1>
            <p className="text-lg mb-6">
              Ezebuluego Engineering Concepts Ltd. is your trusted partner for all construction and engineering needs.
              We transform ideas into impressive structures with precision and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNavClick("services")}
                className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors transform hover:scale-105 duration-300 flex items-center justify-center"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-6 py-3 rounded-md font-semibold transition-all transform hover:scale-105 duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-in slide-in-from-right duration-700">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-pulse" style={{ animationDuration: "3s" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezebuluego-logo-kTcXhNdmH9aihjid3H5DTqQF0J8sgt.png"
                alt="Ezebuluego Engineering Concepts"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">About Us</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-in slide-in-from-left duration-700 delay-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-14%20at%2011.11.35_e3d3d46c.jpg-pPlKPvFkoyxDLfw5VTV0hqjZsQLRUP.jpeg"
                alt="About Ezebuluego Engineering"
                width={500}
                height={600}
                className="rounded-lg shadow-lg mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 animate-in slide-in-from-right duration-700 delay-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence in Engineering & Construction</h3>
              <p className="text-gray-600 mb-4">
                At Ezebuluego Engineering Concepts Ltd., we don't just build structures – we craft legacies that stand
                the test of time. Our passion for excellence drives us to push boundaries and redefine what's possible
                in construction and engineering.
              </p>
              <p className="text-gray-600 mb-4">
                With years of experience in the industry, we have established ourselves as a trusted partner for
                architectural design, engineering, electrical installations, building construction, surveying, borehole
                drilling, and general contracting services.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of highly skilled professionals approaches each project with creativity, precision, and
                unwavering commitment to quality. We believe in building relationships as strong as our structures,
                ensuring client satisfaction at every step.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-red-700">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of construction and engineering services, combining technical expertise
              with creative solutions to exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-red-700 transform hover:-translate-y-2 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-700 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Projects</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of completed and ongoing construction and engineering projects that showcase our
              commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${project.type === "video" ? "col-span-1 md:col-span-3" : ""}`}
              >
                <div
                  className={`relative ${project.type === "video" ? "h-64 md:h-96" : "h-64"} cursor-pointer`}
                  onClick={() => openLightbox(project.type, project.src, project.title)}
                >
                  {project.type === "image" ? (
                    <Image src={project.src || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  ) : (
                    <>
                      <video width="100%" height="100%" className="object-cover w-full h-full" muted playsInline>
                        <source src={project.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-700 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <Play size={30} className="text-white ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {project.type === "image" && (
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <button
                      onClick={() => openLightbox(project.type, project.src, project.title)}
                      className="mt-4 text-red-700 font-semibold hover:text-red-800 transition-colors flex items-center group"
                    >
                      View Project
                      <ChevronRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Image Gallery</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of images showcasing our diverse projects and construction expertise.
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Featured image */}
            <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-xl animate-in fade-in duration-700">
              <Image
                src={galleryImages[currentGalleryIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentGalleryIndex].alt}
                fill
                className="object-cover transition-transform duration-1000 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-semibold">{galleryImages[currentGalleryIndex].alt}</p>
                </div>
              </div>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative h-40 md:h-48 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox("image", image.src, image.alt)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white">
                      <Camera size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
                      <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mr-4">
                          <span className="font-bold text-lg">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-200">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-white w-6" : "bg-white bg-opacity-40 hover:bg-opacity-60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                aria-label={isPlaying ? "Pause testimonials" : "Play testimonials"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to bring your construction vision to life? Get in touch with our team of experts to discuss your
              project requirements and how we can help.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 animate-in slide-in-from-left duration-700 delay-300">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-700 text-white hover:bg-red-800 px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 animate-in slide-in-from-right duration-700 delay-300">
              <div className="bg-gray-50 p-8 rounded-lg h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600 hover:text-red-700 transition-colors duration-300">+234 8161661391</p>
                      <p className="text-gray-600 hover:text-red-700 transition-colors duration-300">+234 7036544901</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600 hover:text-red-700 transition-colors duration-300">
                        ezebuluego25@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Head Office</h4>
                      <p className="text-gray-600">Flat 1 Ogbugo Compound (Worldman house)</p>
                      <p className="text-gray-600">1 Oranto Crescent, Ukpo Anambra State</p>

                      <h4 className="font-semibold text-gray-800 mt-4 mb-1">Branch Office</h4>
                      <p className="text-gray-600">JN Madubo Street, Nodu Awka.</p>
                      <p className="text-gray-600">1 Yakubu Daniel Onireke, Ojo Barracks, Lagos State.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezebuluego-logo-kTcXhNdmH9aihjid3H5DTqQF0J8sgt.png"
                  alt="Ezebuluego Engineering Concepts"
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">Ezebuluego</h3>
                  <p className="text-sm text-gray-400">Engineering Concepts Ltd.</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Building your vision with engineering excellence. Your trusted partner for all construction and
                engineering needs. We transform ideas into impressive structures with precision and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleNavClick("home")}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("about")}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("services")}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("projects")}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("gallery")}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      Gallery
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("contact")}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      Architecture
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Engineering</span>
                  </li>
                  <li>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      Electrical Installation
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Building</span>
                  </li>
                  <li>
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Surveying</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400 group">
                    <Phone size={16} className="mr-2 group-hover:text-red-500 transition-colors duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">+234 8161661391</span>
                  </li>
                  <li className="flex items-center text-gray-400 group">
                    <Mail size={16} className="mr-2 group-hover:text-red-500 transition-colors duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">
                      ezebuluego25@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Ezebuluego Engineering Concepts Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors transform hover:scale-110 duration-300"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl max-h-[80vh] w-full">
            {lightboxContent.type === "image" ? (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={lightboxContent.src || "/placeholder.svg"}
                  alt={lightboxContent.title || "Project"}
                  fill
                  className="object-contain"
                />
                {lightboxContent.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-xl font-bold">{lightboxContent.title}</h3>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <video ref={videoRef} controls className="w-full max-h-[80vh]">
                  <source src={lightboxContent.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {lightboxContent.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-xl font-bold">{lightboxContent.title}</h3>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

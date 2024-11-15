"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { FaGithub, FaInstagram, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { ChevronRight, Pyramid, ExternalLink, Coffee, PenTool, Rocket, MessageSquare, Code, Palette, Wrench, Search, Server } from 'lucide-react'
import PyramidScene from '../components/pyramid-scene'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from 'next/link'
import GalaxyJourney from './GalaxyJourney'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'

export default function Home() { 
  const [showGalaxyJourney, setShowGalaxyJourney] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const carouselControls = useAnimation()

  const startGalaxyJourney = () => {
    setShowGalaxyJourney(true)
    setTimeout(() => {
      setShowGalaxyJourney(false)
    }, 30000)
  }

  
 
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      name: "nonext.io",
      description: "nonext is a sleek one-pager showcasing our top projects. It’s a simple and intuitive gateway to explore our work and collaborations.",
      image: "/Projekt1.png",
      url: "https://nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "Three.js", "motion"]
    },
    {
      name: "Fränkis Pub",
      description: "A modern, mobile-friendly site for Fränkis Pub. Discover events, browse the menu, and connect with your favorite local spot.",
      image: "/Projekt2.png",
      url: "https://fraenkis.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"]
    },
    {
      name: "Reality Break",
      description: "The official site for Reality Break, featuring music, tour info, and band members. A seamless way for fans to connect with the band.",
      image: "/Projekt3.png",
      url: "https://reality-break.nonext.io",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "motion"]
    }
  ]

  const processSteps = [
    {
      icon: <Coffee className="w-12 h-12 mb-4" />,
      title: "Initial Consultation",
      description: "We meet with you to discuss your vision, goals, and requirements for the project."
    },
    {
      icon: <PenTool className="w-12 h-12 mb-4" />,
      title: "Design & Planning",
      description: "Our team creates detailed wireframes and designs based on your input and feedback."
    },
    {
      icon: <Rocket className="w-12 h-12 mb-4" />,
      title: "Development & Testing",
      description: "We build your website using cutting-edge technologies, ensuring a smooth and responsive experience."
    },
    {
      icon: <MessageSquare className="w-12 h-12 mb-4" />,
      title: "Review & Refinement",
      description: "We present the finished product and make any necessary adjustments based on your feedback."
    }
  ]

  const customerLogos = [
    { name: "Customer 1", logo: "/nohell.png" },
    { name: "Customer 2", logo: "/nohell.png" },
    { name: "Customer 3", logo: "/nohell.png" },
    { name: "Customer 4", logo: "/nohell.png" },
    { name: "Customer 5", logo: "/nohell.png" },
    { name: "Customer 6", logo: "/nohell.png" },
    { name: "Customer 7", logo: "/nohell.png" },
    { name: "Customer 8", logo: "/nohell.png" }
  ]

  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "We primarily use modern web technologies such as React, Next.js, and Tailwind CSS. We also have experience with various backend technologies and databases."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines can vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months or more."
    },
    {
      question: "Do you offer ongoing support after the website is launched?",
      answer: "Yes, we offer maintenance packages to keep your website up-to-date, secure, and running smoothly after launch."
    },
    {
      question: "Can you help with content creation for my website?",
      answer: "While we don't provide full content creation services, we can guide you on best practices and help integrate your content into the website design effectively."
    }
  ]

  useEffect(() => {
    const animateCarousel = async () => {
      if (carouselRef.current) {
        const width = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        await carouselControls.start({
          x: -width,
          transition: { duration: 40, ease: "linear" }
        })
        carouselControls.set({ x: 0 })
        animateCarousel()
      }
    }

    animateCarousel()
  }, [carouselControls])

  

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence mode="wait">
        {showGalaxyJourney ? (
          <>
            <motion.div
              key="black-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              key="galaxy-journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="fixed inset-0 z-50"
            >
              <GalaxyJourney />
            </motion.div>
          </>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-black text-white min-h-screen font-sans"
          >
            <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-md">
              <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <motion.h1
                  className="text-2xl font-bold flex items-center space-x-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Pyramid className="w-6 h-6 relative top-1" />
                  <span>nonext</span>
                </motion.h1>

                <motion.ul
                  className="flex space-x-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
                  <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
                  <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
                </motion.ul>
              </nav>
            </header>

            <main>
              
              <Hero />

              <About />

              <Services />

              <section id="projects" className="py-20 px-4 bg-white text-black">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Our Projects
                  </motion.h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projects.map((project, index) => (
                      <Card
                        key={index}
                        className="bg-white text-black overflow-hidden transition-all duration-300 transform hover:scale-105 border border-gray-200"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <CardContent className="p-0 group">
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-110 filter grayscale"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center sm:opacity-0 group-hover:opacity-100 opacity-100 transition-opacity duration-300">
                              <Button
                                variant="outline"
                                className="text-black border-white hover:bg-white hover:text-black"
                                onClick={() => window.open(project.url, '_blank')}
                              >
                                View Project
                              </Button>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{tech}</span>
                              ))}
                            </div>
                            <Button
                              variant="link"
                              className="text-black hover:text-gray-600 p-0 h-auto font-normal"
                              onClick={() => window.open(project.url, '_blank')}
                            >
                              Learn more <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </div>
              </section>

              <section id="process" className="py-20 px-4 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Our Process
                  </motion.h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="flex justify-center items-center mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{index + 1 + ". " + step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              <section id="customers" className="py-20 px-4 bg-black text-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Our Customers
                  </motion.h2>
                  <motion.div
                    ref={carouselRef}
                    className="flex"
                    animate={carouselControls}
                  >
                    {[...customerLogos, ...customerLogos].map((customer, index) => (
                      <motion.div
                        key={index}
                        className="w-32 h-32 flex items-center justify-center mx-4 flex-shrink-0"
                      >
                        <img src={customer.logo} alt={customer.name} draggable={false} className="max-w-full max-h-full object-contain" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              <section id="faq" className="py-20 px-4 bg-white text-black">
                <div className="max-w-4xl mx-auto">
                  <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Frequently Asked Questions
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </div>
              </section>

              <section id="contact" className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Get in Touch
                  </motion.h2>
                  <motion.p
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Have a project in mind? Let's create something amazing together.
                  </motion.p>
                  <motion.div
                    className="flex justify-center space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaGithub /></a>
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaInstagram /></a>
                    <a href="#" className="text-2xl hover:text-gray-300 transition-colors"><FaEnvelope /></a>
                  </motion.div>
                </div>
              </section>
            </main>

            <footer className="py-6 px-4 text-center text-sm">
              <p>&copy; 2024 nonext. All rights reserved.</p>
              <button
                className="mt-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                onClick={startGalaxyJourney}
              >
                Do not click me
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
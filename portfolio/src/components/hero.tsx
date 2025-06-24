"use client"

import { useEffect, useState } from "react"
import FloatingOrbsBackground from "./FloatingOrbsBackground"

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  // On component mount, check the system preference or localStorage for theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark")
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // Fallback to system preferences
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      }
    }

    // Scroll event listener to detect the current active section
    const handleScroll = () => {
      const sections = ["home", "skills", "experience", "contact"]
      let foundSection = "home"
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const bounding = element.getBoundingClientRect()
          if (bounding.top <= window.innerHeight / 2 && bounding.bottom > 0) {
            foundSection = section
          }
        }
      }
      setActiveSection(foundSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Toggle dark mode and store the preference in localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light"
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark", !isDarkMode)
    localStorage.setItem("theme", newTheme)
  }

  // Function to scroll smoothly to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId) // Set active section immediately on click
    }
  }

  return (
    <div
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-foreground relative overflow-hidden"
    >
      <FloatingOrbsBackground />
      {/* Header */}
      <header className="w-full fixed top-0 mr-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md flex justify-center z-50 shadow-sm border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="w-full max-w-6xl flex justify-between px-4 sm:px-8 py-2 sm:py-3 items-center min-h-12">
          <div className="ml-0 space-x-4">
            <button onClick={toggleTheme} className="text-base focus:outline-none hover:scale-110 transition-transform">
              {isDarkMode ? "🌞" : "🌙"}
            </button>
          </div>
          <nav>
            <ul className="flex space-x-3 sm:space-x-6 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
              <li>
                <button
                  className={`hover:text-blue-500 transition-colors duration-200 ${activeSection === "home" ? "text-black dark:text-white font-bold" : ""}`}
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`hover:text-blue-500 transition-colors duration-200 ${activeSection === "skills" ? "text-black dark:text-white font-bold" : ""}`}
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  className={`hover:text-blue-500 transition-colors duration-200 ${activeSection === "education" ? "text-black dark:text-white font-bold" : ""}`}
                  onClick={() => scrollToSection("education")}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  className={`hover:text-blue-500 transition-colors duration-200 ${activeSection === "experience" ? "text-black dark:text-white font-bold" : ""}`}
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  className={`hover:text-blue-500 transition-colors duration-200 ${activeSection === "projects" ? "text-black dark:text-white font-bold" : ""}`}
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className={`hover:text-blue-500 transition-colors duration-200 ${activeSection === "contact" ? "text-black dark:text-white font-bold" : ""}`}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="text-center mt-16 sm:mt-16 flex-grow flex flex-col justify-center items-center w-full px-4 mb-16 relative z-10">
        {/* Profile Image */}
        <img
          src="/assets/images/profile.jpg"
          alt="Judy Mumbi Njenga profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 shadow-lg object-cover border-4 border-blue-500 dark:border-blue-400 hover:scale-105 transition-transform duration-300"
        />
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">Hey, I&apos;m</p>
        <h1 className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2 hover:scale-105 transition-transform duration-300">
          Judy Mumbi Njenga
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          I&apos;m a professional computer scientist with a strong academic background and hands-on experience in
          software development. Skilled in Java, Python, and web technologies, I bring a problem-solving mindset and a
          commitment to excellence. Additionally, I&apos;m proficient in operating systems like Windows, macOS, and
          Linux, and have expertise in using the Microsoft Office Suite.
        </p>

        {/* Call to Action Button */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 text-base sm:text-lg"
          >
            Let's Work Together
          </button>
        </div>      
      </main>
    </div>
  )
}

export default Hero

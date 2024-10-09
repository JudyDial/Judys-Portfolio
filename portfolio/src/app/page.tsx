"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Projects from "./projects/page"; // Import the Projects page
import Contact from "./contact/page"; // Import the Contact page
import Skills from "../components/Skills"; // Add this component to src/components/Skills.tsx
import Testimonials from "../components/Testimonials"; // Add this component to src/components/Testimonials.tsx
import Education from "../components/Education";
import Experience from "../components/Experience"; // Add Experience component

const phrases = [
  "I am a Web App Developer",
  "I am a Data Specialist",
  "I am a Full Stack Developer",
  "I am a Problem Solver",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar state

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      {/* Main content */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* NavBar */}
        <NavBar isCollapsed={isCollapsed} />

        {/* Section 1: Animated Phrases */}
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-blue-100 pt-16"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1], // Easing function for smoother transitions
              }}
            >
              {phrases[index]}
            </motion.h1>
          </AnimatePresence>
        </section>

        {/* Section 2: Skills */}
        <section id="skills" className="bg-white p-10">
          <Skills /> {/* Skills component */}
        </section>

        {/* Section 3: Education */}
        <section id="education" className="bg-gray-100 p-10">
          <Education /> {/* Education component */}
        </section>

        {/* Section 4: Experience */}
        <section id="experience" className="bg-white p-10">
          <Experience /> {/* Experience component */}
        </section>

        {/* Section 5: Projects */}
        <section id="projects" className="bg-gray-100 p-10">
          <Projects /> {/* Projects component */}
        </section>

        {/* Section 6: Testimonials */}
        <section id="testimonials" className="bg-gray-200 p-10">
          <Testimonials /> {/* Testimonials component */}
        </section>

        {/* Section 7: Contact */}
        <section id="contact" className="bg-white p-10">
          <Contact /> {/* Contact component */}
        </section>
      </div>
    </div>
  );
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import FloatingOrbsBackground from "./FloatingOrbsBackground"

export default function EducationSection() {
  const education = [
    {
      institution: "Murang'a University of Technology",
      degree: "Bachelor of Science in Computer Technology",
      duration: "2020 - 2024",
      location: "Murang'a, Kenya",
      coursework: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering"],
    },
  ]

  const certifications = [
    {
      name: "Introduction to IoT and digital transformations ",
      issuer: "Cisco Networking Academy ",
      date: "2023.10",
    },
    {
      name: "Networking Devices and Initial Configurations ",
      issuer: "Cisco Networking Academy ",
      date: "2023.11",
    },
    {
      name: "Operating systems basics ",
      issuer: "Cisco Networking Academy ",
      date: "2023.11",
    },
  ]

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-foreground overflow-hidden">
      <FloatingOrbsBackground />
      <section id="education" className="py-12 px-2 sm:px-4 md:px-8 w-full scroll-mt-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Education & Certifications
            </h2>            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic background and professional certifications
            </p>
          </div>

          {/* Education */}
          <div className="mb-10 md:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              Education
            </h3>
            <div className="space-y-5 sm:space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="w-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                      <div>
                        <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-gray-100">{edu.degree}</CardTitle>
                        <p className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 md:gap-2">
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs sm:text-sm">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span className="text-xs sm:text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 sm:mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="text-[10px] sm:text-xs dark:bg-gray-700 dark:text-gray-100">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="w-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500 dark:bg-gray-800 dark:border-l-blue-400 dark:border-gray-700">
                  <CardHeader className="pb-2 sm:pb-3">
                    <CardTitle className="text-base sm:text-lg dark:text-gray-100">{cert.name}</CardTitle>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">Issued: {cert.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

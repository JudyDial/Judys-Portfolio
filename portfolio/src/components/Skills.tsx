"use client"

import { Badge } from "@/src/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Palette, Smartphone, GitBranch, Server } from "lucide-react"
import FloatingOrbsBackground from "./FloatingOrbsBackground"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      color: "border-blue-200 bg-blue-50 hover:bg-blue-100",
    },
    {
      title: "Backend Development and Database",
      icon: Server,
      skills: ["Django", "Node.js", "Python", "PostgreSQL", "MySQL", "SQLite", "REST APIs"],
      color: "border-green-200 bg-green-50 hover:bg-green-100",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "iOS", "Android", "Expo"],
      color: "border-purple-200 bg-purple-50 hover:bg-purple-100",
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: ["Git", "Docker", "AWS", "VS Code", "Github", "Postman", "Figma", "Jira"],
      color: "border-orange-200 bg-orange-50 hover:bg-orange-100",
    },
  ]

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-foreground overflow-hidden">
      <FloatingOrbsBackground />
      <section className="py-16 px-2 sm:px-4 md:px-8 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
            </h2>            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`${category.color} border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 dark:bg-gray-800 dark:border-gray-700 w-full`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg dark:text-gray-100">
                    <div className="p-2 bg-white/70 dark:bg-gray-900/70 rounded-lg">
                      <category.icon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-white/80 hover:bg-white dark:bg-gray-700 dark:text-gray-100 transition-colors cursor-default text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import Image from "next/image"
import FloatingOrbsBackground from "./FloatingOrbsBackground"

const projects = [
  	{
		title: "Portfolio Website",
		description:
			"A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.",
		techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
		imageUrl: "/assets/images/portfolioImage.png",
		liveDemo: "https://judys-portfolio.vercel.app/",
		Github: "https://github.com/JudyDial/Judys-Portfolio.git",
	},
	{
		title: "Golden Care",
		description:
		"Golden Care is a mobile platform designed to simplify elderly care by helping caregivers manage health records, medication schedules, and appointments in one place.",
		techStack: ["Django", "TypeScript", "JavaScript", "PostgreSQL"],
		imageUrl: "/assets/images/GoldenCare.jpg",
		Github: "https://github.com/JudyDial/Golden-Care-2.0.git",
	},
	{
		title: "The Surveillance House",
		description:
			"This portfolio features a website built for Surveillance House, a company offering CCTV sales and installation for homes and businesses.",
		techStack: ["Django", "JavaScript", "HTML", "CSS"],
		imageUrl: "/assets/images/SurveillanceHouse.jpg",
		Github: "https://github.com/JudyDial/Surveillance-House.git",
	},
	{
		title: "TechMicro",
		description:
			"TechMicro specializes in Web and Mobile App Development, as well as Hardware Repairs and Distribution.",
		techStack: ["Django", "JavaScript", "HTML", "CSS"],
		imageUrl: "/assets/images/techMicro.png",
		Github: "https://github.com/JudyDial/Tech-Micro.git",
	},
	{
	title: "Remy Fire",
	description:
		"Remy Fire is a modern, responsive website template suitable for portfolios, businesses, and online shops.",
	techStack: ["HTML", "CSS", "JavaScript"],
	imageUrl: "/assets/images/remyFire.png", 
	Github: "https://github.com/JudyDial/remy-Fire",
	},
]

const FeaturedProjects = () => {
	return (
		<div
			id="projects"
			className="relative w-full min-h-screen py-16 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-foreground overflow-hidden"
		>
			<FloatingOrbsBackground />
			<div className="max-w-6xl mx-auto px-4 relative z-10">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						A showcase of my recent work in web development, mobile apps, and
						software solutions
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
						>
							{/* Project Image */}
							<div className="relative overflow-hidden">
								<Image
									src={project.imageUrl || "/placeholder.svg"}
									alt={project.title}
									width={400}
									height={250}
									className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								
							</div>

							{/* Project Content */}
							<div className="p-6 space-y-4">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
									{project.title}
								</h3>

								<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className="space-y-2">
									<h4 className="text-sm font-semibold text-gray-900 dark:text-white">
										Tech Stack:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.techStack.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-600"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex space-x-3 pt-4">
									
									<a
										href={project.Github}
										className="flex-1 flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 transform"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg
											className="w-4 h-4 mr-2"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View More Projects Button
				<div className="text-center mt-12">
					<a
						href="https://github.com/Nrad8394"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
					>
						<svg
							className="w-5 h-5 mr-2"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
						View All Projects on GitHub
					</a>
				</div> */}
			</div>
		</div>
	)
}

export default FeaturedProjects

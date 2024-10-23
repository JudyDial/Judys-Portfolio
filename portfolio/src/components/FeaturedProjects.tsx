"use client";

import Image from 'next/image';

const projects = [
  {
    title: 'The Surveillance House',
    description: 'This portfolio showcases a website developed for Surveillance House, a company specializing in selling and installing CCTV cameras for residential and commercial properties.The website features a user-friendly interface with easy navigation to explore various CCTV camera options, services offered, and pricing plans. It provides detailed information about the benefits of installing CCTV cameras, including enhanced security, surveillance monitoring, and deterrence of criminal activities.With a focus on usability and functionality, the website includes interactive features such as product galleries, customer testimonials, and a contact form for inquiries and consultations. The design emphasizes professionalism and reliability to instill trust and confidence in potential customers.',
    techStack: 'React - Bootstrap - Django - Styled Components',
    imageUrl: '/assets/images/SurveillanceHouse.jpg', // Replace with actual image URL
    liveDemo: '#',
    Github: 'https://github.com/Cherry-Karanja/Surveillance-House.git',
  },
  {
    title: 'TechMicro',
    description: 'TechMicro is a dedicated tech partner, specializing in top-notch Web Application Development, Mobile App Development, and efficient Hardware Repairs and Distribution services.',
    techStack: 'React - Tailwind - Django',
    imageUrl: '/assets/images/techMicro.png', // Replace with actual image URL
    liveDemo: '#',
    Github: 'https://github.com/Nrad8394/Tech-Micro.git',
  },
  {
    title: 'StreamHub',
    description: 'StreamHub is a multimedia management platform designed to simplify the organization, sharing, and exploration of user-generated content. With StreamHub, users can create and manage albums to categorize their photos and videos, collaborate with friends and family, and discover new media content through personalized recommendations. The platform offers features such as user authentication, media uploading, tagging, commenting, liking, and a recommendation system powered by advanced algorithms. Whether its capturing cherished memories, documenting adventures, or exploring the creativity of others, StreamHub provides a seamless and engaging experience for multimedia enthusiasts.',
    techStack: 'React Native  - Django',
    imageUrl: '/assets/images/SH.jpeg', // Replace with actual image URL
    liveDemo: '#',
    Github: 'https://github.com/Harmosoft/StreamHub.git',
  },
];

const FeaturedProjects = () => {
  return (
    <div className="w-full min-h-screen py-16 bg-white dark:bg-background text-gray-900 dark:text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                layout="responsive"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.techStack}</p>
                <div className="flex space-x-4">
                  <a href={project.liveDemo} className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    🔗 Live demo
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    🐱 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;

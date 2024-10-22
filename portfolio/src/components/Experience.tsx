"use client";

import { useState } from 'react';

const experiences = [
  {
    company: 'Car And General',
    title: 'Intern - IT Support',
    dates: 'May 2023 - Aug 2023',
    description:
      'Assisted in maintaining, diagnosing, and troubleshooting computer hardware and software issues. Supported the IT team in the setup, configuration, and management of network infrastructure. Provided technical support to end-users, resolving technical issues via phone, email, and in-person.',
    link: 'https://www.cargen.com/',
  },
  {
    company: 'Upwork',
    title: 'Freelancer - Software Developer',
    dates: 'Feb 2022 - Present',
    description:
      'Delivered various client projects, including web development with JavaScript frameworks, mobile apps using React Native, and software troubleshooting. Built strong client relationships, delivering on-time and within budget.',
    link: 'https://www.upwork.com/',
  },
  {
    company: 'Remotask',
    title: 'Freelancer - IT Services',
    dates: 'Feb 2022 - Present',
    description:
      'Worked on several tasks related to image annotation, data tagging, and other IT services to support AI and machine learning initiatives.',
    link: 'https://www.remotasks.com/',
  },
  {
    company: 'Harmosoft (Startup)',
    title: 'Software Developer',
    dates: 'Jun 2023 - Present',
    description:
      'Contributed to the design and development of a startup’s core software product. Responsible for building full-stack web applications, ensuring scalability, performance, and security. Collaborated with a small, agile team in a fast-paced startup environment.',
    link: '#', // Replace with an actual link to Harmosoft if available
  },
  {
    company: 'Freelance Developer',
    title: 'Freelancer',
    dates: 'Feb 2022 - Present',
    description:
      'Successfully completed various projects, ranging from web development using JavaScript to mobile applications using React Native. Established strong client relationships, receiving positive reviews for delivering solutions on time and within budget. Demonstrated expertise in hardware repair and troubleshooting.',
    link: '#', // Placeholder link (can be updated to portfolio or freelance website)
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="experience" className="min-h-screen w-full flex justify-center items-center bg-white dark:bg-background text-gray-900 dark:text-foreground">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* Left: Company List */}
        <div className="col-span-1 flex flex-col border-l-2 border-gray-300 dark:border-gray-600">
          {experiences.map((experience, index) => (
            <button
              key={experience.company}
              className={`text-left py-4 pl-4 transition-colors duration-300 ease-in-out border-l-4 ${
                index === activeIndex
                  ? 'text-black dark:text-white bg-gray-200 dark:bg-gray-700 border-l-black dark:border-l-white'
                  : 'text-gray-500 dark:text-gray-400 border-transparent'
              } hover:bg-gray-100 dark:hover:bg-gray-800`}
              onClick={() => setActiveIndex(index)}
            >
              {experience.company}
            </button>
          ))}
        </div>

        {/* Right: Job Details */}
        <div className="col-span-2">
          <h3 className="text-2xl font-semibold">
            {experiences[activeIndex].title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            <a
              href={experiences[activeIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {experiences[activeIndex].company}
            </a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {experiences[activeIndex].dates}
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {experiences[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

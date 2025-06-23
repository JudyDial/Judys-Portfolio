"use client";

import Image from 'next/image';

// Define the type for each skill item
interface Skill {
  name: string;
  logo: string;
}

// Define the type for the skillsData object
interface SkillsData {
  [category: string]: Skill[];
}

const skillsData: SkillsData = {
  "Frontend": [
    { name: 'React', logo: '/assets/images/react.png' },  // Correct path if react.png is in /public
    { name: 'JavaScript', logo: '/assets/images/js.png' },  // Correct path if javascript.png is in /public
    { name: 'Tailwind CSS', logo: '/assets/images/tailwind.png' },  // Correct path if tailwind.png is in /public
    
  ],
  "Backend": [
    { name: 'Node.js', logo: '/assets/images/node.png' },  // Correct path if nodejs.png is in /public
    { name: 'Django', logo: '/assets/images/django.png' },  // Correct path if django.png is in /public
    { name: 'Express', logo: '/assets/images/express.png' },  // Correct path if express.png is in /public
  ],
  "DB Management": [
    { name: 'MySQL', logo: '/assets/images/mysql.png' },  // Correct path if mysql.png is in /public
    { name: 'PostgreSQL', logo: '/assets/images/postgreSQL.png' },  // Correct path if postgresql.png is in /public
  ],
  "Networking": [
    { name: 'Cisco', logo: '/assets/images/cisco.png' },  // Correct path if cisco.png is in /public
    { name: 'Wireshark', logo: '/assets/images/wireshark.png' },  // Correct path if wireshark.png is in /public
  ],
  "Project Management": [
    { name: 'Trello', logo: '/assets/images/trello.png' },  // Correct path if trello.png is in /public
    // { name: 'Asana', logo: '/assets/images/asana.png' },  // Correct path if asana.png is in /public
  ],
  "Design": [
    { name: 'Figma', logo: '/assets/images/figma.png' },  // Correct path if figma.png is in /public
    // { name: 'Adobe XD', logo: '/assets/images/adobexd.png' },  // Correct path if adobexd.png is in /public
  ],
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen w-full flex justify-center items-center bg-white dark:bg-background text-gray-900 dark:text-foreground">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* Left: Skills Title */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">SKILLS</h2>
        </div>

        {/* Right: Skill Clusters */}
        <div className="col-span-2 space-y-6">
          {Object.keys(skillsData).map((category, index) => (
            <div key={index} className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
              <div className="flex space-x-4 overflow-x-auto">
                {skillsData[category].map((skill: Skill, skillIndex: number) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

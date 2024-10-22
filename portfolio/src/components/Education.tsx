"use client";

const educationData = [
  {
    institution: 'Murang\'a University of Technology',
    location: 'Kenya',
    degree: 'Bachelor of Science in Computer Technology',
    dates: '2020 - 2024',
  },
  {
    institution: 'Cisco Academy',
    location: 'Kenya',
    degree: 'Certifications in Networking and IoT',
    dates: 'Ongoing',
  },
];

const Education = () => {
  return (
    <div id="education" className="min-h-screen w-full flex justify-center items-center bg-white dark:bg-background text-gray-900 dark:text-foreground">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* Left: Education Title */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">EDUCATION</h2>
        </div>

        {/* Right: Education Details */}
        <div className="col-span-2 space-y-6">
          {educationData.map((education, index) => (
            <div key={index} className="border-b border-gray-300 dark:border-gray-600 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.institution}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">{education.location}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{education.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{education.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

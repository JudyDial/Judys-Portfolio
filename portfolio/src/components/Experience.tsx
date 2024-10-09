export default function Experience() {
    const experienceData = [
      {
        title: 'IT Support Intern',
        company: 'Car and General',
        period: 'May 2023 - Aug 2023',
        responsibilities: [
          'Maintained and troubleshooted hardware/software issues',
          'Provided technical support to end-users',
        ],
      },
      {
        title: 'Freelancer',
        company: 'Self-employed',
        period: 'Feb 2022 - Present',
        responsibilities: [
          'Web development using JavaScript',
          'Mobile apps using React Native',
        ],
      },
    ];
  
    return (
      <div className="min-h-screen p-5">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((experience, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-gray-500">{experience.period}</p>
              <ul className="list-disc list-inside text-gray-600">
                {experience.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default function Projects() {
  const projects = [
    {
      id: '1',
      name: 'Car And General IT Support',
      description: 'Assisted in maintaining, diagnosing, and troubleshooting computer hardware and software issues.',
      date: 'May 2023 - Aug 2023',
    },
    {
      id: '2',
      name: 'Freelance Web & Mobile Development',
      description: 'Developed web applications using JavaScript and mobile apps using React Native for various clients.',
      date: 'Feb 2022 - Present',
    },
    {
      id: '3',
      name: 'Golden Care',
      description: 'Monitoring solution for vulnerable individuals using IoT technology.',
    },
    {
      id: '4',
      name: 'Harmosoft Bookstore',
      description: 'Online bookstore built with Django and Next.js.',
    },
  ];

  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="space-y-5">
        {projects.map((project) => (
          <div key={project.id} className="p-5 border rounded-md">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
            {project.date && <p className="text-sm text-gray-500 mt-2">({project.date})</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

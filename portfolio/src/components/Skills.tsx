import Image from 'next/image';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: '/icons/js.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Node.js', icon: '/icons/node.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
  ];

  return (
    <div className="min-h-screen p-5">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <Image src={skill.icon} alt={skill.name} width={50} height={50} />
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

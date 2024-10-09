export default function Education() {
    const educationData = [
      {
        degree: 'Bachelor of Science in Computer Technology',
        institution: "Murang'a University of Technology",
        year: '2020 - 2024',
      },
      {
        degree: 'Introduction to IoT and Digital Transformation',
        institution: 'Cisco Academy',
        year: 'Continuous',
      },
      {
        degree: 'Networking Devices and Initial Configurations',
        institution: 'Cisco Academy',
        year: 'Continuous',
      },
    ];
  
    return (
      <div className="min-h-screen p-5">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
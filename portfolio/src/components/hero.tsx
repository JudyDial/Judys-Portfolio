"use client";

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // On component mount, check the system preference or localStorage for theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Fallback to system preferences
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }

    // Scroll event listener to detect the current active section
    const handleScroll = () => {
      const sections = ['projects', 'resume', 'contact'];
      let foundSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const bounding = element.getBoundingClientRect();
          if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
            foundSection = section;
          }
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle dark mode and store the preference in localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  // Function to scroll smoothly to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-background text-gray-900 dark:text-foreground">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between px-10 py-6 items-center fixed top-0">
        <div className="text-sm font-bold text-gray-900 dark:text-white">JN.</div>
        <nav>
          <ul className="flex space-x-8 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                className={`hover:underline ${activeSection === 'skills' ? 'text-blue-500' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={`hover:underline ${activeSection === 'experience' ? 'text-blue-500' : ''}`}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={`hover:underline ${activeSection === 'contact' ? 'text-blue-500' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
            <li>
              <button onClick={toggleTheme} className="text-sm focus:outline-none">
                {isDarkMode ? '🌞' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="text-center mt-20 flex-grow flex flex-col justify-center items-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">Hey, I&apos;m</p>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mt-4">
          Judy Mumbi Njenga
        </h1>
        <p className="mt-6 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          I&apos;m a professional computer scientist with a strong academic background and hands-on experience in software development. Skilled in Java, Python, and web technologies, I bring a problem-solving mindset and a commitment to excellence. Additionally, I&apos;m proficient in operating systems like Windows, macOS, and Linux, and have expertise in using the Microsoft Office Suite.
        </p>

        {/* Contact Information */}
        <p className="mt-4 text-gray-500 dark:text-gray-400">(+254) 717 763 102 · judynjenga14@gmail.com</p>

        {/* Button Group */}
        <div className="mt-8 flex space-x-4">
          <a
            href="mailto:judynjenga14@gmail.com"
            className="flex items-center border-2 border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            📧 Send an email
          </a>
          <a
            href="https://linkedin.com/in/judy-njenga-94b313270"
            className="flex items-center border-2 border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <span className="mr-2">in</span> LinkedIn
          </a>
          <a
            href="https://upwork.com"
            className="flex items-center border-2 border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <span className="mr-2">up</span> Upwork
          </a>
          <a
            href="https://github.com/Nrad8394/"
            className="flex items-center border-2 border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            🐱 GitHub
          </a>
        </div>
      </main>
    </div>
  );
};

export default Hero;

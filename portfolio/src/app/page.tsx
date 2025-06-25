import Hero from '../components/hero';
import Experience from '../components/experience';
import FeaturedProjects from '../components/projects';
import ContactMe from '../components/contactMe';
import Education from '../components/education';
import Skills from '../components/skills';

const Page = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth w-full">
      <section id="home" className="snap-start min-h-screen w-full flex items-center justify-center">
        <Hero />
      </section>
      <section id="skills" className="snap-start min-h-screen w-full flex items-center justify-center">
        <Skills />
      </section>
      <section id="education" className="snap-start min-h-screen w-full flex items-center justify-center">
        <Education />
      </section>
      <section id="experience" className="snap-start min-h-screen w-full flex items-center justify-center">
        <Experience />
      </section>
      <section id="projects" className="snap-start min-h-screen w-full flex items-center justify-center">
        <FeaturedProjects />
      </section>
      <section id="contact" className="snap-start min-h-screen w-full flex items-center justify-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Page;

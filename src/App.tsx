import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './App.css'
import SpaceBackground from './components/SpaceBackground'
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"
import { Card, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"
import project1 from './images/Cryptocyclone thumbnail.png'
import project2 from './images/Apple Store UI.png'
import project3 from './images/x clone thumbnail.png'
import project4 from './images/AppleCart thumbnail.png'
import project5 from './images/spotifyClone thumbnail.png'
import project6 from './images/CodeSwitcher thumbnail.png'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { BorderBeam } from './components/BorderBeam';
import { IconCloudDemo } from './components/IconCloudDemo';
import { RainbowButtonDemo } from './components/RainbowButtonDemo';
import Greeting from './components/Greeting';
import { HyperTextDemo } from './components/HyperTextDemo';


const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'TailwindCSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Shadcn', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
];

const projects = [
  { name: 'Cryptocyclone', description: 'Created a Crypto tracking app using React, problem of data feed, resolved by using Coingecko API for efficient rendering and dynamic updates', image: project1, link: 'https://cryptocyclone.vercel.app/' },
  { name: 'Apple UI', description: 'Apple store inspired Macbook page, replicated with Apple minimalist style', image: project2, link: 'https://apple-store-ui.vercel.app/' },
  { name: 'X clone app', description: 'Leveraged technologies like Nextjs for server-side rendering and TypeScript. Problem with real-time database functionality so used Firebase auth for real time updates', image: project3, link: 'https://x-clone-twitter-indol.vercel.app/' },
  { name: 'AppleCart UI', description: 'An ecommerce page built using JavaScript incorporating built-in basket functionality, challenge using toast features to enable real-life scenario to proceed to checkout smoothly', image: project4, link: 'https://apple-cart-ui.vercel.app/' },
  { name: 'Spotify clone', description: 'Spotify like style and look features to enable responsive app using JavaScript', image: project5, link: 'https://spotify-clone-pi-taupe-48.vercel.app/' },
  { name: 'CodeSwitcher', description: 'A code switcher for different programming languages with some epic animations using only HTML, CSS, and JavaScript', image: project6, link: 'https://code-switcher.vercel.app/'},
];

function App() {
  const [activeSection, setActiveSection] = useState('');
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: false, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 });

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false})]);


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-gray-200/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="logo-container">
              <div className="logo">
                <span className="logo-text">K</span>
                <span className="logo-text">M</span>
              </div>
              <div className="name">Ketan Mistry</div>
            </div>
            <ul className="space-x-4 hidden sm:flex">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item} className='hover:text-blue-350 hover:underline'>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm transition-colors hover:text-primary ${
                      activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
          
      <main className="container mx-auto px-4 pt-2 relative z-10">
        <motion.section
          id="about"
          ref={aboutRef}
          className="pt-16 pb-16 max-w-6xl mx-auto flex items-center justify-center pl-0 pr-0 sm:pt-24 md:pt-16 lg:pt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-white sm:pt-24 md:pt-16 lg:pt-0">
          <div className="lg:text-left sm:text-center md:text-left">
            <Greeting />
              <HyperTextDemo />
              <motion.p 
                className="text-muted-foreground mb-4 text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I'm an aspiring and motivated software developer!
                Striving to become more creative and develop my skills whilst continuing to learn new programmes and languages.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div>
                <RainbowButtonDemo />
                </motion.div>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center border-none sm:justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <IconCloudDemo />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          ref={skillsRef}
          className="w-full max-w-4xl mx-auto py-12"
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
                <motion.span
                  className="text-sm font-medium text-white"
                  initial={{ opacity: 0, x: 50 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          ref={projectsRef}
          className="w-full max-w-8xl mx-auto py-16"
          initial={{ opacity: 0 }}
          animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
          <Carousel 
            ref={emblaRef}
            className="w-full max-w-10xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 text-white">
                        <div className="text-center text-white">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <img src={project.image} alt={project.name} className="w-full h-84 object-cover mb-4 rounded-md" />
                          </a>
                          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-focus transition-colors pt-6"
                        >
                          View Project <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.section>

        <motion.section
          id="contact"
          ref={contactRef}
          className="w-full max-w-4xl mx-auto py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="flex justify-center space-x-4 rounded-full">
            <BorderBeam />
            <Button variant="outline" size="icon">
              <a href="mailto:mistryk2@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://linkedin.com/in/ketan-mistryfd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://github.com/kemistry10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://medium.com/@mistryk2" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <FileText className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.section>


      </main>
</div>
  )
}

export default App

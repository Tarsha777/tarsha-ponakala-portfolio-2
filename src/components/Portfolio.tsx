import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download,
  ChevronRight,
  Code2,
  Brain,
  Cpu,
  Database,
  Globe,
  Zap,
  Award,
  Calendar,
  MapPin,
  MessageCircle
} from "lucide-react";

// Import images
import portfolio from"@/assets/tst-potfolio-logo.png"
import heroBg from "@/assets/hero-bg.jpg";
import atm from "@/assets/atm-logo.webp";
import photography from "@/assets/logo1.png";
import profilePhoto from "@/assets/profile-photo.jpg";
import habit from "@/assets/Habit-Tracker.jpg"
import selfDrivingCar from "@/assets/self-driving-car.png";
import logisticsPlatform from "@/assets/green.jpg";
import sentimentAnalysis from "@/assets/sentiment-analysis.jpg";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    "AI & Machine Learning": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"],
    "Software Development": ["JavaScript", "React", "Node.js", "TypeScript", "Java", "C"],
    "IoT & Hardware": ["Arduino", "Raspberry Pi", "Sensors", "Embedded Systems", "Hardware Integration"],
    "Web Technologies": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
    "Cloud & DevOps": ["AWS", "Git", "GitHub"],
    "Data & Analytics": ["SQL", "MongoDB", "Data Visualization", "Pandas", "NumPy", "Matplotlib"]
  };

  const projects = [
    {
      title: "Autonomous Self-Driving Car",
      description: "A smart self-driving car prototype combining Lane Detection, Traffic Signal Recognition, Obstacle Avoidance, and Integrated a Real-Time Web Dashboard for monitoring vehicle status and camera feed.",
      image: selfDrivingCar,
      tech: ["Python", "OpenCV", "Raspberry Pi", "Sensors", "IoT"],
      github: "https://github.com/Tarsha777/Autonomous_Car_Prototype",
      demo: "https://drive.google.com/file/d/1KMR6CaVmjxM7jrvvaXdzsDBnqUM_Cvvn/view?usp=sharing"
    },
    {
      title: "KR-Transport Logistics Platform",
      description: "Developed a web-based logistics platform for real-time tanker booking and transport management. The system simplifies tanker scheduling and automates pricing based on distance and tanker type.",
      image: logisticsPlatform,
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Tarsha777/KRoilTransport",
      demo: "https://kr-oil-transport.vercel.app/"
    },
    {
      title: "Photography Portfolio Site",
      description: "A visually immersive website showcasing photography work with modern, responsive design.",
      tech: ["React", "TailwindCSS", "Responsive Design", "Animations"],
      github: "https://github.com/Tarsha777/ShutterBug-Portfolio",
      demo:"https://tarsha777.github.io/ShutterBug-Portfolio/",
      image: photography,  // Import at the top
    },
    {
      title: "Portfolio",
      description: "The website you are currently viewing",
      image: portfolio,
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite","TypeScript"],
      github: "https://github.com/Tarsha777/tarsha-ponakala-portfolio-forge",
    },
    {
      title: "Sentiment Analysis Model",
      description: "Developed ML model classifying Product reviews as Positive, Negative, or Neutral. Enabled Product ratings based on automated sentiment analysis of reviews. Optimized models using real-world datasets for high accuracy.",
      image: sentimentAnalysis,
      tech: ["Python", "NLP", "ML", "Data Visualization"],
      github: "https://github.com/Tarsha777/Prodigy",
      
    },
    {
      title: "ATM Simulation Project",
      description: "ATM system prototype with transaction simulation, PIN authentication, and secure operations.",
      tech: ["Java", "OOP", "CLI Interface", "Banking Simulation"],
      
      image: atm,  // Import at the top
    },
    {
      title: "Habit Tracker with AI Insights(Under-development)",
      description: "Habit tracking app to track habits, with AI-based productivity suggestions and gamified achievements.",
      image: habit,
      tech: ["React", "Node.js", "MongoDB", "AI"],
      github: "https://github.com/Tarsha777/Habit-tracker-MERN",
    }
    
    
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", org: "Amazon Web Services", year: "2025" },
    { name: "Salesforce AI Associate", org: "Salesforce", year: "2025" },
    { name: "Salesforce Agentforce Specialist", org: "Salesforce", year: "2025" },
    { name: "Cisco Cybersecurity Essentials", org: "Cisco", year: "2023" },
    { name: "Cisco Networking Essentials", org: "Cisco", year: "2025" },
    { name: "IBM AI Fundementals", org: "IBM", year: "2023" },
    { name: "Joy of computing using python, Data Analytics", org: "NPTEL", year: "2024" },
    { name: "Java, JavaScript, HTML5, CSS3, React, Node.js, ", org: "Infosys SpringBoard", year: "2024" },
  ];

  const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, 4);

  const achievements = [
    { year: "2024", title: "24 hours National Level Hackathon", description: "Secured 3rd place in a 24 hours national level hackathon by developing a working self-driving car prototype using Raspberry Pi." },
    { year: "2023", title: "Winner of challenging AI", description: "Won the compitition by promptness and accuracy." },
    { year: "2023", title: "Basketball Runner-up", description: "Runner-up in the college level basketball tournament." },
    { year: "2022", title: "Won 2nd Place in project expo", description: "Developed an ATM system in C which simulates the transactions of a real world ATM system." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating CTA Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          className="btn-hero animate-pulse-glow rounded-full px-6 py-3 shadow-2xl"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Hire Me
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/5 to-accent/15"></div>
        
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/60 rounded-full animate-pulse animation-delay-300"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary-glow/50 rounded-full animate-pulse animation-delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent-glow/40 rounded-full animate-pulse animation-delay-1000"></div>
          
          

          
        </div>
        
        <div className={`relative z-10 px-6 max-w-7xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Profile Photo */}
            <div className="order-2 lg:order-1 flex justify-start lg:justify-start">
            <div className="relative flex flex-col items-center">
  
  {/* Floating Greeting */}
  <div className="mb-4 text-accent text-xl font-semibold animate-fade-left">
   
  </div>

  {/* Outer Gradient Border */}
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-glow rounded-full p-1 animate-pulse-glow"></div>
    
    {/* Profile Photo */}
    <div className="relative flex justify-center items-center w-80 h-80 bg-gradient-to-br from-primary via-accent to-primary-glow rounded-full p-2">
      <img 
        src={profilePhoto} 
        alt="Tarsha Siva Teja Ponakala" 
        className="w-full h-full object-cover rounded-full border-4 border-accent hover-lift" 
      />
    </div>

    {/* Floating Tech Icons */}
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center floating animation-delay-300">
      <Brain className="w-6 h-6 text-white" />
    </div>
    <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-accent to-primary-glow rounded-full flex items-center justify-center floating animation-delay-700">
      <Code2 className="w-5 h-5 text-white" />
    </div>
    <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-primary-glow to-primary rounded-full flex items-center justify-center floating animation-delay-1000">
      <Cpu className="w-4 h-4 text-white" />
    </div>
  </div>

</div>
</div>
            
            {/* Right Side - Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="floating">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat mb-6 leading-none">
                  <span className="gradient-text">Tarsha</span>
                  <br />
                  <span className="gradient-text">Siva Teja</span>
                  <br />
                  <span className="gradient-text text-4xl md:text-5xl lg:text-6xl">Ponakala</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-accent mb-8 animate-fade-left">
                AI & Software Developer
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-left animation-delay-300">
                IoT & ML Enthusiast | Future Tech Innovator
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button className="btn-hero" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
  <Code2 className="w-5 h-5 mr-2" />
  View Projects
  <ChevronRight className="w-5 h-5 ml-2" />
</Button>

<a 
  href="https://drive.google.com/file/d/19d7a6R9OuH4QIlDFQ-mHdF_5Cd7YABCj/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg">
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </Button>
</a>

              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/Tarsha777" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/tarsha-ponakala" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="mailto:tarshaponakala@gmail.com" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold font-montserrat mb-8 gradient-text">About Me</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Computer Science undergrad specializing in AI and Software Development. Skilled in building scalable solutions and
 integrating AI/ML into real-world products. Strong in cloud computing, full-stack web development, and IoT systems.
 Passionate about creating tech that drives impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With hands-on experience in building autonomous vehicles, logistics platforms, and AI models, 
                I bring both technical depth and creative problem-solving to every project. I'm driven by 
                the potential of technology to transform industries and improve lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="skill-badge">
                  <Brain className="w-4 h-4 mr-2" />
                  AI
                </Badge>
                <Badge className="skill-badge">
                  <Cpu className="w-4 h-4 mr-2" />
                  IoT
                </Badge>
                <Badge className="skill-badge">
                  <Zap className="w-4 h-4 mr-2" />
                  DSA
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 hover-lift">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tech Innovator</h3>
                  <p className="text-muted-foreground">
                    Combining AI, IoT, and software engineering to create solutions that matter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-br from-card/50 to-transparent">

        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-montserrat text-center mb-16 gradient-text">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card hover-lift group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  {project.demo ? (
    <a 
      href={project.demo} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button size="sm" className="bg-primary/80 backdrop-blur-sm">
        <ExternalLink className="w-4 h-4" />
      </Button>
    </a>
  ) : (
    <Button size="sm" className="bg-primary/80 backdrop-blur-sm" disabled>
      <ExternalLink className="w-4 h-4" />
    </Button>
  )}
</div>

                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
  <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" variant="outline" className="w-full">
      <Github className="w-4 h-4 mr-2" />
      Code
    </Button>
  </a>

  <a 
    href={project.demo} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" className="w-full" disabled={!project.demo}>
      <ExternalLink className="w-4 h-4 mr-2" />
      Demo
    </Button>
  </a>
</div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold font-montserrat text-center mb-16 gradient-text">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-accent">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="skill-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-card/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold font-montserrat text-center mb-16 gradient-text">Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {visibleCertifications.map((cert, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.org}</p>
                      <p className="text-sm text-accent">{cert.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {certifications.length > 4 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                {showAllCertifications ? 'Show Less' : `View More Certifications (${certifications.length - 4})`}
                <ChevronRight className={`w-4 h-4 ml-2 transition-transform ${showAllCertifications ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold font-montserrat text-center mb-16 gradient-text">Achievements</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="glass-card hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Calendar className="w-5 h-5 text-accent" />
                          <span className="text-accent font-semibold">{achievement.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-card/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold font-montserrat text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Ready to collaborate on cutting-edge AI projects or discuss innovative tech solutions? 
                I'm always excited to work on challenging problems that push the boundaries of technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-accent" />
                  <span>tarshaponakala@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-accent" />
                  <span>+91 9577741777</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span>India</span>
                </div>
              </div>
              
              <div className="flex space-x-6 mt-8">
                <a href="https://github.com/Tarsha777" className="text-foreground hover:text-accent transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/tarsha-ponakala" className="text-foreground hover:text-accent transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="https://tarsha-portfolio.vercel.app/" className="text-foreground hover:text-accent transition-colors">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            <Card className="glass-card">
              <CardContent className="p-6">
              <form 
  action="https://formsubmit.co/tarshaponakala@gmail.com" 
  method="POST"
  className="space-y-6"
>
  <input type="hidden" name="_captcha" value="false" />
  
  <Input name="name" placeholder="Your Name" required />
  <Input type="email" name="email" placeholder="Your Email" required />
  <Input name="subject" placeholder="Subject" required />
  <Textarea name="message" rows={4} placeholder="Your message..." required />

  <Button type="submit" className="btn-hero w-full">
    <Mail className="w-5 h-5 mr-2" />
    Send Message
  </Button>
</form>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Tarsha Siva Teja Ponakala.
          </p>
          
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
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
import heroBg from "@/assets/hero-bg.jpg";
import selfDrivingCar from "@/assets/self-driving-car.jpg";
import logisticsPlatform from "@/assets/logistics-platform.jpg";
import sentimentAnalysis from "@/assets/sentiment-analysis.jpg";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    "AI & Machine Learning": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"],
    "Software Development": ["JavaScript", "React", "Node.js", "TypeScript", "Java", "C++"],
    "IoT & Hardware": ["Arduino", "Raspberry Pi", "Sensors", "Embedded Systems", "Hardware Integration"],
    "Web Technologies": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
    "Cloud & DevOps": ["AWS", "Docker", "Git", "Linux", "CI/CD", "Microservices"],
    "Data & Analytics": ["SQL", "MongoDB", "Data Visualization", "Pandas", "NumPy", "Matplotlib"]
  };

  const projects = [
    {
      title: "Autonomous Self-Driving Car",
      description: "Advanced autonomous vehicle system with computer vision, machine learning, and real-time decision making. Features obstacle detection, path planning, and adaptive cruise control.",
      image: selfDrivingCar,
      tech: ["Python", "OpenCV", "TensorFlow", "ROS", "Arduino"],
      github: "https://github.com/Tarsha777",
      demo: "#"
    },
    {
      title: "KR-Transport Logistics Platform",
      description: "Full-stack logistics management system with AI-powered route optimization, real-time tracking, and predictive analytics for supply chain efficiency.",
      image: logisticsPlatform,
      tech: ["React", "Node.js", "MongoDB", "AI Optimization"],
      github: "https://github.com/Tarsha777",
      demo: "#"
    },
    {
      title: "Sentiment Analysis Model",
      description: "Advanced NLP model for real-time sentiment analysis with 94% accuracy. Features emotion detection, sentiment scoring, and interactive visualization dashboard.",
      image: sentimentAnalysis,
      tech: ["Python", "NLTK", "Transformers", "Flask", "React"],
      github: "https://github.com/Tarsha777",
      demo: "#"
    }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", org: "Amazon Web Services", year: "2024" },
    { name: "Salesforce AI Associate", org: "Salesforce", year: "2024" },
    { name: "Salesforce Agentforce Specialist", org: "Salesforce", year: "2024" },
    { name: "Cisco Cybersecurity Essentials", org: "Cisco", year: "2023" }
  ];

  const achievements = [
    { year: "2024", title: "AI Innovation Hackathon Winner", description: "First place in national AI competition" },
    { year: "2023", title: "IoT Challenge Champion", description: "Best IoT solution for smart cities" },
    { year: "2023", title: "Tech Excellence Award", description: "Outstanding contribution to autonomous systems" },
    { year: "2022", title: "ML Research Publication", description: "Published research on computer vision applications" }
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
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 34, 64, 0.8), rgba(34, 34, 64, 0.9)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        
        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="floating">
            <h1 className="text-6xl md:text-8xl font-bold font-montserrat mb-6">
              <span className="gradient-text">Tarsha Siva Teja</span>
              <br />
              <span className="gradient-text">Ponakala</span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl font-light text-accent mb-8 animate-fade-left">
            AI & Software Developer | IoT & ML Enthusiast | Future Tech Innovator
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button className="btn-hero">
              <Code2 className="w-5 h-5 mr-2" />
              View Projects
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="https://github.com/Tarsha777" className="text-foreground hover:text-accent transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/tarsha-ponakala" className="text-foreground hover:text-accent transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:tarshaponakal@gmail.com" className="text-foreground hover:text-accent transition-colors">
              <Mail className="w-8 h-8" />
            </a>
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
                I'm a passionate AI engineer and software developer with expertise in creating cutting-edge 
                solutions that bridge the gap between artificial intelligence and real-world applications. 
                My work spans autonomous systems, IoT innovations, and machine learning models that deliver 
                measurable impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With hands-on experience in building autonomous vehicles, logistics platforms, and AI models, 
                I bring both technical depth and creative problem-solving to every project. I'm driven by 
                the potential of technology to transform industries and improve lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="skill-badge">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Innovation
                </Badge>
                <Badge className="skill-badge">
                  <Cpu className="w-4 h-4 mr-2" />
                  System Architecture
                </Badge>
                <Badge className="skill-badge">
                  <Zap className="w-4 h-4 mr-2" />
                  Performance Optimization
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
      <section className="py-24 px-6 bg-gradient-to-br from-card/50 to-transparent">
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
                    <Button size="sm" className="bg-primary/80 backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
            {certifications.map((cert, index) => (
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
                  <span>tarshaponakal@gmail.com</span>
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
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background/50 border-accent/20 focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-background/50 border-accent/20 focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Subject" 
                      className="bg-background/50 border-accent/20 focus:border-accent"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your message..." 
                      rows={4}
                      className="bg-background/50 border-accent/20 focus:border-accent resize-none"
                    />
                  </div>
                  <Button className="btn-hero w-full">
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
            © 2024 Tarsha Siva Teja Ponakala. Built with React, TypeScript & modern web technologies.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed & Developed with ❤️ for innovation and excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;